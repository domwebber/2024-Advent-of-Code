import { assertEquals } from "@std/assert";
import { parseCommands } from "./main.ts";

const demoInput = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const demoSeekingInput = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

Deno.test(function extractCommandsTest() {
  const result = parseCommands(demoInput);

  assertEquals(
    result,
    [161, 161],
  );
});

Deno.test(function extractSeekingCommandsTest() {
  const result = parseCommands(demoSeekingInput);

  assertEquals(
    result,
    [161, 48],
  );
});
