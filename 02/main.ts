import { assert } from "@std/assert";

export function isSafeLevel(level: number[]): boolean {
  let previous = level.slice(0, 1)[0];
  assert(previous !== undefined);

  let current = level.slice(1, 2)[0];
  assert(current !== undefined);

  const trendsPositive: boolean = (previous - current) >= 0;

  for (let i = 1; i < level.length; i++) {
    current = level[i];

    const difference = previous - current;
    const differenceAbsolute = Math.abs(difference);

    const followsTrend = (trendsPositive && difference >= 0) ||
      (!trendsPositive && difference < 0);
    const isSafeDifference = differenceAbsolute >= 1 && differenceAbsolute <= 3;

    if (!followsTrend || !isSafeDifference) {
      return false;
    }

    previous = current;
  }

  return true;
}

export function countSafe(...levels: number[][]): number {
  if (levels.length === 0) return 0;

  let safeCount = 0;

  for (const level of levels) {
    const isSafe = isSafeLevel(level);
    if (isSafe) {
      safeCount++;
      continue;
    }

    for (let i = 0; i < level.length; i++) {
      const levelExclusive = [...level.slice(0, i), ...level.slice(i + 1)];
      const isSafeExclusion = isSafeLevel(levelExclusive);
      if (isSafeExclusion) {
        safeCount++;
        break;
      }
    }
  }

  return safeCount;
}

if (import.meta.main) {
  const lines = await Deno.readTextFile("./02/input.txt").then(
    (rawText) =>
      rawText.split("\n")
        .map(
          (row) =>
            row.split(" ")
              .map(
                (cell) => parseInt(cell, 10),
              ),
        ),
  );
  console.log("Count of Safe Levels =", countSafe(...lines));
}
