var a = 10;


console.log(module.exports === exports);

// Case 3 : exports (Useless)
// assign it a string literal
//exports = {a:a};
//console.log(module.exports === exports);
//console.log(module.exports);
//console.log(exports);


// Case 4 : exports (Reasonable)
// exports : attach properties to it
//exports.a = a;
//console.log(module.exports === exports);
//console.log(module.exports);
//console.log(exports);



// Case 2: module.exports (Ideal)
// attach properties
// Ideal Case
//module.exports.a = a;

//console.log(module.exports === exports);
//console.log(module.exports);
//console.log(exports);


// Case 1 : module.exports (Reasonable)
// - assign it a string literal

//module.exports = {a:a};

//console.log(module.exports === exports);
//console.log(module.exports);
//console.log(exports);
// End of Case 1







// Summary
// Rule 1 : don't use exports
// Rule 2 : if you have to use it, dont assign it to object literals
// Rule 3 : if you are going to assign object literals to module.exports, that will work, but then don't use exports















