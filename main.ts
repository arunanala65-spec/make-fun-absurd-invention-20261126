// One-Sentence Absurd Invention Pitch — entry for make.fun
// Writes the pitch to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The Spite Sponge: a kitchen sponge that unionised, so every time you leave dishes 'to soak' for more than a day it walks out, hides under the sink, and only returns after a written apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`(${entry.length} characters)`);
