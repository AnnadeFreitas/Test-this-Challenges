function countBoomerangs(arr) {
  var count = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] != arr[i + 1] && arr[i] === arr[i + 2]) {
      count++;
    }
  }
  return count;
}
module.exports = countBoomerangs;
