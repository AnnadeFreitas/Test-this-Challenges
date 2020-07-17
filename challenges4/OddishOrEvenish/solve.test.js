const oddishOrEvenish = require("./solve");

test("when num is 43 should return Oddish", () => {
  expect(oddishOrEvenish(43)).toBe("Oddish");
});

test("when num is 694 should return Oddish", () => {
  expect(oddishOrEvenish(694)).toBe("Oddish");
});

test("when num is 11 should return Evenish", () => {
  expect(oddishOrEvenish(11)).toBe("Evenish");
});

test("when num is 0 should return Evenish", () => {
  expect(oddishOrEvenish(0)).toBe("Evenish");
});
