function parseInput(input: string) {
  return input.trim().split(",").map((x) => {
    const [start, end] = x.split("-");
    return {
      "start": Number(start),
      "end": Number(end),
    };
  });
}

export function partOne(input: string): number {
  const data = parseInput(input);

  let res = 0;
  for (const idRange of data) {
    const { start, end } = idRange;
    let id = start;
    while (id <= end) {
      const stringID = String(id);
      if (stringID.length % 2 != 0) {
        id++;
        continue;
      }

      const mid = Math.floor(stringID.length / 2);
      if (stringID.slice(0, mid) === stringID.slice(mid)) res += id;
      id++;
    }
  }

  return res;
}

function checkIDs(id: number) {
  const stringID = String(id);
  const idLen = stringID.length;
  for (let len = 1; len <= idLen / 2; len++) {
    if (idLen % len != 0) continue;

    if (stringID.slice(0, len).repeat(idLen / len) === stringID) {
      return id;
    }
  }

  return 0;
}

export function partTwo(input: string): number {
  const data = parseInput(input);

  let res = 0;
  for (const idRange of data) {
    const { start, end } = idRange;
    let id = start;
    while (id <= end) {
      res += checkIDs(id);
      id++;
    }
  }

  return res;
}
