// Node Modules

// Recap

// a.js, b.js
// require("a.js")
// dynamic import
// multiple "require" statements - a.js run only once




// When a.js is "required" in b.js -> variables of a.js not visible in b.js 

// Analogy : Private, Public 

// By default : private 
// module.exports


// var x = require("./a.js");
// console.log(x);



// Review with var x and var y

// 1. Modules are cached
// 2. Dynamic import
// 3. both x and y point to the same module.exports

// x == y
// change 


// Hands-On 
// Create 2 modules mod1.js , mod2.js

// mod1.js has some maths constants (PI, E, SQRT2) 
// mod2.js has some maths functions (sum, product, divide, multiple) 
// import both into main.js and use them


// Eg. of Relative Path (Directory)

// Todo : Later
// Require string can change 
// But Node has exact path 
// So one module loaded only once




//Private Members In A Module

// privVar
// privFun 

//a) You can have private data members in a module
//b) You can expose some functions that can use the private data members 



// this in a file?
// this === global 



// https://stackoverflow.com/questions/15406062/in-what-scope-are-module-variables-stored-in-node-js


// exports vs module.exports 
// Initially both point to same objects
// Only module.exports is returned

// Add properties on exports - OK 
// Add properties on module.exports - OK`
// Reassign exports - Connection Lost + Not Exported
// Reassign module.exports - Connection Lost + But Exported


// exports vs module.exports vs this





// global

// global and Module Scope

// TODO : Underflow 

// TODO : https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html




// global vs "module local" variables vs this/module.exports/exports in node
// Comparing this with window vs "function local" variables vs this in browsers 