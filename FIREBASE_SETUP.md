# Firebase Setup for Patel Impex

## Current Status
- ✅ Frontend configured to use `patel-impex` project
- ⚠️ CLI access limited to `mark-overseas` project only

## Issue
Your Firebase CLI is logged in with `markoverseas28@gmail.com`, which only has access to the `mark-overseas` project, not the `patel-impex` project.

## Solution Options

### Option 1: Add Your Account to patel-impex Project (Recommended)
1. Go to https://console.firebase.google.com/project/patel-impex/settings/iam
2. Click "Add member"
3. Add `markoverseas28@gmail.com` with "Editor" or "Owner" role
4. Then run: `npx firebase use patel-impex`
5. Deploy rules: `npx firebase deploy --only firestore:rules,storage:rules`

### Option 2: Use patel-impex Account
1. Log out current account: `npx firebase logout`
2. Log in with patel-impex owner account: `npx firebase login`
3. Switch project: `npx firebase use patel-impex`
4. Deploy rules: `npx firebase deploy --only firestore:rules,storage:rules`

### Option 3: Manual Console Setup (No CLI needed)
Since the frontend is already configured correctly, you can set up rules manually:

#### Firestore Rules
1. Go to https://console.firebase.google.com/project/patel-impex/firestore/rules
2. Paste the contents of `firestore.rules` file
3. Click "Publish"

#### Storage Rules
1. Go to https://console.firebase.google.com/project/patel-impex/storage/rules
2. Paste the contents of `storage.rules` file
3. Click "Publish"

#### CORS Setup
1. Go to https://console.cloud.google.com/storage/browser
2. Select project: `patel-impex`
3. Click on bucket: `patel-impex.firebasestorage.app`
4. Click "Activate Cloud Shell" (>_ icon)
5. Run:
```bash
echo '[{"origin":["*"],"method":["GET","POST","PUT","DELETE","HEAD"],"responseHeader":["Content-Type","Authorization","x-goog-resumable"],"maxAgeSeconds":3600}]' > cors.json
gsutil cors set cors.json gs://patel-impex.firebasestorage.app
```

## Current Configuration
- Project ID: `patel-impex`
- Storage Bucket: `patel-impex.firebasestorage.app`
- Auth Domain: `patel-impex.firebaseapp.com`
