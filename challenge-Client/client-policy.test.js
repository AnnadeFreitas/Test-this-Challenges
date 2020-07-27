const { register, getPolicy } = require("./client-policy");

test("when  name = '' , lastName= 'Granger', zipcode= 12345,  email= 'granger@gmail.com',  birthday= '23-07-2002', should return 'Name can't be Null!' ", () => {
  expect(
    register("", "Granger", 12345, "granger@gmail.com", "23-07-2002")
  ).toBe("Name can't be Null!");
});

test("when  name = 'Hermione' , lastName= '', zipcode= 12345, email= 'granger@gmail.com', birthday= '23-07-2002', should return 'Last Name can't be Null!' ", () => {
  expect(
    register("Hermione", "", 12345, "granger@gmail.com", "23-07-2002")
  ).toBe("Last Name can't be Null!");
});

test("when  name = 'Hermione' , lastName= '', zipcode= 1345, email= 'granger@gmail.com', birthday= '23-07-2002', should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 1345, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when  name = 'Hermione' , lastName= '', zipcode= 123457, email= 'granger@gmail.com', birthday= '23-07-2002', should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 123457, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when  name = 'Hermione' , lastName= '', zipcode= 22345, email= 'granger@gmail.com', birthday= '23-07-2002', should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 22345, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when  name = 'Hermione' , lastName= '', zipcode= 12346, email= 'granger@gmail.com', birthday= '23-07-2002', should return 'ZipCode is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 12346, "granger@gmail.com", "23-07-2002")
  ).toBe("ZipCode is invalid!");
});

test("when  name = 'Hermione' , lastName= 'Granger', zipcode= 12345, email= 'grangergmail.com',  birthday= '23-07-2010', should return 'Email is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 12345, "grangergmail.com", "23-07-2002")
  ).toBe("E-mail is invalid!");
});

test("when  name = 'Hermione' , lastName= 'Granger', zipcode= 12345, email= 'granger@gmailcom',  birthday= '23-07-2010', should return 'Email is invalid!' ", () => {
  expect(
    register("Hermione", "Granger", 12345, "granger@gmailcom", "23-07-2002")
  ).toBe("E-mail is invalid!");
});

test("when  name = 'Hermione' , lastName= 'Granger',  zipcode= 12345, email= '', birthday= '23-07-2002', should return  'E-mail can't be Null!' ", () => {
  expect(register("Hermione", "Granger", 12345, "", "23-07-2002")).toBe(
    "E-mail can't be Null!"
  );
});

test("when  name = 'Hermione' , lastName= 'Granger',  zipcode= 12345, email= 'granger@gmail.com', birthday= '', should return 'Birthday can't be Null!' ", () => {
  expect(register("Hermione", "Granger", 12345, "granger@gmail.com", "")).toBe(
    "Birthday can't be Null!"
  );
});

test("when  name = 'Hermione' , lastName= 'Granger',  zipcode= 12345, email= 'granger@gmail.com', birthday= '', should return 'Birthday can't be Null!' ", () => {
  expect(register("Hermione", "Granger", 12345, "granger@gmail.com", "")).toBe(
    "Birthday can't be Null!"
  );
});

test("when  name = 'Hermione' , lastName= 'Granger',  zipcode= 12345, email= 'granger@gmail.com', birthday= '27-07-2003', should return 'User must have more than 18 years old' ", () => {
  expect(
    register("Hermione", "Granger", 12345, "granger@gmail.com", "2003-07-27")
  ).toBe("User must have more than 18 years old");
});

test("when namePet = '', age = 2, species = 'dog', breed = 'small', should return 'Pet Name can't be Null!' ", () => {
  expect(getPolicy("", 2, "dog", "small")).toBe("Pet Name can't be Null!");
});

test("when namePet = 'Lion', age = '', species = 'dog', breed = 'small', should return 'Pet Age can't be Null!' ", () => {
  expect(getPolicy("Lion", "", "dog", "small")).toBe("Pet Age can't be Null!");
});

test("when namePet = 'Lion', age = 2, species = '', breed = 'small', should return 'Pet Species can't be Null!' ", () => {
  expect(getPolicy("Lion", 2, "", "small")).toBe("Pet Species can't be Null!");
});

test("when namePet = 'Lion', age = 2, species = 'I don't know', breed = 'small', should return 'We dont have policies for I don't know' ", () => {
  expect(getPolicy("Lion", 2, "I don't know", "small")).toBe(
    "We dont have policies for I don't know"
  );
});

test("when namePet = 'Lion', age = 2, species = 'dog', breed = '', should return 'Pet Name can't be Null!' ", () => {
  expect(getPolicy("Lion", 2, "dog", "")).toBe("Pet Breed can't be Null!");
});

test("when namePet = 'Lion', age = 2, species = 'dog', breed = 'I don't know', should return 'Breed I don't know doe's not exist!' ", () => {
  expect(getPolicy("Lion", 2, "dog", "I don't know")).toBe(
    "Breed I don't know doe's not exist!"
  );
});
