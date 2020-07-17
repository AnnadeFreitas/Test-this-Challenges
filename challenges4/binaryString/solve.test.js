const minSwaps = require("./solve");

test("when s1  is '1001' and s2 is '1001', should return 0", () => {
  expect(minSwaps("1001", "1001")).toBe(0);
});

test("when s1  is '1001' and s2 is '1001', should return 1", () => {
  expect(minSwaps("110011", "010111")).toBe(1);
});

test("when s1  is '11111000001100' and s2 is '10110010100110', should return 3", () => {
  expect(minSwaps("11111000001100", "10110010100110")).toBe(3);
});
