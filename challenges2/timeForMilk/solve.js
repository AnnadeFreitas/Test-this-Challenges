function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();
  var result = "";
  if (day === 24 && month === 11) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

module.exports = timeForMilkAndCookies;
