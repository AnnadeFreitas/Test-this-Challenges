function changeEnough(change, amountDue) {
  var quarter = parseInt(change[0]) * 0.25;
  var dimer = parseInt(change[1]) * 0.1;
  var nickel = parseInt(change[2]) * 0.05;
  var penny = parseInt(change[3]) * 0.01;
  var result = quarter + dimer + nickel + penny;
  if (result >= amountDue) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
module.exports = changeEnough;
