'use strict';
exports.getDay = function () {
  const option = { weekday: 'long', month: 'long', day: 'numeric' };
  const weekDay = new Date();
  return weekDay.toLocaleDateString('en-US', option);
};
