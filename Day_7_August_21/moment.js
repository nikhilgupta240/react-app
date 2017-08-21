// Topic 1 : Lookup Pattern of require

// Relative Path and a js suffix 

var x = require("./modname.js");
var y = require("../../modname.js");


// Relative Path, no suffix

var x = require("./modname");

// require will lookup in that path

// modname.js 
// modname/package.json > entry file in this 
// modname/index.js 






// Just module name : no path

var x = require("moment");

// 1. Check in list of node core modules


// 2. Current Directory  -let's say C:/Webstorm/MyProject/

CurrentDirectory/node_modules/moment.js 
CurrentDirectory/node_modules/moment/package.json
CurrentDirectory/node_modules/moment/index.js 

C:/Webstorm/MyProject/node_modules/modname.js
C:/Webstorm/MyProject/node_modules/modname/package.json
C:/Webstorm/MyProject/node_modules/modname/index.js
C:/Webstorm/node_modules/modname.js
C:/Webstorm/node_modules/modname/package.json
C:/Webstorm/node_modules/modname/index.js
C:/node_modules/modname.js
C:/node_modules/modname/package.json
C:/node_modules/modname/index.js


// and Parent Directory and .... 


3. require.paths array - No

module.paths array - Yes!





// Topic 2 : Folders as module

- myfoldermodule  -mathsmodule 
-- index.js
-- funcs.js   //sum, difference 
-- consts.js // PI, E 

require lookup

// 1. Create a folder based module : mathsmodule
// 2. index.js - which will export mathsmodule entries
// 3. consts.js, funcs.js - from which index.js 
// // will import some entries





// Todo : __dirname





// Module Patterns


var moment = require("moment");



moment()...


// How to use a module once loaded?
// Fast Answer : Read the docs 
// Difficult Answer : Explore the code - (soon)

// Different modules, different patterns 

// Experience - identifying different module patterns

// Module patterns  (no one right way)

// 1. object literal

// 2. overriding with a function

m.e = function greet(){..}


// 3. adding a function as a property 

m.e.greet = function() {...}

// 4. function constructor & m.e. = new FC 

m.e = new FC 

// Confusion : still cached! - only one object created


// 5. function constructor & m.e. = FC

// new objects created



// 6. Module Pattern (not Node "module patterns")

// Sidetrack : FC land
// One opinion in the JS community - "new keyword is dangerous"
// Alternate way to create objects
// function Student, function Student_With_Module_Pattern

// https://macwright.org/2012/06/04/the-module-pattern.html

// Hands-On


// Ontrack : Node module patterns land 

// require side


// Todo : Check "this" and methods in Module Patterns

// 4. Moment.js - what's happening

var moment = require("moment");

// Lookup where? 



// moment is a Module Pattern style way to create new objects
// So use it without the new keyword unlike FCs
// Creates a new object 
// lots of properties 
moment()



