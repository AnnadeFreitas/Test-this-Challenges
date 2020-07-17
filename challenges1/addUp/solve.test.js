const addUp = require("./solve");

test("when n is 3 should return 6", () => {
  expect(addUp(3)).toBe(6);
});

test("When n is 1 should return 1 ", () => {
  expect(addUp(1)).toBe(1);
});

test("When n is 0 should return 0 ", () => {
  expect(addUp(0)).toBe(0);
});

test("When n is -6 should return 'Cannot perform a function' ", () => {
  expect(addUp(-6)).toBe("Cannot perform a function");
});
