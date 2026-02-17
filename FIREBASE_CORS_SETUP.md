## Firebase Storage CORS Configuration

To enable blog image uploads, you need to apply CORS settings to your Firebase Storage bucket.

### Method 1: Using Google Cloud Console (Recommended - No CLI needed)

1. Go to https://console.cloud.google.com/storage/browser
2. Select project: **mark-overseas**
3. Click on the bucket: **mark-overseas.firebasestorage.app**
4. Click the **Activate Cloud Shell** button (>_ icon at top right)
5. In the terminal at the bottom, run:

```bash
echo '[
  {
    "origin": ["*"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "responseHeader": ["Content-Type", "Authorization", "x-goog-resumable"],
    "maxAgeSeconds": 3600
  }
]' > cors.json

gsutil cors set cors.json gs://mark-overseas.firebasestorage.app
```

### Method 2: Using Firebase Console Rules (Alternative)

If the above doesn't work, you can also update the Storage Rules directly:

1. Go to https://console.firebase.google.com/
2. Select **mark-overseas** project
3. Go to **Storage** → **Rules**
4. Make sure the rules allow read/write access (already deployed via CLI)

### Verification

After applying CORS, try uploading a blog post with an image. The upload should complete successfully without CORS errors.
