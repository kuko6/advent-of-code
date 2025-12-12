function parseInput(input: string) {
  return input.trim().split("\n").map((x) => {
    const coords = x.split(",");
    return { "x": Number(coords[0]), "y": Number(coords[1]) };
  });
}

export function partOne(input: string): number {
  const data = parseInput(input);

  let largestArea = -1;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const area = Math.abs(data[i]["x"] - data[j]["x"] + 1) *
        Math.abs(data[i]["y"] - data[j]["y"] + 1);
      if (area > largestArea) {
        largestArea = area;
      }
    }
  }

  return largestArea;
}

export function partTwo(input: string): number {
  const data = parseInput(input);
  // TODO: Implement solution
  return 0;
}
