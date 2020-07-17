function matchHouses(step) {
  var resultado = 0;

  if (step === 1) {
    resultado = 6;
  } else if (step === 0) {
    resultado = 0;
  } else if (step < 0) {
    resultado = "There are no negative steps";
  } else {
    resultado = step * 6 - (step - 1);
  }
  return resultado;
}
module.exports = matchHouses;
