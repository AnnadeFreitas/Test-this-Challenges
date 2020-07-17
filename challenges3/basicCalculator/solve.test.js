const calculator = require("./solve");

test("when num1 is 3 , operator is '+', and num2 is 5 ,should return 8", () => {
  expect(calculator(3, "+", 5)).toBe(8);
});

test("when num1 is 3 , operator is '/', and num2 is 0 ,should return 'Can't divide by 0!' ", () => {
  expect(calculator(3, "/", 0)).toBe("Can't divide by 0!");
});

test("when num1 is 3 , operator is '-', and num2 is 5 ,should return -2 ", () => {
  expect(calculator(3, "-", 5)).toBe(-2);
});

test("when num1 is 3 , operator is '*', and num2 is 5 ,should return 15 ", () => {
  expect(calculator(3, "*", 5)).toBe(15);
});

test("when num1 is 3 , operator is '*', and num2 is 0 ,should return 15 ", () => {
  expect(calculator(3, "*", 0)).toBe(0);
});
