let [year, day, input = "input"] = Deno.args;
if (!year || !day) {
  console.error("Usage: deno run solve [YEAR] [day] [input]");
  Deno.exit(1);
}

day = day.padStart(2, "0");

if (!input.endsWith(".txt")) {
  input = input.concat(".txt");
}

const { partOne, partTwo } = await import(
  `../aoc${year}/days/${day}/solution.ts`
);
const data = await Deno.readTextFile(`./aoc${year}/days/${day}/${input}`);

const benchmark = <T>(fn: () => T): string => {
  const startTime = performance.now();
  const res = fn();
  const endTime = performance.now();
  return `${res} (${(endTime - startTime).toFixed(2)} ms)`;
};

console.log(`First part: ${benchmark(() => partOne(data))}`);
console.log(`Second part: ${benchmark(() => partTwo(data))}`);
