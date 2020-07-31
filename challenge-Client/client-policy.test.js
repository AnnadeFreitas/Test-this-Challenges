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

test("when birthday is '2002-07-21', should return age : 18 isOld: false ", () => {
  expect(
    register(
      "Hermione",
      "Granger",
      12345,
      "hermione.granger@something.com",
      "2002-07-21"
    )
  ).toEqual({
    name: "Hermione",
    lastName: "Granger",
    zipCode: 12345,
    email: "hermione.granger@something.com",
    birthday: "2002-07-21",
    age: 18,
    isOld: false,
  });
});

test("when birthday is '1960-07-21', should return age : 60 isOld: false ", () => {
  expect(
    register(
      "Hermione",
      "Granger",
      12345,
      "hermione.granger@something.com",
      "1960-07-21"
    )
  ).toEqual({
    name: "Hermione",
    lastName: "Granger",
    zipCode: 12345,
    email: "hermione.granger@something.com",
    birthday: "1960-07-21",
    age: 60,
    isOld: false,
  });
});

test("when birthday is '1959-07-21', should return age : 61 isOld: true ", () => {
  expect(
    register(
      "Hermione",
      "Granger",
      12345,
      "hermione.granger@something.com",
      "1959-07-21"
    )
  ).toEqual({
    name: "Hermione",
    lastName: "Granger",
    zipCode: 12345,
    email: "hermione.granger@something.com",
    birthday: "1959-07-21",
    age: 61,
    isOld: true,
  });
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

test("when petAge is 2, species is 'dog', breed is 'small', should return humanPetAge : 8, isAtRisk: false ", () => {
  expect(getPolicy("Lion", 2, "dog", "small")).toEqual({
    namePet: "Lion",
    petAge: 2,
    species: "DOG",
    breed: "SMALL",
    humanPetAge: 8,
    isAtRisk: false,
  });
});

test("when petAge is 3, species is 'dog', breed is 'small', should return humanPetAge : 12, isAtRisk: true", () => {
  expect(getPolicy("Lion", 3, "dog", "small")).toEqual({
    namePet: "Lion",
    petAge: 3,
    species: "DOG",
    breed: "SMALL",
    humanPetAge: 12,
    isAtRisk: true,
  });
});

test("when petAge is 2, species is 'dog', breed is 'medium', should return humanPetAge : 10, isAtRisk: false", () => {
  expect(getPolicy("Lion", 2, "dog", "medium")).toEqual({
    namePet: "Lion",
    petAge: 2,
    species: "DOG",
    breed: "MEDIUM",
    humanPetAge: 10,
    isAtRisk: false,
  });
});

test("when petAge is 3, species is 'dog', breed is 'medium', should return humanPetAge : 15, isAtRisk: true", () => {
  expect(getPolicy("Lion", 3, "dog", "medium")).toEqual({
    namePet: "Lion",
    petAge: 3,
    species: "DOG",
    breed: "MEDIUM",
    humanPetAge: 15,
    isAtRisk: true,
  });
});

test("when petAge is 1, species is 'dog', breed is 'large', should return humanPetAge : 7, isAtRisk: false", () => {
  expect(getPolicy("Lion", 1, "dog", "large")).toEqual({
    namePet: "Lion",
    petAge: 1,
    species: "DOG",
    breed: "LARGE",
    humanPetAge: 7,
    isAtRisk: false,
  });
});

test("when petAge is 2, species is 'dog', breed is 'large', should return humanPetAge : 14, isAtRisk: true", () => {
  expect(getPolicy("Lion", 2, "dog", "large")).toEqual({
    namePet: "Lion",
    petAge: 2,
    species: "DOG",
    breed: "LARGE",
    humanPetAge: 14,
    isAtRisk: true,
  });
});

test("when petAge is 10, species is 'cat', breed is 'Small', should return humanPetAge : 20, isAtRisk: false", () => {
  expect(getPolicy("Bob", 10, "cat", "Small")).toEqual({
    namePet: "Bob",
    petAge: 10,
    species: "CAT",
    breed: "SMALL",
    humanPetAge: 20,
    isAtRisk: false,
  });
});

test("when petAge is 11, species is 'cat', breed is 'Small', should return humanPetAge : 22, isAtRisk: true", () => {
  expect(getPolicy("Bob", 11, "cat", "Small")).toEqual({
    namePet: "Bob",
    petAge: 11,
    species: "CAT",
    breed: "SMALL",
    humanPetAge: 22,
    isAtRisk: true,
  });
});

test("when petAge is 2, species is 'cat', breed is 'Medium', should return humanPetAge : 6, isAtRisk: false", () => {
  expect(getPolicy("Bob", 2, "cat", "Medium")).toEqual({
    namePet: "Bob",
    petAge: 2,
    species: "CAT",
    breed: "MEDIUM",
    humanPetAge: 6,
    isAtRisk: false,
  });
});

test("when petAge is 2, species is 'cat', breed is 'Medium', should return humanPetAge : 21, isAtRisk: true", () => {
  expect(getPolicy("Bob", 7, "cat", "Medium")).toEqual({
    namePet: "Bob",
    petAge: 7,
    species: "CAT",
    breed: "MEDIUM",
    humanPetAge: 21,
    isAtRisk: true,
  });
});

test("when petAge is 2, species is 'cat', breed is 'Large', should return humanPetAge : 10, isAtRisk: false", () => {
  expect(getPolicy("Bob", 2, "cat", "Large")).toEqual({
    namePet: "Bob",
    petAge: 2,
    species: "CAT",
    breed: "LARGE",
    humanPetAge: 10,
    isAtRisk: false,
  });
});

test("when petAge is 2, species is 'cat', breed is 'Large', should return humanPetAge : 20, isAtRisk: false", () => {
  expect(getPolicy("Bob", 4, "cat", "Large")).toEqual({
    namePet: "Bob",
    petAge: 4,
    species: "CAT",
    breed: "LARGE",
    humanPetAge: 20,
    isAtRisk: false,
  });
});

test("when petAge is 2, species is 'cat', breed is 'Large', should return humanPetAge : 25, isAtRisk: true", () => {
  expect(getPolicy("Bob", 5, "cat", "Large")).toEqual({
    namePet: "Bob",
    petAge: 5,
    species: "CAT",
    breed: "LARGE",
    humanPetAge: 25,
    isAtRisk: true,
  });
});
