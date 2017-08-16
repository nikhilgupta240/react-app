

console.log("File B ran");

require("./a.js");
// Runs the "imported file"
// "Imports" it
// Dynamic import

// From our browser intuition, we should have access to a.js
//console.log(a_var); // Intuitively : 10

console.log("Something");

require("./a.js");
// Module Requires are cached
// We won't run this file again


// Each file is a module
// a.js , b.js - modules
// You can "import" a module into another module using "require"



