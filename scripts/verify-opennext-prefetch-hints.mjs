import { readFile } from "node:fs/promises";

const targetPath =
  "node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js";
const expected = "**/{*-manifest,required-server-files,prefetch-hints}.json";
const expectedFallbackPrefetch = ".next/server/prefetch-hints.json";
const expectedFallbackSri = ".next/server/subresource-integrity-manifest.json";
const expectedFallbackDynamicCss = ".next/dynamic-css-manifest";

try {
  const source = await readFile(targetPath, "utf8");
  if (!source.includes(expected)) {
    console.error(
      "[verify-opennext] Missing prefetch-hints patch in OpenNext plugin.",
    );
    console.error(`[verify-opennext] Expected pattern: ${expected}`);
    process.exit(1);
  }
  if (!source.includes(expectedFallbackPrefetch)) {
    console.error(
      "[verify-opennext] Missing fallback for prefetch-hints manifest.",
    );
    process.exit(1);
  }
  if (!source.includes(expectedFallbackSri)) {
    console.error(
      "[verify-opennext] Missing fallback for subresource-integrity manifest.",
    );
    process.exit(1);
  }
  if (!source.includes(expectedFallbackDynamicCss)) {
    console.error("[verify-opennext] Missing fallback for dynamic-css manifest.");
    process.exit(1);
  }
  console.log("[verify-opennext] OK: manifest patches are active.");
} catch (error) {
  console.error("[verify-opennext] Failed to read OpenNext plugin file.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
