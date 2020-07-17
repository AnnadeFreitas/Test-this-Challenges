function addUp(num) {
  var result = 0;
  var parcial = num;

  for (num; num >= 1; num--) {
    if (num === 1) {
      result = result + parcial;
    } else {
      parcial = parcial + num - 1;
    }
  }
  if (num < 0) {
    result = "Cannot perform a function";
  }
  return result;
}

module.exports = addUp;
