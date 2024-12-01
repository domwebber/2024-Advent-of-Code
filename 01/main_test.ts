import { assertEquals } from "@std/assert";
import { sumDistances, similarityScore } from "./main.ts";
import inputA from "./input-a.json" with { type: "json" };
import inputB from "./input-b.json" with { type: "json" };

const demoA = [3, 4, 2, 1, 3, 3];
const demoB = [4, 3, 5, 3, 9, 3];

Deno.test(function sumDistancesTest() {
  assertEquals(sumDistances(demoA, demoB), 11);
});

Deno.test(function sumDistancesTest() {
  assertEquals(sumDistances(inputA, inputB), 765748);
});

Deno.test(function sumDistancesTest() {
  assertEquals(similarityScore(demoA, demoB), 31);
});

Deno.test(function sumDistancesTest() {
  assertEquals(similarityScore(inputA, inputB), 27732508);
});
