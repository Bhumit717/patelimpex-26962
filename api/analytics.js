// Vercel Serverless Function — Google Analytics Data API v1
// Required env vars: GA_PROPERTY_ID, GA_CLIENT_EMAIL, GA_PRIVATE_KEY

import { BetaAnalyticsDataClient } from "@google-analytics/data";

function getClient() {
    const clientEmail = process.env.GA_CLIENT_EMAIL;
    let privateKey = process.env.GA_PRIVATE_KEY;

    if (privateKey) {
        // 1. Remove ANY surrounding quotes (common in Vercel)
        privateKey = privateKey.trim().replace(/^["']|["']$/g, '');

        // 2. Normalize newlines: 
        // Handles literal \n strings (backslash + n) AND real newlines
        // Also replaces double-escaped \\n
        privateKey = privateKey.replace(/\\n/g, '\n').replace(/\\\\n/g, '\n');

        // 3. Ensure the key has the correct PEM line breaks if it was pasted as a single line
        if (!privateKey.includes('\n') && privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
            // Reconstruct if it got mangled into one line
            privateKey = privateKey
                .replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n')
                .replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----');
        }
    }

    if (!clientEmail || !privateKey) {
        throw new Error("Missing GA_CLIENT_EMAIL or GA_PRIVATE_KEY");
    }

    return new BetaAnalyticsDataClient({
        credentials: { client_email: clientEmail, private_key: privateKey },
    });
}

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") return res.status(200).end();

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const propertyId = process.env.GA_PROPERTY_ID;
    if (!propertyId) {
        return res.status(500).json({ error: "GA_PROPERTY_ID not configured in Environment Variables" });
    }

    try {
        const client = getClient();
        const property = `properties/${propertyId}`;
        const dateRange = { startDate: "30daysAgo", endDate: "today" };

        // ─── 1. EXTENDED OVERVIEW & USER ANALYSIS (Split due to 10-metric limit) ───
        const [ovBatch1] = await client.runReport({
            property,
            dateRanges: [dateRange],
            metrics: [
                { name: "totalUsers" },
                { name: "newUsers" },
                { name: "activeUsers" },
                { name: "engagedSessions" },
                { name: "engagementRate" },
                { name: "averageSessionDuration" },
            ],
        });

        const [ovBatch2] = await client.runReport({
            property,
            dateRanges: [dateRange],
            metrics: [
                { name: "userEngagementDuration" },
                { name: "sessions" },
                { name: "sessionsPerUser" },
                { name: "screenPageViews" },
                { name: "bounceRate" },
            ],
        });

        const raw1 = ovBatch1.rows?.[0]?.metricValues || [];
        const raw2 = ovBatch2.rows?.[0]?.metricValues || [];

        const overview = {
            totalUsers: Number(raw1[0]?.value || 0),
            newUsers: Number(raw1[1]?.value || 0),
            activeUsers: Number(raw1[2]?.value || 0),
            returningUsers: Math.max(0, Number(raw1[0]?.value || 0) - Number(raw1[1]?.value || 0)),
            engagedSessions: Number(raw1[3]?.value || 0),
            engagementRate: Number(raw1[4]?.value || 0),
            avgSessionDuration: Number(raw1[5]?.value || 0),
            avgEngagementTime: Number(raw2[0]?.value || 0),
            sessions: Number(raw2[1]?.value || 0),
            sessionsPerUser: Number(raw2[2]?.value || 0),
            pageViews: Number(raw2[3]?.value || 0),
            bounceRate: Number(raw2[4]?.value || 0),
        };

        // ─── 2. DEMOGRAPHICS (CONTINENT, REGION, CITY) ───
        const [demoResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "continent" }, { name: "country" }, { name: "region" }, { name: "city" }, { name: "language" }],
            metrics: [{ name: "activeUsers" }],
            limit: 50,
        });

        const demographics = (demoResponse.rows || []).map(row => ({
            continent: row.dimensionValues[0].value,
            country: row.dimensionValues[1].value,
            region: row.dimensionValues[2].value,
            city: row.dimensionValues[3].value,
            language: row.dimensionValues[4].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 3. TECH & PLATFORM ───
        const [techResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "deviceCategory" }, { name: "browser" }, { name: "operatingSystem" }, { name: "screenResolution" }, { name: "platform" }],
            metrics: [{ name: "activeUsers" }],
        });

        const tech = (techResponse.rows || []).map(row => ({
            device: row.dimensionValues[0].value,
            browser: row.dimensionValues[1].value,
            os: row.dimensionValues[2].value,
            resolution: row.dimensionValues[3].value,
            platform: row.dimensionValues[4].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 4. PAGE ANALYSIS (TOP, LANDING, EXIT) ───
        const [pagesFullResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "pagePath" }],
            metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "averageSessionDuration" }, { name: "exits" }],
            limit: 25,
        });

        const pages = (pagesFullResponse.rows || []).map(row => ({
            path: row.dimensionValues[0].value,
            views: Number(row.metricValues[0].value),
            users: Number(row.metricValues[1].value),
            avgTime: Number(row.metricValues[2].value),
            exits: Number(row.metricValues[3].value),
        }));

        // ─── 5. TRAFFIC SOURCE (CAMPAIGNS, MEDIUM, SOURCE) ───
        const [trafficResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }, { name: "sessionCampaignName" }, { name: "sessionDefaultChannelGroup" }],
            metrics: [{ name: "sessions" }, { name: "activeUsers" }, { name: "conversions" }],
            limit: 20,
        });

        const traffic = (trafficResponse.rows || []).map(row => ({
            source: row.dimensionValues[0].value,
            medium: row.dimensionValues[1].value,
            campaign: row.dimensionValues[2].value,
            channel: row.dimensionValues[3].value,
            sessions: Number(row.metricValues[0].value),
            users: Number(row.metricValues[1].value),
            conversions: Number(row.metricValues[2].value),
        }));

        // ─── 6. EVENTS & INTERACTIONS ───
        const [eventsResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "eventName" }],
            metrics: [{ name: "eventCount" }, { name: "activeUsers" }],
            limit: 20,
        });

        const events = (eventsResponse.rows || []).map(row => ({
            name: row.dimensionValues[0].value,
            count: Number(row.metricValues[0].value),
            users: Number(row.metricValues[1].value),
        }));

        // ─── 7. E-COMMERCE (PURCHASES, REVENUE) ───
        const [ecomResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            metrics: [
                { name: "transactions" },
                { name: "purchaseRevenue" },
                { name: "totalPurchasers" },
                { name: "ecommercePurchases" },
                { name: "itemListViews" },
                { name: "addToCarts" },
            ],
        }).catch(() => [null]);

        const ecomRaw = ecomResponse?.rows?.[0]?.metricValues || [];
        const ecommerce = {
            transactions: Number(ecomRaw[0]?.value || 0),
            revenue: Number(ecomRaw[1]?.value || 0),
            purchasers: Number(ecomRaw[2]?.value || 0),
            purchases: Number(ecomRaw[3]?.value || 0),
            views: Number(ecomRaw[4]?.value || 0),
        };

        // ─── 8. REALTIME ANALYSIS (LITE VERSION) ───
        const [realtimeResponse] = await client.runRealtimeReport({
            property,
            dimensions: [{ name: "city" }, { name: "unifiedPageScreen" }],
            metrics: [{ name: "activeUsers" }],
        }).catch(() => [null]);

        const realtime = {
            activeUsers: realtimeResponse?.rows?.reduce((acc, row) => acc + Number(row.metricValues[0].value), 0) || 0,
            locations: (realtimeResponse?.rows || []).slice(0, 5).map(row => ({ city: row.dimensionValues[0].value, users: Number(row.metricValues[0].value) })),
            pages: (realtimeResponse?.rows || []).slice(0, 5).map(row => ({ page: row.dimensionValues[1].value, users: Number(row.metricValues[0].value) })),
        };

        // ─── 9. RETENTION & RETURNING ───
        const [retentionResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "newVsReturning" }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }],
        });

        const retention = (retentionResponse.rows || []).map(row => ({
            type: row.dimensionValues[0].value, // new or returning
            users: Number(row.metricValues[0].value),
            sessions: Number(row.metricValues[1].value),
        }));

        // ─── 10. DAILY TREND (FOR CHARTING) ───
        const [dailyResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            dimensions: [{ name: "date" }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }],
            orderBys: [{ dimension: { dimensionName: "date" } }],
        });

        const daily = (dailyResponse.rows || []).map(row => ({
            date: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
            sessions: Number(row.metricValues[1].value),
            views: Number(row.metricValues[2].value),
        }));

        return res.status(200).json({
            success: true,
            fetchedAt: new Date().toISOString(),
            overview,
            demographics,
            tech,
            pages,
            traffic,
            events,
            ecommerce,
            realtime,
            retention,
            daily,
        });
    } catch (error) {
        console.error("GA API Error:", error);
        return res.status(500).json({
            error: "Failed to fetch analytics",
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
