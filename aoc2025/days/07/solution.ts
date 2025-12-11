function parseInput(input: string) {
  const data = input.trim().split("\n");
  const startPosition = [0, data[0].indexOf("S")];

  return {
    "startPosition": startPosition,
    "data": data.map((x) => x.split("")),
  };
}

type Beam = {
  position: [number, number];
  direction: [number, number];
};

export function partOne(input: string): number {
  const { startPosition, data } = parseInput(input);

  const beams: Beam[] = [
    {
      position: [startPosition[0], startPosition[1]],
      direction: [1, 0],
    },
  ];

  const height = data.length;
  const width = data[0].length;
  const usedSplit = new Set<string>();
  let res = 0;
  for (let i = 0; i < height; i++) {
    const newBeams: Beam[] = [];

    for (const beam of beams) {
      const newY = beam.position[0] + beam.direction[0];
      const newX = beam.position[1] + beam.direction[1];

      if (newY < 0 || newY >= height || newX < 0 || newX >= width) {
        continue;
      }

      if (data[newY][newX] === "^") {
        const splitKey = `${newY},${newX}`;
        if (!usedSplit.has(splitKey)) {
          usedSplit.add(splitKey);

          let split = false;

          // check left and right positions next to ^
          for (const dx of [1, -1]) {
            const sx = newX + dx;
            const sy = newY;
            if (sx < 0 || sx >= width) continue;

            newBeams.push({
              position: [sy, sx],
              direction: [1, 0],
            });
            split = true;
          }

          if (split) res += 1;
        }
      } else {
        data[newY][newX] = "|";
        newBeams.push({
          position: [newY, newX],
          direction: beam.direction,
        });
      }
    }

    beams.length = 0;
    beams.push(...newBeams);

    if (beams.length === 0) break;
  }

  // console.log(data.map((x) => x.join("")).join("\n"));

  return res;
}

export function partTwo(input: string): number {
  const data = parseInput(input);
  // TODO: Implement solution
  return 0;
}
