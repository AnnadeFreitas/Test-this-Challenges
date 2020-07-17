const numInStr = require("./solve");

test("when arr is ['abc', 'abc10'] should return ['abc10']", () => {
  expect(numInStr(["abc", "abc10"])).toEqual(["abc10"]);
});

test("When arr is ['1', 'a' , ' ' ,'b'] should return ['1'] ", () => {
  expect(numInStr(["1", "a", " ", "b"])).toEqual(["1"]);
});

test("When arr is ['-/>', '10bc', 'abc '] should return ['10bc'] ", () => {
  expect(numInStr(["-/>", "10bc", "abc "])).toEqual(["10bc"]);
});

test("When arr is ['rct', 'ABC', 'Test', 'xYz'] should return [] ", () => {
  expect(numInStr(["rct", "ABC", "Test", "xYz"])).toEqual([]);
});
