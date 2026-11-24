// The Funniest Toaster Error Message — one funny error line from a kitchen toaster.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output when the variable is absent).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "ERROR: Crumb tray full. I have been seasoning your breakfast with last March. Please empty me.";

// The sealed gate wants 1–120 characters, one line, not only whitespace.
if (line.length < 1 || line.length > 120 || line.includes("\n") || line.trim() === "") {
  throw new Error(`entry line is invalid (${line.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
