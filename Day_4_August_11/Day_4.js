
// Block : Curly Braces
// if, switch, while ... 


if(something )
{ 
    // block of code 
}


// Till ES5 : Global Scope, Function Scope 

// script.js

var a = 3; // Global scope : a, global.a 

function something(name){

    var b = 7;  // Local scope : b 

    console.log(a);
    console.log(b);


    if(b > 5)
        {

            var c = 10; // No Block Scope till ES5 


         }

    console.log(c); 

}

if (b>5){ // No block scope with var 

    var c = 10;
    let d = 11; 
    console.log(b); 
}

console.log(d); // undefined 
console.log(c); 

console.log(b); 
const a_const = 5; 


// end of script.js 


// Note : All Quizzes from Articles 
// Example


// ES6 onwards : let and const



// let 
// like var but with block scope!  
// Example


var a = 3; // Global scope : a, global.a 

function something(name){

    var b = 7;  // Local scope : b 

    console.log(a);
    console.log(b);

    var b = 8; 


    if(b > 5)
        {

            let c = 10; // No Block Scope till ES5 
            c = 11; 

            console.log(c); //10 
         }

    console.log(c);  // undefined 

}

console.log(b); 






// const 
//let/var 
const a = 10; 


// does const follow block scope?


// var : declare identifiers, you can re-assign, but no block scope
// let : declare identifers, you can re-assign, with block scope
// const : declare identifers, you can't re-assign them, block scope?





// identifier can't be reassigned/updated!

// catch - don't confuse with immutable values 
// const and objects 


const a = { name : "Ankit", age: 28};
// you can't reassign a const identifier
// value on the RHS is immutable - NO 
// you can modify objects on the RHS by modifying their properties
// React 

a = {};
a = {name : "Ankit", age: 29};


a.name = "Coding";
a.age = 29; 

// Object.freeze : to freeze the objects 
// const, var, let : declaring identifiers
// not to be used within a string literal 


if(true){

    let d = 5;
    const p = 10; 
}

console.log(d); // 5 
console.log(p); 

// IIFEs (iffy)

// Immediately Invoked Function Expression


// Functions Recap : Declaration, Expression 

function something(name){ do something}; 

var a = function(name) { do something};  //  Expression 


// Assigning a function to a var : Expression

// JS Expressions
// An expression is any valid unit of code that resolves to a value.
// Two types : Assignment, No Assignment 

// JS Expression 1  : Returns a value, no side effects
2+3; 
true;
"string"; 
(2+3); 

// JS Expression 2 : Returns a value, side effects 
var a = (2+3); // Returns 5; but also assigns a = 5 



// () -> Resolves to a value 

// function expressions
// Type 2 
 var a = function(name) { console.log(name);}

 // Type 1 : Function Expression 

 ( function() {console.log("Coding"); } )    (); 
 // IIFE 



 ( function(){ 
    var a = 10;
    console.log(a+5);
    // More Block Of Code  
 }) (); 


var b = 15; 

( function(param, param2){ 
 var a = 10;
 console.log(a+param);
 // Block Of Code 
  }) (b, 7 ); 

  // Advantage Of IIFE : Running A Block Of Code Once With Some Data Privacy

  IIFE 

   ( function(){ 
    var a = 10;
    console.log(a+5);
    // More Block Of Code  
 }) (); 

  // Alternative : Declare a named function and then call it exactly once 

function named_function(){ 
    var a = 10; 
    console.log(a+5); 
}

named_function(); 


// Anything in () 

// Function in context of expression is a function expression

// FE returns a function





// Hands -On : define and invoke an IIFE : that inputs two numbers n1, n2;
// and then adds them with a secret code within the funcion
// return n1+n2+secret; 




// Immediately invoke (Anonymous)



// Benefit : Execute Code With Data Privacy
// Example








// Alternative : Just Declare A Function With A Name And Invoke It?
// a) Unnecessary addition to global namespace

// b) Intention of code : self documented

// c) Named and not self-documented so invoked more than once maybe







// Passing arguments to IIFEs



// Strict Mode 
// HW: https://docs.microsoft.com/en-us/scripting/javascript/advanced/strict-mode-javascript
// 5 Questions 

"use strict;"
// Top Of File
// Within A Function 

// Strict Mode 

function() {
    "use strict";
    a = 5;  // Not fine 
}


function some() {
    a = 5; 
    console.log(5);
}





// Scope, Inner, Outer 

function outer(){

    var name = "OuterName"; // Local Scope Of Outer

    function inner(){ // Lexical Scope 
        console.log(name); // OuterName 
    }

    inner(); 

}

outer(); 

console.log(name); //  Undefined 



// Closures : In What All Languages 
// Java, C++; 


// Returning inner


function outer(){

    var name = "OuterName";
    function inner(){
        console.log(name);
    }
    return inner;
}

var a_func = outer(); 
// a_func identifies a closure
// closure = function + environment 
// a_func = [function inner() { ...name{ }}]  + [name=OuterName; ]
// Even though outer has died out 
a_func = run inner function with environment as [name = OuterName ]
a_func = function inner(){ console.log(name);}  & [name = "OuterName"; ]
a_func(); 








// Even after outer has stopped executing, "name" is accessible




// In other languages : die out




// In JS : functions form closures




// Closures = Function + Environment in which function was declared 
// Environment -> any local variables in scope when closure was generated




// a_func = inner (the definition) + local variables [name = "OuterName"]






function outer(param){

    var name = param; 
    // Local Variable Whose Value Is Decided At Runtime Using param 

    function inner(){
        console.log(name);
    }
    return inner ;   // returning the function inner
    return inner(); // return undefined // null 

}


var a1 = outer("foo");

a1 = closure = function definition + environment 
a1 = function inner(){cl(name);} + [name: "foo"] 

var a2 = outer("bar");
a2 = closure = function inner(){cl(name);} + [name: "bar"]

a1(); function inner(){cl(name);} + [name: "foo"] //foo
a2(): function inner(){cl(name);} + [name: "bar"] // bar 


// How do you return 2 functions 
// Use Of Closures
// How do closures look in memory - for later


// Strict Mode 

// Function Factory : A Factory to Create Functions Of Similar Type




function plusNFactory(N){
    function plusN(number){
        return (number+N);
    } 
    return plusN; 
}

var plus5 = plusNFactory(5); 
// plus5 = closure = function + environment
// plus5 = function plusN(number) { return number + N } + [N = 5]
// plus5(3) = function plusN(3) { return 3 + 5 } // 8

var plus10 = plusNFactory(10); 


plus5(7) 



// One Powerful Use Of Closures - 
// Use the outer function as a function factory for creating related functions

// Eg. makeAdder



function makeAdder(add){

    function adder(number) {
        return (add+number);
    }
    return adder; 
}

adder5 = makeAdder(5);    // adder5 = adder +  [add = 5]
adder10 = makeAdder(10);  // adder10 = adder + [add=10]

adder5(3); // 8 
adder10(4); // 14 

// Function Factory : makeAdder : factory for "adderN" functions
// Module Pattern 




// Hands-On : Create a Function Factory makeGreetFactory for 
"greetLanguage" functions 


//1. greetSpanish("Coding Blocks") ->  prints "Hola Coding Blocks"
//2. greetEnglish("Coding Blocks") ->  prints "Hello Coding Blocks"


function makeGreetFactory(salutation){
    function greetLanguage(string_param){
        console.log(saluation + " " + string_param );
    }
    return greetLanguage;
}

var greetSpanish = makeGreetFactory("Hola");
greetSpanish("Coding Blocks")  // Hola Coding Blocks

var greetEnglish = makeGreetFactory("Hello");



// Todo : Review Closures in Another Class





// Wrapping
// Wrap’ a primitive data type (eg. string) with an object (String)
// Augmenting “primitive data type” with "helper methods" 


var a = "a_string"; // typeof a; // string 


var b = new String("a_string"); 


// TODO : Hoisting 


// HW : Review String on MDN 
// Picture out var b = new String(thing) : analogy from Person
// Todo : How to destroy 


// HW: Read bind on MDN 


// Two ways to create strings 
// primitive type string
// String objects 





// Automatic Coercion (from str to String)
// str.toUpperCase(); 






// str to String 
// String to str : valueOf() 

// String is global 



// String : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var s = "Coding";
s.length;
s.toUpperCase();
s.toLowerCase();
s.concat();
s.trim(); //whitespace 
s.charAt(2); 


// Similarly for Number, Boolean


// HW : Check Out 
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// Global Objects [objects in global scope]
// eg. String, Number, Boolean
// Array, Date, Math
// Complete List : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects





// Arrays
// Array - list-like objects
// Create, Access
// Push, Pop
// Shift, Unshift
// Find Index Of
// Remove @ Index, Remove From Index


// Hands-On : Array of 5 strings 
// Return an array of these 5 strings  capitalised (map function )


var a = ["a", "b", "c"];

a.map ( function(item) { return item.toUpperCase(); })

// This won't work
a.map(String.prototype.toUpperCase);

//toUpperCase doesn't expect a parameter
String.prototype.toUpperCase("a");

// It expects an object to be bound to it using "this"
"a".toUpperCase(); 





var a = new Date(); // Date Instance representing now

var a = new Date(N = 1000); 
// Date Instance representing 1000 milliseconds after Epoch Time
// Epoch Time : 1 Jan 1970; 00:00 UTC 





// Date  - Highly Useful! 
// Calling it with new
// Creates a Data Instance to represent single moment in time
// Date objects based on time value - number of milliseconds from 1 January 1970, UTC
// Hands-On  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date

// Hands- On : Try It Out
// Time taken to execute a function






// Math 
// Not a function constructor
// Contains mathematical functions and constants
// Numerical values are passed as arguments to Maths methods 
// (vs String methods )







// window (global object in Browsers)
// Global Objects discussed above 





// window and document (or window.document)
// document - to interact with web page
// window - to interact with the window containing the web page
// window.history
// More https://developer.mozilla.org/en/docs/Web/API/Window






// So from within JavaScript, you can interact with the user's browser window




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


