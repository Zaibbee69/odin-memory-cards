import fs from "fs";
import path from "path";
import https from "https";

// -------- CONFIG --------
const DATA_PATH = path.resolve("src/data/batmanCharacters.json");
const OUTPUT_DIR = path.resolve("public/images/batman");
// ------------------------

// ensure output folder exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// read JSON
const rawData = fs.readFileSync(DATA_PATH, "utf-8");
const characters = JSON.parse(rawData);

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                if (res.statusCode !== 200) {
                    reject(
                        new Error(`Failed ${url} (status ${res.statusCode})`)
                    );
                    return;
                }

                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);

                fileStream.on("finish", () => {
                    fileStream.close(resolve);
                });
            })
            .on("error", reject);
    });
}

(async () => {
    console.log("🦇 Starting Batman image download...\n");

    for (const char of characters) {
        const filePath = path.join(OUTPUT_DIR, `${char.id}.jpg`);

        if (fs.existsSync(filePath)) {
            console.log(`✔ Skipped ${char.name} (already exists)`);
            continue;
        }

        try {
            await downloadImage(char.image, filePath);
            console.log(`⬇ Downloaded ${char.name}`);
        } catch (err) {
            console.error(`❌ Failed ${char.name}`, err.message);
        }
    }

    console.log("\n✅ All downloads finished.");
})();
