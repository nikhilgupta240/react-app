// Another style of node module pattern

// This time instead of a FC, we will use
// the Module Pattern to create objects


function Greet(){

    var obj = {};
    // Look this up
    obj.greeting = "Hello World";
    obj.greet = function(){console.log(this.greeting);}

    return obj;
}

module.exports = Greet;


var c = Greet();

c = obj = { greeting : HW, greet : function()cl(t.g);}


obj.greet()