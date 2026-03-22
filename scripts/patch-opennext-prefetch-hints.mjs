import { readFile, writeFile } from "node:fs/promises";
import { access } from "node:fs/promises";
import { constants } from "node:fs";

const targetPath =
  "node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js";
const oldPattern = "**/{*-manifest,required-server-files}.json";
const newPattern = "**/{*-manifest,required-server-files,prefetch-hints}.json";
const fallbackBlock = `
  if ($PATH.endsWith(".next/server/prefetch-hints.json")) {
    return {};
  }
  if ($PATH.endsWith(".next/server/subresource-integrity-manifest.json")) {
    return {};
  }
  if ($PATH.endsWith(".next/dynamic-css-manifest")) {
    return {};
  }
  if ($PATH.endsWith(".next/dynamic-css-manifest.json")) {
    return {};
  }
`;
const throwLineExact = String.raw`  throw new Error(\`Unexpected loadManifest(\${$PATH}) call!\`);`;

async function patchFile() {
  try {
    await access(targetPath, constants.F_OK);
  } catch {
    console.warn(`[patch-opennext] Skip: ${targetPath} not found.`);
    return;
  }

  const source = await readFile(targetPath, "utf8");

  let patched = source;
  let changed = false;

  if (patched.includes(oldPattern) && !patched.includes(newPattern)) {
    patched = patched.replace(oldPattern, newPattern);
    changed = true;
  }

  if (patched.includes(throwLineExact) && !patched.includes(".next/dynamic-css-manifest")) {
    patched = patched.replace(
      throwLineExact,
      `${fallbackBlock}${throwLineExact}`,
    );
    changed = true;
  }

  if (!changed) {
    console.log("[patch-opennext] Already patched.");
    return;
  }

  await writeFile(targetPath, patched, "utf8");
  console.log("[patch-opennext] Patched OpenNext load-manifest safeguards.");
}

await patchFile();
