const countBoomerangs = require("./solve");

test("when arr is [9, 5, 9, 5, 1, 1, 1] should return 2", () => {
  expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1])).toBe(2);
});

test("when arr is [4, 4, 4, 9, 9, 9, 9] should return 0", () => {
  expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toBe(0);
});

test("when arr is [4, 4, 4, 8, 4, 8, 4] should return 3", () => {
  expect(countBoomerangs([4, 4, 4, 8, 4, 8, 4])).toBe(3);
});

test("when arr is [000] should return 0", () => {
  expect(countBoomerangs([0, 0, 0])).toBe(0);
});
