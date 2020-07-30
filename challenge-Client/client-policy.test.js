const { register, getPolicy } = require("./client-policy");

test("when  name is null, should return 'Name can't be Null!' ", () => {
  expect(
    register("", "Granger", 12345, "granger@gmail.com", "23-07-2002")
  ).toBe("Name can't be Null!");
});

test("when  Last Name is Null, should return 'Last Name can't be Null!' ", () => {
  expect(
    register("Hermione", "", 12345, "granger@gmail.com", "23-07-2002")
  ).toBe("Last Name can't be Null!");
});

test("when zipcode is less than expected, should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 1345, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when zipcode is larger than expected, should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 123457, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when the first zipcode element is even, should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 22345, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when the last zipcode element is even, should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 12346, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when the email doesn't have '@', should return 'Email is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 12345, "grangergmail.com", "23-07-2002")
  ).toBe("E-mail is invalid!");
});

test("when the email doesn't have '.' after the '@' element, should return 'Email is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 12345, "granger@gmailcom", "23-07-2002")
  ).toBe("E-mail is invalid!");
});

test("when email is null, should return  'E-mail can't be Null!' ", () => {
  expect(register("Hermione", "Granger", 12345, "", "23-07-2002")).toBe(
    "E-mail can't be Null!"
  );
});

test("when birthday is null, should return 'Birthday can't be Null!' ", () => {
  expect(register("Hermione", "Granger", 12345, "granger@gmail.com", "")).toBe(
    "Birthday can't be Null!"
  );
});

test("when the client's age is under 18, should return 'User must have more than 18 years old' ", () => {
  expect(
    register("Hermione", "Granger", 12345, "granger@gmail.com", "2003-07-27")
  ).toBe("User must have more than 18 years old");
});

test("when namePet is null, should return 'Pet Name can't be Null!' ", () => {
  expect(getPolicy("", 2, "dog", "small")).toBe("Pet Name can't be Null!");
});

test("when petAge is null, should return 'Pet Age can't be Null!' ", () => {
  expect(getPolicy("Lion", "", "dog", "small")).toBe("Pet Age can't be Null!");
});

test("when species is null, should return 'Pet Species can't be Null!' ", () => {
  expect(getPolicy("Lion", 2, "", "small")).toBe("Pet Species can't be Null!");
});

test("when is different than expected, should return 'We dont have policies for I don't know' ", () => {
  expect(getPolicy("Lion", 2, "I don't know", "small")).toBe(
    "We dont have policies for I don't know"
  );
});

test("when breed is null, should return 'Pet Name can't be Null!' ", () => {
  expect(getPolicy("Lion", 2, "dog", "")).toBe("Pet Breed can't be Null!");
});

test("when breed is different than expected, should return 'Breed I don't know doe's not exist!' ", () => {
  expect(getPolicy("Lion", 2, "dog", "I don't know")).toBe(
    "Breed I don't know doe's not exist!"
  );
});
