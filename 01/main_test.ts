import { assertEquals } from "@std/assert";
import { similarityScore, sumDistances } from "./main.ts";

const demoA = [3, 4, 2, 1, 3, 3];
const demoB = [4, 3, 5, 3, 9, 3];

Deno.test(function sumDistancesTest() {
  assertEquals(sumDistances(demoA, demoB), 11);
});

Deno.test(function sumDistancesTest() {
  assertEquals(similarityScore(demoA, demoB), 31);
});
