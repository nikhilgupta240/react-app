

var x = 10;

console.log(this.x);
console.log(module.exports.x);
console.log(exports.x);
console.log("Is this in global?");
console.log(global.x);



y = 20;


console.log(this.y); //module.exports = {}
console.log("Is this in global?");
console.log(global.y);
