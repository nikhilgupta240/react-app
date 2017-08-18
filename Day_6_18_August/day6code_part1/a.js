// By default k is private
var k = 10;

var privateVariable = 100;
var printMe = function(){ console.log("something");}



var printMeNotSecure = function() {
    console.log("something " + privateVariable);
}
console.log("A was loaded");


module.exports = {
    k: k,
    printMeWorks : printMeNotSecure};

