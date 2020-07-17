const getDays = require("./solve");

test("when date1 is 'June 14, 2019' and date2 is 'June 20, 2019', should return 6", () => {
  expect(getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))).toBe(6);
});

test("when date1 is 'July 14, 2019' and date2 is 'June 20, 2019', should return -24", () => {
  expect(getDays(new Date("July 14, 2019"), new Date("June 20, 2019"))).toBe(
    -24
  );
});

test("when date1 is 'April 14, 2019' and date2 is 'December 20, 2019', should return 250", () => {
  expect(
    getDays(new Date("April 14, 2019"), new Date("December 20, 2019"))
  ).toBe(250);
});
