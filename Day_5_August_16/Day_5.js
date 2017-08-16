// window - to interact with the window containing the web page
// window.history
// More https://developer.mozilla.org/en/docs/Web/API/Window

// So from within JavaScript, you can interact with the user's browser window

// window <- 
// window.document <- interact with web page 
// window.history 






Hands-On
// index.html 
// 3 Buttons On Web Page : Back, Forward, New Tab
// Add Confirmation Dialog Box for Back, Forward
// Add Alert for New Tab

// document 

// HTML Forms 
// To collect user input on a web page

<form>
</form> 

// Form Elements 
// Different types of form/input elements
// A few  - text, radio, submit

// Hands-On : <form>


// one line text input 
<input 
    type="text" 
    name="somename"
    value="Default Value Here"
    placeholder= "Placeholder Here"
/> 

// Closing tag 
// Hands-On : firstname, lastname, <br>

// radio buttons
// choose one amongst limited number of choices
// all choices share the same "name" attribute
// checked 

<input 
    type="radio"
    name="shared_name"
    value="some_value"
    checked

/> 

// submit 
// button to submit form data to form handler 
// what happens on submit? 


<input 
    type="submit" 
    value="Submit" 
/>


// form action attribute 
// action to perform on submit
// typically a web page
// form data sent to that web page on submit

<form action ="/submit.html" />

// Request/Response Cycle 
// default action - same page 

// form method attribute 
// GET / POST 

// GET
// default method 
// good for short data AND nonsensitive data (page address field)

// POST 

// input elements - name attribute missing 

// More form elements  - Explore 
// HW: https://developer.mozilla.org/en/docs/Web/HTML/Element/input


// Quiz

// Node Setup 


// Intro to Node 

// What is Node






















// JS Engine

// One such JS Engine - in browsers

// History Lesson (ECMAScript)

// Brendan Eich
// Mocha > LiveScript > JavaScript
// 1995 - Sun Microsystems and NetScape released JS
// March 1996 - NetScape Navigator 2.0 - supported JS 
// actions on web pages 












// Client Side Scripting Language for Web Pages
// Widespread success



// Microsoft 
//  compatible dialect - JScript (TM issues)
// IE 3.0 - August 1996 



// Client Side Scripting Language for Web Pages


// Netscape > ECMA International 
// Standardisation of JavaScript
// ECMAScript - first standardised edition
// June 1997

// ES5 - 2009
// ES6 - 2015

// The name ECMAScript - a compromise 

// Eich on ECMAScript 
// "ECMAScript was always an unwanted trade name 
// that sounds like a skin disease." 


// Both JavaScript and JScript are slight 
// variants on ECMAScript 





// For a long time 
// JS only on browsers


// Chromium 

// 2 Browser Components
// 1. Web Rendering Engine
// IE - Trident, Mozilla - Gecko, Safari - Webkit
// 2. JS Engine

// Safari - OS 





// Google 
// Browser using Webkit 
// JS implementations - slow 
// V8 - fast

// Chromium
// Chrome = Modified WebKit + V8 


// Chrome - V8
// IE - Chakra
// Mozilla - SpiderMonkey
// Opera, Chrome - V8 


// V8 - implementation of ECMAScript
// improved runtime
// rewrote how JS implemented
// Native C++ code 
// eg. Math.SQRT2

// Why the name V8? 

// V8 engine designed by Ford

// Wikipedia 




// Story of JS Browser Engine - V8


// From V8 to Node 


// Ryan Dahl 
// Summer Project
// Downloaded Chromium - OSS part of Chrome

// Decouple V8 from DOM 
// V8 + low level I/O library + Event Loop(?)
// C++ code : directly on system 


// European JSConf : November 2009


// First time : JS on the "server side"

// JavaScript on the server
// Desktop Applications
// Server Applications


// Ecosystem - server (npm - 2010)
// Now desktop too - Github


// Node = V8 - DOM + FS + Network + HTTP Server








// Why is Node trending? 

// No Escaping JavaScript 
// Fast - asynchronous libraries  - reverse trend 
// TODO : Asynchronous libraries 



// Install Node
// Binaries node, npm 


// JS on the browser :
-  Console, run entire JS files at one go 

// Node on the server : 
- REPL (Console), run entire files at one go 

// Note : Why is script.js not running?


// Hands-On
// REPL : node
// Script : node script.js


// Most JS works as-is in Node
// this keyword works differently
// global object 


// What will not work in Node.js (that worked in browsers)
// a) window
// b) document 
// c) DOM not available

// Node : ECMAScript + Server Specific Features
// process (not in browsers)
// global  (not in browsers)



// Todo : Timing of console.log first time vs nth time


console.log(process)
console.log(global) 


// outermost global object 

// window vs global 

// window - outermost scope + lots of things 

// global - outermost scope + process + ... 

// TODO : Where to put JS files : Body/Head
// TODO : async defer 


// HW - 16 August 2017 
// Read history of JS, Node (technical perspective)
// Review code, try to explore require and modules on your own



// JS Code in two files
// Browser 

// HTML - entry point - the main function
// All JS code in one file 

// Spreading your data across multiple files/modules 
// Node - CommonJS standard (before ES6)
// ES6 - import, export 
