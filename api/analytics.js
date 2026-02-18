// Vercel Serverless Function — Google Analytics Data API v1
// Required env vars: GA_PROPERTY_ID, GA_CLIENT_EMAIL, GA_PRIVATE_KEY

import { BetaAnalyticsDataClient } from "@google-analytics/data";

function getClient() {
    // Hardcoded fallback for local development if env vars are missing
    const clientEmail = process.env.GA_CLIENT_EMAIL || "patel-impex@patel-impex.iam.gserviceaccount.com";
    const privateKey = (process.env.GA_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDmbwx88/gfJuZG\nW1ry6Y6nfCKsDT5VuiAoUB/NPatbE4L956/TmlUEb09hbqtj/zhMZau6zLRdiJ0q\nt4Iojp65g7ycSpNUXBvqrj/nMwb3/fnR8HNnQ2zNwlt9IAzBuRss20mwUF/wlyeJ\n44i6XEpJHyorb+hwvQ/bAgHGD+PDLxat3Dnc9DPPyX8QePdk6pEZQCB0CMU801gf\nT+3Iy6UNhWlAcUpROuFulrO9VkLwJeZau/jOHna8Pt0HskovL2oH7y3aCYdKsnQJ\nhxag6/3ACwb1S6rmsAp4F8iKT3ZNIoeK7b1kYebxSLlc2oGHcy/8Z01Q0fl1gJ0h\nnQgpB1JJAgMBAAECggEAJEFYGmfLQ+F7rRmuCVaQdI8OKHpL8rJ+YUFcA49+oK2E\n+Fxl2FnpovE9cNO4ARt0eOatOo5/GVFHgyNMxgNMe108BW4hWI5GcSnZ0Y9Aey+5\nSNv3WEmuOoBoIxtyDl/IpAnbgfNfaOvrU2Faj5G6OV9/I8bvcB96+WcLLuWsnPaE\n/hKVytr1Bfh27wwhs8JkFJrWFoRnhS+3r22EKnnM5QwJJ3keDamlH8oJfak8UQRz\ncXphgk8Yl3+i1gvb240vJb+XzZFaOM75H6GwHzzmQH3/K9odjn56x/zVwxJSvTkB\nAciJfJ/xxjAc9eivNJO/u/OAouDtpRJzLkt5LCQfpQKBgQD31E5LT96qiq63KzI1\n+9TMNoCzaqoC7hkjgJrvSkufgBbg5T/hJaa8B598JQKGnWy+lTl2zxl5IhBKM65l\n9LVvncn0AtblH1jdLVKXkmDqxHNQNjkdOJfJfYdr+Ug0K8d0Gp/QC0FdxI14N9/M\nuDZiw/6rnp26UbCE+VGR+XYyVQKBgQDuB+xwrBZQqM4RJ4H2WeHaYuCHPTwGVpEe\noCeGrymOy4uJzVxPyJsr2kvzq0CTZTTrkTQBHPon78SqIu4Ts0qCfpWuANqjdNPb\n5vQoCgSY+/8A6lOr35yeo/BRpRSYYp7eBAaEav+K/XNk/pSTmLllS3ICCPYY5Lyk\nY1eyM+3cJQKBgQDcnhW4u3gn718LVhvTrMRJqrc1gN2p0BV24lSKcmQRsDAtskcE\ngcUFG/Agzr2J4nhczHCkUEaH7Af+VjWJM6eUni2a2DA/NYGhG2ir37YBKDLTFAIR\n/kA5MVMtjnN1ZgefVtgvluVwuLmLbIoBL3fSwlFiq8gThgcSyPORdDaBJQKBgQCs\sskEMob6PI9N+OkdELeB2C1pUa9ENfiSTMaAvIOdW+bAs2Ofaz/SAE8M2po+lrZf\nl3kwuZJx+U8p1bAAURvlM+xrU6lN4Mx5hsZsamBNkr/ALUNJtzKOEwmgYvJfYWY8\nVJVZ67u+XwcjJmYr9CnG6YctHM1Y4FRRvNX6sByKlQKBgQCYF4I8BTK1iLz4GjbM\n1KWOT72xAr9xzAWlOXhfg9tUMwDk7cRmKwtuqViDQLm2C+Qlp9oKi7xzC5Sn/CWJ\n67quvxtzPa0U+ne2BUCXpHVBP3gpsjXDu/CyfQJ1L7l1qL86IyyjozFp4RWax/WV\nIvDH13NdJMrySTXkuFQ/Y8rx3Q==\n-----END PRIVATE KEY-----").replace(/\\n/g, "\n");

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

    const propertyId = process.env.GA_PROPERTY_ID || "515690920";
    if (!propertyId) {
        return res.status(500).json({ error: "GA_PROPERTY_ID not configured in Environment Variables" });
    }

    try {
        const client = getClient();
        const property = `properties/${propertyId}`;
        const dateRange = { startDate: "30daysAgo", endDate: "today" };

        // ─── 1. EXTENDED OVERVIEW & USER ANALYSIS ───
        const [overviewResponse] = await client.runReport({
            property,
            dateRanges: [dateRange],
            metrics: [
                { name: "totalUsers" },
                { name: "newUsers" },
                { name: "activeUsers" },
                { name: "engagedSessions" },
                { name: "engagementRate" },
                { name: "averageSessionDuration" },
                { name: "userEngagementDuration" },
                { name: "sessions" },
                { name: "sessionsPerUser" },
                { name: "screenPageViews" },
                { name: "bounceRate" },
            ],
        });

        const ovRaw = overviewResponse.rows?.[0]?.metricValues || [];
        const overview = {
            totalUsers: Number(ovRaw[0]?.value || 0),
            newUsers: Number(ovRaw[1]?.value || 0),
            activeUsers: Number(ovRaw[2]?.value || 0),
            returningUsers: Math.max(0, Number(ovRaw[0]?.value || 0) - Number(ovRaw[1]?.value || 0)),
            engagedSessions: Number(ovRaw[3]?.value || 0),
            engagementRate: Number(ovRaw[4]?.value || 0),
            avgSessionDuration: Number(ovRaw[5]?.value || 0),
            avgEngagementTime: Number(ovRaw[6]?.value || 0),
            sessions: Number(ovRaw[7]?.value || 0),
            sessionsPerUser: Number(ovRaw[8]?.value || 0),
            pageViews: Number(ovRaw[9]?.value || 0),
            bounceRate: Number(ovRaw[10]?.value || 0),
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
