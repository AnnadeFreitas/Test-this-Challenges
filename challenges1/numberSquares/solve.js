function numberSquares(n) {
  var result = (n * ((n + 1) * (2 * n + 1))) / 6;
  return result;
}

module.exports = numberSquares;
