#!/bin/bash

# Firebase Storage CORS Setup Script
# This script applies CORS configuration to enable blog image uploads

echo "Setting up CORS for Firebase Storage..."
echo "Project: mark-overseas"
echo "Bucket: mark-overseas.firebasestorage.app"
echo ""

# Create CORS configuration
cat > cors_temp.json << 'EOF'
[
  {
    "origin": ["*"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "responseHeader": ["Content-Type", "Authorization", "x-goog-resumable"],
    "maxAgeSeconds": 3600
  }
]
EOF

echo "CORS configuration created."
echo ""
echo "To apply this configuration, run:"
echo "gsutil cors set cors_temp.json gs://mark-overseas.firebasestorage.app"
echo ""
echo "Or use Google Cloud Console:"
echo "1. Go to https://console.cloud.google.com/storage/browser"
echo "2. Select project: mark-overseas"
echo "3. Click Activate Cloud Shell (>_ icon)"
echo "4. Run the gsutil command above"
