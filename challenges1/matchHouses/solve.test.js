const matchHouses = require("./solve");

test("when n is 1 should return 6", () => {
  expect(matchHouses(1)).toBe(6);
});

test("When n is 0 should return 0 ", () => {
  expect(matchHouses(0)).toBe(0);
});

test("When n is -1 should return 'There are no negative steps'", () => {
  expect(matchHouses(-1)).toBe("There are no negative steps");
});
