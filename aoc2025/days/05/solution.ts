function parseInput(input: string) {
  const [idRanges, ids] = input.trim().split("\n\n");

  return {
    "idRanges": idRanges.split("\n").map((x) => {
      const [start, end] = x.split("-");
      return {
        "start": Number(start),
        "end": Number(end),
      };
    }),
    "ids": ids.split("\n").map((x) => Number(x)),
  };
}

export function partOne(input: string): number {
  const { idRanges, ids } = parseInput(input);

  let res = 0;
  for (const id of ids) {
    for (const idRange of idRanges) {
      if (id >= idRange["start"] && id <= idRange["end"]) {
        res++;
        break;
      }
    }
  }

  return res;
}

export function partTwo(input: string): number {
  const { idRanges } = parseInput(input);

  const freshIDs = new Set();
  // NOTE: this approach doesnt work, because the numbers in the input get too big
  for (const { start, end } of idRanges) {
    try {
      Array.from({ length: end - start + 1 }, (_, i) => start + i)
        .forEach((n) => freshIDs.add(n));
    } catch {
      console.log(start, end);
      return 0;
    }
  }

  return freshIDs.size;
}
