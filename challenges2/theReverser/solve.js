function reverse(str) {
  var newStr = str.split("");
  var word = "";
  for (var i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] === newStr[i].toUpperCase()) {
      word = word + newStr[i].toLowerCase();
    } else {
      word = word + newStr[i].toUpperCase();
    }
  }
  return word;
}

module.exports = reverse;
