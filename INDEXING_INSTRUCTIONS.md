# How to Get "Instant" Indexing on Google

You have asked for "instant" results. While Google does not guarantee instant indexing, the **Google Indexing API** is the fastest technical method to notify Google of your new pages.

## Prerequisites

To run the `instant-indexing.cjs` script I created for you, you must set up a **Service Account** and valid credentials.

### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a **New Project** (e.g., named "Patel Impex Indexing").

### Step 2: Enable the Indexing API
1. In your new project, search for **"Indexing API"** in the top search bar.
2. Click **Enable**.

### Step 3: Create a Service Account
1. Go to **IAM & Admin** > **Service Accounts**.
2. Click **Create Service Account**.
3. Name it (e.g., "fast-index").
4. Click **Done** (no special roles needed here, but "Owner" is easy if unsure).

### Step 4: Create & Download Key
1. Click on the newly created Service Account email (e.g., `fast-index@...`).
2. Go to the **Keys** tab.
3. Click **Add Key** > **Create new key**.
4. Select **JSON** and click **Create**.
5. A file will download. **Rename this file to `service_account.json`** and place it in your project root folder:
   `c:\Users\bhumi\Desktop\patelimpex-26962-main\service_account.json`

### Step 5: Grant Access in Google Search Console (CRITICAL)
**This is the most important step.** The service account needs permission to manage your property.
1. Copy the **client_email** from your `service_account.json` file (it looks like `fast-index@project-id.iam.gserviceaccount.com`).
2. Go to [Google Search Console](https://search.google.com/search-console).
3. Select your property (`patelimpex.com`).
4. Go to **Settings** > **Users and permissions**.
5. Click **Add User**.
6. Paste the service account email.
7. Set Permission to **Owner** (or Full).
8. Click **Add**.

## Running the Script

Once you have placed the `service_account.json` file in your folder:

```powershell
node instant-indexing.cjs
```

This will cycle through all 1000+ URLs in your sitemap and ping Google directly, requesting an immediate crawl.
