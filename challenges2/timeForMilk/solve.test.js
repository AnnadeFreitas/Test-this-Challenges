const timeForMilkAndCookies = require("./solve");

test("When date is (2013, 11, 24), should return True ", () => {
  expect(timeForMilkAndCookies(new Date(2013, 11, 24))).toBeTruthy();
});

test("When date is (3000, 11, 24), should return True ", () => {
  expect(timeForMilkAndCookies(new Date(3000, 11, 24))).toBeTruthy();
});

test("When date is (2010, 11, 2) should return False ", () => {
  expect(timeForMilkAndCookies(new Date(2010, 11, 2))).toBeFalsy();
});

test("When date is (1980, 9, 24), should return False ", () => {
  expect(timeForMilkAndCookies(new Date(1980, 9, 24))).toBeFalsy();
});
