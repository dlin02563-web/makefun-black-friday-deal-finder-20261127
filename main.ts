// Entry builder for the Black Friday deal finder site.
// Copies the static app and its screenshots into the output directory,
// then writes the make.fun dossier describing exactly what was copied.
import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

for (const part of ["app/index.html", "app/app.js", "app/style.css",
  "screenshots/1-cover.png", "screenshots/2-detail.png", "screenshots/3-phone.png"]) {
  if (!existsSync(join(here, part))) {
    throw new Error(`missing required entry file: ${part}`);
  }
}

mkdirSync(out, { recursive: true });
cpSync(join(here, "app"), join(out, "app"), { recursive: true });
cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });

const dossier = buildDossier(out, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
});
writeFileSync(join(out, "dossier.json"), dossier);
console.log(`dossier written to ${join(out, "dossier.json")}`);
