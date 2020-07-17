const highestDigit = require("./solve");

test("when n is '37891' should return 9", () => {
  expect(highestDigit(37891)).toBe(9);
});

test("When n is -98741 should return 8 ", () => {
  expect(highestDigit(-98741)).toBe(8);
});

test("When n is 0 should return 0 ", () => {
  expect(highestDigit(0)).toBe(0);
});
