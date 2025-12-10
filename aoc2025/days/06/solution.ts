function parseInput(input: string) {
  const lines = input.trim().split("\n").map((x) => x.trim().split(" "));
  const data = [];

  for (const line of lines) {
    const currLine = [];
    for (const x of line) {
      if (x !== "") {
        if (!isNaN(x)) {
          currLine.push(Number(x));
        } else {
          currLine.push(x);
        }
      }
    }
    data.push(currLine);
  }

  return data;
}

function parseInput2(input: string) {
  const lines = input.trim().split("\n").map((x) => x.split(""));
  const data = [];

  for (const line of lines) {
    const currLine = [];
    for (const x of line) {
      currLine.push(x);
    }
    data.push(currLine);
  }

  return data;
}

export function partOne(input: string): number {
  const data = parseInput(input);
  const operations = data.pop()!;

  let res = 0;
  for (let i = 0; i < data[0].length; i++) {
    const sign = operations[i];
    let tmp = 0;
    for (let j = 0; j < data.length; j++) {
      if (sign === "*") {
        if (tmp === 0) tmp = 1;
        tmp *= data[j][i];
      } else if (sign === "+") {
        tmp += data[j][i];
      }
    }
    res += tmp;
  }

  return res;
}

export function partTwo(input: string): number {
  const data = parseInput2(input);
  console.log(data)

  return 0;
}
