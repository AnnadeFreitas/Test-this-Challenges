const reverse = require("./solve");

test("when str is 'Hello World' should return 6", () => {
  expect(reverse("Hello World")).toBe("DLROw OLLEh");
});

test("When str is 'ReVeRsE' should return 'eSrEvEr' ", () => {
  expect(reverse("ReVeRsE")).toBe("eSrEvEr");
});

test("When str is 'ANNA' should return 'anna' ", () => {
  expect(reverse("ANNA")).toBe("anna");
});
