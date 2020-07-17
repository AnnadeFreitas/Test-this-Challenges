function oddishOrEvenish(num) {
  var result = 0;
  var soma = num.toString().split("");
  for (var i = 0; i < soma.length; i++) {
    var result = result + parseInt(...soma[i]);
  }
  if (result % 2 == 0) {
    result = "Evenish";
  } else {
    result = "Oddish";
  }
  return result;
}
module.exports = oddishOrEvenish;
