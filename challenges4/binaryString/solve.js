function minSwaps(s1, s2) {
  var result = 0;
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      result++;
    }
  }
  return result / 2;
}

module.exports = minSwaps;
