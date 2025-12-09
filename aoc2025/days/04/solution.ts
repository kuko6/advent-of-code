function parseInput(input: string) {
  return input.trim().split("\n").map((x) => x.split(""));
}

function canBeMoved(data: string[][], i: number, j: number): boolean {
  let neighbours = 0;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];

  const height = data.length;
  const width = data[0].length;
  for (const direction of directions) {
    const ni = i + direction[0];
    const nj = j + direction[1];
    if ((0 <= ni && ni < height) && (0 <= nj && nj < width)) {
      if (data[ni][nj] === "@") neighbours++;
    }
  }

  return neighbours < 4 ? true : false;
}

export function partOne(input: string): number {
  const data = parseInput(input);

  let res = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      if (data[i][j] === "@") {
        if (canBeMoved(data, i, j)) {
          res++;
        }
      }
    }
  }

  return res;
}

export function partTwo(input: string): number {
  const data = parseInput(input);

  let res = 0;
  while (true) {
    const toMove: Array<[number, number]> = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[0].length; j++) {
        if (data[i][j] === "@") {
          if (canBeMoved(data, i, j)) {
            res++;
            toMove.push([i, j]);
          }
        }
      }
    }
    if (toMove.length === 0) break;
    for (const [i, j] of toMove) {
      data[i][j] = ".";
    }
  }

  return res;
}
