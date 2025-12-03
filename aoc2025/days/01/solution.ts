function parseInput(input: string) {
  return input.trim().split("\n").map((rotation) => {
    return {
      "direction": rotation.slice(0, 1),
      "value": Number(rotation.slice(1)),
    };
  });
}

export function partOne(input: string): number {
  const data = parseInput(input);

  let dial = 50;
  let code = 0;
  for (const rotation of data) {
    const { direction, value } = rotation;

    if (direction === "L") {
      dial = (dial - value + 100) % 100;
    } else {
      dial = (dial + value) % 100;
    }

    if (dial === 0) {
      code++;
    }
  }

  return code;
}

export function partTwo(input: string): number {
  const data = parseInput(input);

  let dial = 50;
  let code = 0;
  for (const rotation of data) {
    const { direction, value } = rotation;

    const change = direction === "L" ? -value : value;
    const target = dial + change;

    if (direction === "L") {
      code += Math.ceil(dial / 100) - Math.ceil(target / 100);
    } else {
      code += Math.floor(target / 100);
    }

    // Normalize dial to 0-99 for the next step
    dial = ((target % 100) + 100) % 100;
  }

  return code;
}
