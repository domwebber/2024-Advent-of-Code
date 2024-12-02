import inputA from "./input-a.json" with { type: "json" };
import inputB from "./input-b.json" with { type: "json" };

export function sumDistances(...lists: [number[], number[]]): number {
  const pairs: number[][] = [];

  for (const list of lists) {
    const sorted = list.sort();

    for (const [i, item] of sorted.entries()) {
      pairs[i] = [item, ...(pairs[i] ?? [])];
    }
  }

  let distance = 0;
  for (const pair of pairs) {
    distance += pair.reduce((previous, current) =>
      Math.abs(previous - current)
    );
  }

  return distance;
}

export function similarityScore(listA: number[], listB: number[]): number {
  const setA = new Set(listA);
  const frequencies = new Map<number, number>();

  for (const item of listB) {
    if (!setA.has(item)) continue;
    const existingFrequency = frequencies.get(item) ?? 0;
    frequencies.set(item, existingFrequency + 1);
  }

  let similarityScore = 0;
  for (const item of listA) {
    const itemFrequency = frequencies.get(item) ?? 0;
    similarityScore += item * itemFrequency;
  }

  return similarityScore;
}

if (import.meta.main) {
  console.log("Sum of Distances =", sumDistances(inputA, inputB));
  console.log("Similarity Score =", similarityScore(inputA, inputB));
}
