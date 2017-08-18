var x = require("./a.js");
// A was loaded
// x = module.exports of a.js


console.log(x);
// module.exports of a.js

var y = require("./a");
// y = module.exports of a.js

console.log(y);
// module.exports of a.js


// Do x and y point to the same object

console.log(x===y);

y.k = 20;

console.log(x);


