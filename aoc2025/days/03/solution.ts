function parseInput(input: string) {
  return input.trim().split("\n");
}

export function partOne(input: string): number {
  const data = parseInput(input);
  let res = 0;
  for (const bank of data) {
    let max = Number(bank[0]);
    let maxIdx = 0;
    for (let i = 0; i < bank.length; i++) {
      if (i == bank.length - 1) break;

      const jolt = Number(bank[i]);
      if (jolt > max) {
        max = jolt;
        maxIdx = i;
      }
    }

    let max2 = Number(bank[bank.length - 1]);
    for (let i = bank.length; i > maxIdx; i--) {
      const jolt = Number(bank[i]);
      if (jolt > max2) {
        max2 = jolt;
      }
    }

    res += (max * 10) + max2;
  }

  return res;
}

export function partTwo(input: string): number {
  const data = parseInput(input);
  // TODO: Implement solution
  return 0;
}
