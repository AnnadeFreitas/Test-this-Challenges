const changeEnough = require("./solve");

test("when change is [2, 100, 0, 0] and amountDue is 14.11 should return false", () => {
  expect(changeEnough([2, 100, 0, 0], 14.11)).toBeFalsy();
});

test("when change is [30, 40, 20, 5] and amountDue is 12.55 should return false", () => {
  expect(changeEnough([30, 40, 20, 5], 12.55)).toBeTruthy();
});

test("when change is [10, 0, 0, 50] and amountDue is 13.85 should return false", () => {
  expect(changeEnough([10, 0, 0, 50], 13.85)).toBeFalsy();
});

test("when change is [1, 335, 0, 219] and amountDue is 35.21 should return false", () => {
  expect(changeEnough([1, 335, 0, 219], 35.21)).toBeTruthy();
});
