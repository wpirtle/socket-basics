var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf());

//var timestamp = 1452890603826;
var timestamp = now.valueOf();

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

// now.subtract(1, 'year');

// console.log(now.format());

// Sunday Oct 5th 2015, 6:45:22 pm
//