function getDays(date1, date2) {
  var result = (date2 - date1) / 86400000;
  return result;
}
module.exports = getDays;
