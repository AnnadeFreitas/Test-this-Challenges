function squareDigits(n) {
  var newArr = n.toString().split("");
  var result = "";
  for (var i = 0; i < newArr.length; i++) {
    var result = result + newArr[i] * newArr[i];
  }
  return parseInt(result);
}
module.exports = squareDigits;
