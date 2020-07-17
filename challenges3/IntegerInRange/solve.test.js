const intWithinBounds = require("./solve");

test("when n is 3, lower is 1 , and Upper is 5, should return True", () => {
  expect(intWithinBounds(3, 1, 5)).toBeTruthy();
});

test("when n is 4.5, lower is 3, and Upper is 8, should return False", () => {
  expect(intWithinBounds(4.5, 3, 8)).toBeFalsy();
});

test("when n is -5, lower is -10 , and Upper is 6, should return True", () => {
  expect(intWithinBounds(-5, -10, 6)).toBeTruthy();
});

test("when n is 9, lower is 9, and Upper is 9, should return 6", () => {
  expect(intWithinBounds(9, 9, 9)).toBeFalsy();
});
