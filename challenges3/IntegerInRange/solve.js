function intWithinBounds(n, lower, upper) {
  var result = true;
  if (n === parseInt(n)) {
    if (n >= upper || n < lower) {
      result = false;
    }
  } else {
    result = false;
  }
  return result;
}
module.exports = intWithinBounds;
