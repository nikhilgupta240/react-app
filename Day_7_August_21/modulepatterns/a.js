var g1 = require("./greet1.js");

console.log(g1.greeting);


var g2 = require("./greet2.js");

g2();


var g3 = require("./greet3.js");
g3.greet();

var g4 = require("./greet4.js");

g4.greet();


var g5 = require("./greet4.js");

console.log(g5);
g5.greeting = "Changed Greeting";

g5.greet();


g4.greet();


var G = require("./greet5.js");

var g6 = new G();

console.log(g6);

var G2 = require("./greet5.js");

var g7 = new G2();

// g6 == g7



var G3 = require("./greet6.js");

var g8 = G3();

var g9 = G3();


var m = new moment();

var m = moment()

