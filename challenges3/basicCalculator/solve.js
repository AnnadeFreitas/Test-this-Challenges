function calculator(num1, operator, num2) {
  var result = 0;
  if (operator === "/") {
    if (num2 != 0) {
      result = num1 / num2;
    } else {
      result = "Can't divide by 0!";
    }
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "+") {
    result = num1 + num2;
  } else {
    result = num1 * num2;
  }
  return result;
}

module.exports = calculator;
