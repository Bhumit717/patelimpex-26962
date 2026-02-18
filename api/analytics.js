// Vercel Serverless Function — Google Analytics Data API v1
// Credentials are stored in Vercel Environment Variables (never in code)
// Required env vars: GA_PROPERTY_ID, GA_CLIENT_EMAIL, GA_PRIVATE_KEY

import { BetaAnalyticsDataClient } from "@google-analytics/data";

// Helper: create the authenticated client from env vars
function getClient() {
    const clientEmail = process.env.GA_CLIENT_EMAIL;
    const privateKey = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"); // Vercel stores \n as literal
    if (!clientEmail || !privateKey) {
        throw new Error("Missing GA_CLIENT_EMAIL or GA_PRIVATE_KEY environment variables");
    }
    return new BetaAnalyticsDataClient({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
    });
}

export default async function handler(req, res) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") return res.status(200).end();

    // Simple auth check — admin password must be sent as Bearer token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const propertyId = process.env.GA_PROPERTY_ID;
    if (!propertyId) {
        return res.status(500).json({ error: "GA_PROPERTY_ID not configured" });
    }

    try {
        const client = getClient();
        const property = `properties/${propertyId}`;

        // ─── 1. Overview metrics (last 30 days) ───
        const [overviewResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            metrics: [
                { name: "activeUsers" },
                { name: "sessions" },
                { name: "screenPageViews" },
                { name: "bounceRate" },
                { name: "averageSessionDuration" },
                { name: "newUsers" },
                { name: "engagedSessions" },
                { name: "totalUsers" },
            ],
        });

        const overviewRow = overviewResponse.rows?.[0]?.metricValues || [];
        const overview = {
            activeUsers: Number(overviewRow[0]?.value || 0),
            sessions: Number(overviewRow[1]?.value || 0),
            pageViews: Number(overviewRow[2]?.value || 0),
            bounceRate: Number(Number(overviewRow[3]?.value || 0).toFixed(4)),
            avgSessionDuration: Number(Number(overviewRow[4]?.value || 0).toFixed(1)),
            newUsers: Number(overviewRow[5]?.value || 0),
            engagedSessions: Number(overviewRow[6]?.value || 0),
            totalUsers: Number(overviewRow[7]?.value || 0),
        };

        // ─── 2. Daily visitors (last 30 days) ───
        const [dailyResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "date" }],
            metrics: [
                { name: "activeUsers" },
                { name: "sessions" },
                { name: "screenPageViews" },
                { name: "newUsers" },
            ],
            orderBys: [{ dimension: { dimensionName: "date" } }],
        });

        const dailyVisitors = (dailyResponse.rows || []).map((row) => ({
            date: row.dimensionValues[0].value, // YYYYMMDD
            activeUsers: Number(row.metricValues[0].value),
            sessions: Number(row.metricValues[1].value),
            pageViews: Number(row.metricValues[2].value),
            newUsers: Number(row.metricValues[3].value),
        }));

        // ─── 3. Top pages ───
        const [pagesResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "pagePath" }],
            metrics: [
                { name: "screenPageViews" },
                { name: "activeUsers" },
                { name: "averageSessionDuration" },
            ],
            orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
            limit: 20,
        });

        const topPages = (pagesResponse.rows || []).map((row) => ({
            page: row.dimensionValues[0].value,
            views: Number(row.metricValues[0].value),
            users: Number(row.metricValues[1].value),
            avgDuration: Number(Number(row.metricValues[2].value).toFixed(1)),
        }));

        // ─── 4. Traffic sources ───
        const [sourcesResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "sessionDefaultChannelGroup" }],
            metrics: [{ name: "sessions" }, { name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
            limit: 10,
        });

        const trafficSources = (sourcesResponse.rows || []).map((row) => ({
            source: row.dimensionValues[0].value,
            sessions: Number(row.metricValues[0].value),
            users: Number(row.metricValues[1].value),
        }));

        // ─── 5. Countries ───
        const [countryResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "country" }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
            limit: 15,
        });

        const countries = (countryResponse.rows || []).map((row) => ({
            country: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
            sessions: Number(row.metricValues[1].value),
        }));

        // ─── 6. Devices ───
        const [deviceResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "deviceCategory" }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
        });

        const devices = (deviceResponse.rows || []).map((row) => ({
            device: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
            sessions: Number(row.metricValues[1].value),
        }));

        // ─── 7. Browsers ───
        const [browserResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "browser" }],
            metrics: [{ name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
            limit: 10,
        });

        const browsers = (browserResponse.rows || []).map((row) => ({
            browser: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 8. Operating Systems ───
        const [osResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "operatingSystem" }],
            metrics: [{ name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
            limit: 10,
        });

        const operatingSystems = (osResponse.rows || []).map((row) => ({
            os: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 9. Referrers ───
        const [referrerResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "sessionSource" }],
            metrics: [{ name: "sessions" }, { name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
            limit: 15,
        });

        const referrers = (referrerResponse.rows || []).map((row) => ({
            source: row.dimensionValues[0].value,
            sessions: Number(row.metricValues[0].value),
            users: Number(row.metricValues[1].value),
        }));

        // ─── 10. Hourly distribution (last 7 days) ───
        const [hourlyResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
            dimensions: [{ name: "hour" }],
            metrics: [{ name: "activeUsers" }],
            orderBys: [{ dimension: { dimensionName: "hour" } }],
        });

        const hourlyDistribution = (hourlyResponse.rows || []).map((row) => ({
            hour: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 11. Landing Pages ───
        const [landingResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "landingPagePlusQueryString" }],
            metrics: [{ name: "sessions" }, { name: "bounceRate" }],
            orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
            limit: 10,
        });

        const landingPages = (landingResponse.rows || []).map((row) => ({
            page: row.dimensionValues[0].value,
            sessions: Number(row.metricValues[0].value),
            bounceRate: Number(Number(row.metricValues[1].value).toFixed(4)),
        }));

        // ─── 12. Cities ───
        const [cityResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "city" }],
            metrics: [{ name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
            limit: 15,
        });

        const cities = (cityResponse.rows || []).map((row) => ({
            city: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 13. Languages ───
        const [langResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "language" }],
            metrics: [{ name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
            limit: 10,
        });

        const languages = (langResponse.rows || []).map((row) => ({
            language: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── 14. Screen Resolutions ───
        const [screenResponse] = await client.runReport({
            property,
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "screenResolution" }],
            metrics: [{ name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
            limit: 10,
        });

        const screenResolutions = (screenResponse.rows || []).map((row) => ({
            resolution: row.dimensionValues[0].value,
            users: Number(row.metricValues[0].value),
        }));

        // ─── RESPONSE ───
        return res.status(200).json({
            success: true,
            fetchedAt: new Date().toISOString(),
            overview,
            dailyVisitors,
            topPages,
            trafficSources,
            countries,
            devices,
            browsers,
            operatingSystems,
            referrers,
            hourlyDistribution,
            landingPages,
            cities,
            languages,
            screenResolutions,
        });
    } catch (error) {
        console.error("Analytics API Error:", error);
        return res.status(500).json({
            error: "Failed to fetch analytics data",
            message: error.message,
        });
    }
}
