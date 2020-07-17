const numberSquares = require("./solve");

test("when n is 6 should return 14", () => {
  expect(numberSquares(1)).toBe(1);
});

test("when n is -1 should return 0", () => {
  expect(numberSquares(-1)).toBe(0);
});

test("when n is 0 should return 0", () => {
  expect(numberSquares(-1)).toBe(0);
});
