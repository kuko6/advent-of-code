import { ensureDir, ensureFile } from "@std/fs";
import * as path from "jsr:@std/path";

let [year, day] = Deno.args;
if (!year) {
  console.error("Usage: deno run solve [YEAR] [day]");
  Deno.exit(1);
}

const daysPath = `./aoc${year}/days`;
await ensureDir(daysPath);
if (day == undefined) {
  try {
    const entries = await Array.fromAsync(Deno.readDir(daysPath));
    const dayDirs = entries
      .filter((entry) => entry.isDirectory && /^\d{2}$/.test(entry.name))
      .map((entry) => parseInt(entry.name))
      .sort((a, b) => a - b);

    const lastDay = dayDirs.at(-1);
    if (lastDay && lastDay >= 25) {
      Deno.exit(0);
    }
    day = String(lastDay ? lastDay + 1 : 1);
  } catch {
    day = "1";
  }
}

// pads single digits with 0 (e.g 01)
day = day.padStart(2, "0");

const dayPath = path.join(daysPath, day);
await ensureDir(dayPath);
if (
  await Deno.stat(path.join(dayPath, "solution.ts"))
    .then(() => true).catch(() => false)
) {
  console.warn(`Day ${day} already exists`);
  Deno.exit(0);
}

await ensureFile(path.join(dayPath, "example.txt"));
const solutionTemplate = `function parseInput(input: string) {
  return input.trim().split('\\n');
}

export function partOne(input: string): number {
  const data = parseInput(input);
  // TODO: Implement solution
  return 0;
}

export function partTwo(input: string): number {
  const data = parseInput(input);
  // TODO: Implement solution
  return 0;
}
`;

await Deno.writeTextFile(path.join(dayPath, "solution.ts"), solutionTemplate);

if (Deno.env.has("AOC_SESSION")) {
  const url = `https://adventofcode.com/${year}/day/${Number(day)}/input`;
  const headers = { cookie: `session=${Deno.env.get("AOC_SESSION")}` };
  const res = await fetch(url, { headers });
  if (res.ok) {
    const input = await res.text();
    await Deno.writeTextFile(path.join(dayPath, "input.txt"), input.trim());
  } else {
    console.warn(`Failed to fetch input: ${res.status} ${res.statusText}`);
  }
}

console.log(`\nCreated file structure:`);
console.log(`aoc${year}`);
console.log(`└── days`);
console.log(`  └── ${day}`);

const files = [];
for await (const entry of Deno.readDir(dayPath)) {
  if (entry.isFile) {
    files.push({ name: entry.name });
  }
}

files.forEach((file, index) => {
  const isLast = index === files.length - 1;
  const prefix = isLast ? "    └── " : "    ├── ";
  console.log(`${prefix}${file.name}`);
});

console.log(`\nRun with: \`deno run solve ${year} ${day}\``);
console.log("Good Luck 🎅!")
