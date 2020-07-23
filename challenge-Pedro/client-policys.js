const checkName = (name) => {
  if (name === "") {
    return "Name can't be Null!";
  } else {
    return name;
  }
};

const checkLastName = (lastName) => {
  if (lastName === "") {
    return "Last Name can't be Null!";
  } else {
    return lastName;
  }
};

const checkZipCode = (zipCode) => {
  let zipCodeCheck = zipCode.toString().split("");
  if (zipCode === "") {
    return "ZipCode can't be Null!";
  } else if (
    zipCodeCheck.length !== 5 ||
    zipCodeCheck[0] % 2 === 0 ||
    zipCodeCheck[zipCodeCheck.length - 1] % 2 === 0
  ) {
    return "ZipCode is invalid!";
  } else {
    return zipCode;
  }
};

const checkEmail = (email) => {
  let indexString = email.indexOf("@");
  let checkEmail = email.substring(indexString);

  if (!checkEmail.includes(".")) {
    return "E-mail is invalid!";
  } else {
    return email;
  }
};

const checkBirthday = (birthday) => {
  let actualDate = moment(new Date());
  let secondDate = moment(new Date(birthday));
  const difer = moment.duration(actualDate.diff(secondDate));
  return difer.asYears();
};

const isOld = (checkBirthday) => {
  if (checkBirthday < 18) {
    return "User must have more than 18 years old";
  } else if (checkBirthday > 60) {
    return true;
  } else {
    return false;
  }
};

function register(name, lastName, zipCode, email, birthday) {
  return {
    name: checkName(name),
    lastName: checkLastName(lastName),
    zipCode: checkZipCode(zipCode),
    email: checkEmail(email),
    age: checkBirthday(birthday),
    isOld: isOld,
  };
}

const checkNamePet = (namePet) => {
  if (namePet === "") {
    return "Pet Name can't be Null!";
  } else {
    return name;
  }
};

const checkAge = (age) => {
  if (age === "") {
    return "Pet Age can't be Null!";
  } else {
    return age;
  }
};
const checkSpecies = (species) => {
  if (species.toUpperCase !== "DOG" || species.toUpperCase !== "CAT") {
    return "We dont have policies for ${species}";
  } else {
    return species.toUpperCase;
  }
};

const checkBreed = (breed) => {
  if (
    breed.toUpperCase !== "LARGE" ||
    breed.toUpperCase !== "MEDIUM" ||
    breed.toUpperCase !== "SMALL"
  ) {
    return "Breed ${breed} doe's not exist";
  } else {
    return breed.toUpperCase;
  }
};
const checkHumanAge = (age, breed, species) => {
  checkAge(age)(age);
  checkBreed(breed);
  checkSpecies(species);

  if (checkBreed(breed) === "SMALL" && checkSpecies(species) === "DOG") {
    return age * 4;
  } else if (
    checkBreed(breed) === "MEDIUM" &&
    checkSpecies(species) === "DOG"
  ) {
    return age * 5;
  } else if (checkBreed(breed) === "LARGE" && checkSpecies(species) === "DOG") {
    return age * 7;
  } else if (checkBreed(breed) === "SMALL" && checkSpecies(species) === "CAT") {
    return age * 2;
  } else if (
    checkBreed(breed) === "MEDIUM" &&
    checkSpecies(species) === "CAT"
  ) {
    return age * 3;
  } else if (checkBreed(breed) === "LARGE" && checkSpecies(species) === "CAT") {
    return age * 5;
  }
};

const checkRisk = (age, breed, species) => {
  if (checkBreed(breed) === "SMALL" && checkSpecies(species) === "DOG") {
    if (checkAge(age) * 4 > 10) {
      return "Is at Risk";
    } else {
      return "Isn't at risk";
    }
  } else if (
    checkBreed(breed) === "MEDIUM" &&
    checkSpecies(species) === "DOG"
  ) {
    if (checkAge(age) * 5 > 10) {
      return "Is at Risk";
    } else {
      return "Isn't at risk";
    }
  } else if (checkBreed(breed) === "LARGE" && checkSpecies(species) === "DOG") {
    if (checkAge(age) * 7 > 10) {
      return "Is at Risk";
    } else {
      return "Isn't at risk";
    }
  } else if (checkBreed(breed) === "SMALL" && checkSpecies(species) === "CAT") {
    if (checkAge(age) * 2 > 20) {
      return "Is at Risk";
    } else {
      return "Isn't at risk";
    }
  } else if (
    checkBreed(breed) === "MEDIUM" &&
    checkSpecies(species) === "CAT"
  ) {
    if (checkAge(age) * 3 > 20) {
      return "Is at Risk";
    } else {
      return "Isn't at risk";
    }
  } else if (checkBreed(breed) === "LARGE" && checkSpecies(species) === "CAT") {
    if (checkAge(age) * 5 > 20) {
      return "Is at Risk";
    } else {
      return "Isn't at risk";
    }
  }
};

function getPolicy(namePet, age, species, breed) {
  return {
    namePet: checkNamePet(namePet),
    age: checkAge(age),
    species: checkSpecies(species),
    breed: checkBreed(breed),
    humenAge: checkHumanAge(age, breed, species),
    isAtRisk: checkRisk(age, breed, species),
  };
}

module.exports = { register, getPolicy };
