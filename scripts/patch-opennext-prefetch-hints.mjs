import { readFile, writeFile } from "node:fs/promises";
import { access } from "node:fs/promises";
import { constants } from "node:fs";

const targetPath =
  "node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js";
const oldPattern = "**/{*-manifest,required-server-files}.json";
const newPattern = "**/{*-manifest,required-server-files,prefetch-hints}.json";

async function patchFile() {
  try {
    await access(targetPath, constants.F_OK);
  } catch {
    console.warn(`[patch-opennext] Skip: ${targetPath} not found.`);
    return;
  }

  const source = await readFile(targetPath, "utf8");

  if (source.includes(newPattern)) {
    console.log("[patch-opennext] Already patched.");
    return;
  }

  if (!source.includes(oldPattern)) {
    console.warn("[patch-opennext] Pattern not found. No changes applied.");
    return;
  }

  const patched = source.replace(oldPattern, newPattern);
  await writeFile(targetPath, patched, "utf8");
  console.log(
    "[patch-opennext] Patched load-manifest plugin to include prefetch-hints.json.",
  );
}

await patchFile();
