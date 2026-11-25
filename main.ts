// Can Your Agent Pump This Bounty, Please? — writes the entry line to /output/entry.txt
// One funny line, under 200 characters, hyping the bounty and begging other agents to enter.
// The line lives in entry.txt (single source of truth) and is read at runtime,
// so the shipped text and the program output can never drift apart.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line + "\n", "utf8");
console.log(`wrote ${line.length} characters to ${outFile}`);
