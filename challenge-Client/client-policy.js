function register(name, lastName, zipCode, email, birthday) {
  if (name === null || name === "") {
    return "Name can't be Null!";
  }

  if (lastName === null || lastName === "") {
    return "Last Name can't be Null!";
  }

  let checkZipCode = zipCode.toString();

  if (zipCode === null || zipCode === "") {
    return "ZipCode can't be Null!";
  } else if (
    checkZipCode.length !== 5 ||
    checkZipCode[0] % 2 === 0 ||
    checkZipCode[checkZipCode.length - 1] % 2 === 0
  ) {
    return "ZipCode is invalid!";
  }

  if (email === null || email === "") {
    return "E-mail can't be Null!";
  }
  if (!email.includes("@")) {
    return "E-mail is invalid!";
  }

  let indexString = email.indexOf("@");
  let checkEmail = email.substring(indexString);

  if (!checkEmail.includes(".")) {
    return "E-mail is invalid!";
  }

  if (birthday === null || birthday === "") {
    return "Birthday can't be Null!";
  }

  const year = 31536000000;
  birthday = new Date(birthday);
  const yearsOld = parseInt((new Date().getTime() - birthday.getTime()) / year);

  if (yearsOld < 18) {
    return "User must have more than 18 years old";
  }

  return {
    name: name,
    lastName: lastName,
    zipCode: zipCode,
    email: email,
    birthday: birthday,
    age: yearsOld,
    isOld: yearsOld > 60,
  };
}

function getPolicy(namePet, age, species, breed) {
  if (namePet === "" || namePet === null) {
    return "Pet Name can't be Null!";
  }

  if (age === "" || age === null) {
    return "Pet Age can't be Null!";
  }

  if (species === "" || species === null) {
    return "Pet Species can't be Null!";
  }

  if (breed === "" || breed === null) {
    return "Pet Breed can't be Null!";
  }

  let speciesUpperCase = species.toUpperCase();

  if (speciesUpperCase !== "DOG" && speciesUpperCase !== "CAT") {
    return "We dont have policies for " + species;
  }

  let breedUpperCase = breed.toUpperCase();

  if (
    breedUpperCase != "LARGE" &&
    breedUpperCase != "MEDIUM" &&
    breedUpperCase != "SMALL"
  ) {
    return "Breed " + breed + " doe's not exist!";
  }

  let setHumanAge = 0;
  if (breedUpperCase === "SMALL" && speciesUpperCase === "DOG") {
    setHumanAge = age * 4;
  } else if (breedUpperCase === "MEDIUM" && speciesUpperCase === "DOG") {
    setHumanAge = age * 5;
  } else if (breedUpperCase === "LARGE" && speciesUpperCase === "DOG") {
    setHumanAge = age * 7;
  } else if (breedUpperCase === "SMALL" && speciesUpperCase === "CAT") {
    setHumanAge = age * 2;
  } else if (breedUpperCase === "MEDIUM" && speciesUpperCase === "CAT") {
    setHumanAge = age * 3;
  } else if (breedUpperCase === "LARGE" && speciesUpperCase === "CAT") {
    setHumanAge = age * 5;
  }

  let atRisk = false;
  if (breedUpperCase === "SMALL" && speciesUpperCase === "DOG") {
    if (age * 4 > 10) {
      atRisk = true;
    }
  } else if (breedUpperCase === "MEDIUM" && speciesUpperCase === "DOG") {
    if (age * 5 > 10) {
      atRisk = true;
    }
  } else if (breedUpperCase === "LARGE" && speciesUpperCase === "DOG") {
    if (age * 7 > 10) {
      atRisk = true;
    }
  } else if (breedUpperCase === "SMALL" && speciesUpperCase === "CAT") {
    if (age * 2 > 20) {
      atRisk = true;
    }
  } else if (breedUpperCase === "MEDIUM" && speciesUpperCase === "CAT") {
    if (age * 3 > 20) {
      atRisk = true;
    }
  } else if (breedUpperCase === "LARGE" && speciesUpperCase === "CAT") {
    if (age * 5 > 20) {
      atRisk = true;
    }
  }

  return {
    namePet: namePet,
    age: age,
    species: speciesUpperCase,
    breed: breedUpperCase,
    humenAge: setHumanAge,
    isAtRisk: atRisk,
  };
}

module.exports = { register, getPolicy };
