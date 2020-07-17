const squareDigits = require("./solve");

test("when n is 3876 should return 9644936", () => {
  expect(squareDigits(3876)).toBe(9644936);
});

test("When n is 1 should return 1 ", () => {
  expect(squareDigits(1)).toBe(1);
});

test("when n is 123 should return 149", () => {
  expect(squareDigits(123)).toBe(149);
});
