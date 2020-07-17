function numInStr(arr) {
  var result = [];
  var number = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      number = parseInt(arr[i].charAt(j));
      if (number) {
        result.push(arr[i]);
        break;
      }
    }
  }
  return result;
}

module.exports = numInStr;
