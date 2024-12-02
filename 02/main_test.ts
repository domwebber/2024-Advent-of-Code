import { assertEquals } from "@std/assert";
import { countSafe, isSafeLevel } from "./main.ts";

const demoLevels = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

Deno.test(function countSafeTest() {
  const count = demoLevels.reduce(
    (count, current) => {
      return isSafeLevel(current) ? ++count : count;
    },
    0,
  );

  assertEquals(
    count,
    2,
  );
});

Deno.test(function countSafeTest() {
  assertEquals(countSafe(...demoLevels), 4);
});
