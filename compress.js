// Image compression script — run with: node compress.js
import sharp from "sharp";
import { readdir, stat, writeFile, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "public", "images");

// Files to specifically target with aggressive settings
const configs = {
    "preview.png": { width: 1200, quality: 75, format: "webp", outName: "preview.webp" },
    "next.webp": { width: 800, quality: 65 },
    "node.webp": { width: 800, quality: 65 },
    "react.webp": { width: 800, quality: 65 },
};

// Default: re-compress everything else at quality 80
const defaultConfig = { quality: 80 };

async function compress() {
    const files = await readdir(imagesDir);

    for (const file of files) {
        if (!/\.(png|webp|jpg|jpeg)$/i.test(file)) continue;

        const filePath = path.join(imagesDir, file);
        const cfg = configs[file] || defaultConfig;
        const outName = cfg.outName || file;
        const outPath = path.join(imagesDir, outName);

        const before = (await stat(filePath)).size;

        try {
            let pipeline = sharp(filePath);
            if (cfg.width) {
                pipeline = pipeline.resize({ width: cfg.width, withoutEnlargement: true });
            }

            let buffer;
            if (outName.endsWith(".webp")) {
                buffer = await pipeline.webp({ quality: cfg.quality || 80 }).toBuffer();
            } else if (outName.endsWith(".png")) {
                buffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
            } else {
                buffer = await pipeline.jpeg({ quality: cfg.quality || 80, mozjpeg: true }).toBuffer();
            }

            const after = buffer.length;

            // Only write if we actually made it smaller
            if (after < before) {
                await writeFile(outPath, buffer);

                // If format changed (e.g., .png → .webp), remove old file
                if (outPath !== filePath) {
                    await unlink(filePath).catch(() => { });
                }

                const saved = (((before - after) / before) * 100).toFixed(1);
                console.log(`✓ ${file.padEnd(32)} ${(before / 1024).toFixed(0).padStart(5)}KB → ${(after / 1024).toFixed(0).padStart(5)}KB  (saved ${saved}%)`);
            } else {
                console.log(`— ${file.padEnd(32)} already optimized (${(before / 1024).toFixed(0)}KB), skipping`);
            }
        } catch (e) {
            console.error(`✗ ${file}: ${e.message}`);
        }
    }

    console.log("\n✅ Done!");
}

compress().catch(console.error);
