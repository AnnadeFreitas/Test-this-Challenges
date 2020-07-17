function highestDigit(number) {
  var aux = number.toString().split("");
  var result = 0;
  for (var i = 0; i < aux.length; i++) {
    if (aux[i] > result) {
      result = aux[i];
    }
  }
  return parseInt(result);
}

module.exports = highestDigit;
