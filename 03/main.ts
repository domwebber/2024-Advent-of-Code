import { assert } from "@std/assert";

const ENABLE_CMD = "do()";
const DISABLE_CMD = "don't()";
const MUL_REGEX = /(?:mul\((\d{1,3}),(\d{1,3})\)|don't\(\)|do\(\))/gm;

export function parseCommands(input: string): [number, number] {
  const matches = input.matchAll(MUL_REGEX);

  let part1 = 0;
  let part2 = 0;

  let enabled = true;
  for (const match of matches) {
    const [expression, inputA, inputB] = match;

    if (expression === ENABLE_CMD || expression === DISABLE_CMD) {
      enabled = expression === ENABLE_CMD;
      continue;
    }

    assert(typeof expression === "string");
    assert(typeof inputA === "string");
    assert(typeof inputB === "string");

    const mult = parseInt(inputA) * parseInt(inputB);
    part1 += mult;

    if (enabled) part2 += mult;
    // console.log(expression, inputA, inputB, "=", mult, "(", total, ")");
  }

  return [part1, part2];
}


if (import.meta.main) {
  const input = await Deno.readTextFile("./03/input.txt");
  // const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

  console.log("Extracted Total =", parseCommands(input.split("\n").join("")));
}
