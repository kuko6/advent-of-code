function parseInput(input: string) {
  return input.trim().split(",").map((x) => {
    const [start, end] = x.split("-");
    return {
      "start": Number(start),
      "end": Number(end),
    };
  });
}

function checkDuplicates(id: number): boolean {
  const stringId = String(id);
  let start = 0;
  let length = 1;
  let end = 1;
  while (length < stringId.length) {
    console.log(stringId.slice(start, end), stringId.slice(end, end + length));
    if (stringId.slice(start, end), stringId.slice(end, end + length)) {
      return true;
    }

    length++;
    end = start + length;
  }

  return false;
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

export function partTwo(input: string): number {
  const data = parseInput(input);
  let res = 0;

  return res;
}
