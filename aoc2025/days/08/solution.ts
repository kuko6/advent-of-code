function parseInput(input: string) {
  return input.trim().split("\n").map((x) => {
    const coords = x.split(",");
    return {
      "x": Number(coords[0]),
      "y": Number(coords[1]),
      "z": Number(coords[2]),
    };
  });
}

type Point = {
  x: number;
  y: number;
  z: number;
};

function distance(a: Point, b: Point) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
}

export function partOne(input: string): number {
  const data = parseInput(input);
  const bestPair: {
    "junction1": Point | undefined;
    "junction2": Point | undefined;
    "dst": number;
  } = {
    "junction1": undefined,
    "junction2": undefined,
    "dst": Number.MAX_VALUE,
  };

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const dst = distance(data[i], data[j]);
      if (dst < bestPair["dst"]) {
        bestPair["junction1"] = data[i];
        bestPair["junction2"] = data[j];
        bestPair["dst"] = dst;
      }
    }
  }
  console.log(bestPair);

  return 0;
}

export function partTwo(input: string): number {
  const data = parseInput(input);
  // TODO: Implement solution
  return 0;
}
