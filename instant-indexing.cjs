const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const SERVICE_ACCOUNT_FILE = path.join(__dirname, 'service_account.json');
const SITEMAP_FILE = path.join(__dirname, 'public', 'sitemap.xml');

// 1. Load Service Account
if (!fs.existsSync(SERVICE_ACCOUNT_FILE)) {
    console.error("ERROR: service_account.json not found in project root.");
    console.error("Please download your JSON key from Google Cloud Console and save it as 'service_account.json'.");
    process.exit(1);
}

const key = require(SERVICE_ACCOUNT_FILE);

const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
);

// 2. Parse Sitemap for URLs
if (!fs.existsSync(SITEMAP_FILE)) {
    console.error("ERROR: public/sitemap.xml not found.");
    process.exit(1);
}

const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8');
const urls = [];
const regex = /<loc>(preference:)?(https:\/\/[^<]+)<\/loc>/g;
let match;
while ((match = regex.exec(sitemapContent)) !== null) {
    urls.push(match[2]);
}

console.log(`Found ${urls.length} URLs in sitemap.`);

// 3. Batch Submit to Indexing API
async function submitUrls() {
    try {
        await jwtClient.authorize();
        console.log("Successfully authorized with Google.");

        let successCount = 0;
        let failCount = 0;

        // Processing in batches of 10 to respect rate limits roughly
        // Google Indexing API quota is usually tight (200/day) unless requested more.
        // But for "instant" we try.

        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            console.log(`[${i + 1}/${urls.length}] Submitting: ${url}`);

            try {
                await google.indexing('v3').urlNotifications.publish({
                    auth: jwtClient,
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED'
                    }
                });
                console.log(`  -> Success`);
                successCount++;
            } catch (error) {
                console.error(`  -> Failed: ${error.message}`);
                // 429 means quota exceeded
                if (error.code === 429) {
                    console.log("Quota exceeded. Stopping.");
                    break;
                }
                failCount++;
            }

            // Small delay to be nice
            await new Promise(resolve => setTimeout(resolve, 200));
        }

        console.log("-----------------------------------------");
        console.log(`Submission Complete.`);
        console.log(`Success: ${successCount}`);
        console.log(`Failed: ${failCount}`);

    } catch (error) {
        console.error("Fatal Error:", error);
    }
}

submitUrls();
