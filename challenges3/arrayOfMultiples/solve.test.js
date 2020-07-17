const arrayOfMultiples = require("./solve");

test("when num is 3 and length is 10 should return [3, 6, 12, 15, 18, 21, 24, 27, 30]", () => {
  expect(arrayOfMultiples(3, 10)).toEqual([
    3,
    6,
    9,
    12,
    15,
    18,
    21,
    24,
    27,
    30,
  ]);
});

test("when num is -1 and length is 5 should return [-1, -2, -3, -4, -5]", () => {
  expect(arrayOfMultiples(-1, 5)).toEqual([-1, -2, -3, -4, -5]);
});

test("when num is 7 and length is -1 should return []]", () => {
  expect(arrayOfMultiples(7, -1)).toEqual([]);
});
