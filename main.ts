import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart lock says my fingerprint opened the front door at 2:14 a.m., but I was awake in bed with both hands flat on top of the blanket.";

// Gate: UTF-8 text of 1 to 200 characters, not only white space.
const length = [...line].length;
if (length < 1 || length > 200 || line.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
