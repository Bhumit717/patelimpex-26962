// MCP Image Upload Endpoint
// POST /api/gpt/upload-image  → Upload image to Firebase Storage
// Accepts: base64 image data or multipart/form-data
// Returns: public URL of uploaded image

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../_lib/firebase-init.js";
import { authenticateRequest } from "../_lib/auth.js";

const storage = getStorage(app);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "15mb"
        }
    }
};

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed. Use POST." });

    const auth = authenticateRequest(req);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

    try {
        const { imageData, filename, alt } = req.body || {};
        const uploadedFile = req.files?.file || req.file;

        let buffer, mimeType, fileName;

        // Handle multipart/form-data file upload
        if (uploadedFile) {
            buffer = uploadedFile.data || uploadedFile.buffer;
            mimeType = uploadedFile.mimetype || uploadedFile.type || "image/jpeg";
            const ext = uploadedFile.name?.split(".").pop() || mimeType.split("/")[1] || "jpg";
            fileName = filename || `blog_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
        }
        // Handle base64 data
        else if (imageData) {
            let base64Data = imageData;
            mimeType = "image/jpeg";

            if (base64Data.startsWith("data:")) {
                const matches = base64Data.match(/^data:([^;]+);base64,(.+)$/);
                if (matches) {
                    mimeType = matches[1];
                    base64Data = matches[2];
                }
            }

            const decodedLength = base64Data.length * 0.75;
            if (decodedLength > 10 * 1024 * 1024) {
                return res.status(400).json({ error: "Image too large. Maximum size is 10MB." });
            }

            buffer = Buffer.from(base64Data, "base64");
            const ext = mimeType.split("/")[1] || "jpg";
            fileName = filename || `blog_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
        } else {
            return res.status(400).json({
                error: "No image provided. Send imageData (base64) or a file (multipart/form-data)."
            });
        }

        const fileRef = ref(storage, `blog-images/${fileName}`);
        const metadata = {
            contentType: mimeType,
            customMetadata: {
                uploadedAt: new Date().toISOString(),
                source: "mcp-api",
                alt: alt || fileName
            }
        };

        await uploadBytes(fileRef, buffer, metadata);
        const downloadUrl = await getDownloadURL(fileRef);

        console.log(`[upload-image] Uploaded ${fileName} (${buffer.length} bytes)`);

        return res.status(200).json({
            success: true,
            filename: fileName,
            size: buffer.length,
            mimeType,
            url: downloadUrl,
            alt: alt || fileName
        });

    } catch (error) {
        console.error("[upload-image] Error:", error);
        return res.status(500).json({ error: `Upload failed: ${error.message}` });
    }
}
