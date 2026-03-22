import { readFile } from "node:fs/promises";

const targetPath =
  "node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js";
const expected = "**/{*-manifest,required-server-files,prefetch-hints}.json";

try {
  const source = await readFile(targetPath, "utf8");
  if (!source.includes(expected)) {
    console.error(
      "[verify-opennext] Missing prefetch-hints patch in OpenNext plugin.",
    );
    console.error(`[verify-opennext] Expected pattern: ${expected}`);
    process.exit(1);
  }
  console.log("[verify-opennext] OK: prefetch-hints patch is active.");
} catch (error) {
  console.error("[verify-opennext] Failed to read OpenNext plugin file.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
