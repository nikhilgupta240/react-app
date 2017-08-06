// Request Response Cycle
// Technologies


// Literals  - to represent values in JavaScript

// Fixed values, not variables - so you provide them ‘literally’
// string literals, integer literals, floating literals, 
// boolean literals, array literals, object literals 
// Objects in JavaScript


var a = "coding";

var b = +1;

var d = true; 

var e = false;

[ 2, 3, 5, (4+2), , 4 ] 



//There are no classes in JavaScript.
//Classical Language - Java, C++ : formal notion of classes


// Creating Objects

var p1 = { 
    firstname : "Ankit", 
    lastname : "Malik", 
    age : 28 }

// Object Literals


// new Object (we will come back to 'new' on Day 3)

var p2 = new Object(); 

// Dot Notation, Array Notation


//Array Notation
//1) Keys with spaces in the dot Notation
// Properties : Adding, Accessing, Modifiying
// 2) Variables in the array notation 




// Prototype (with a capital P)


// __proto__

// Prototypal Delegation (or Prototypal Inheritance)

// Prototypal Chain


//Prototype : English concept 
//__proto__ : keyword in JavaScript
//prototype : keyword in JavaScript - doesn't refer to Prototype! 


a.prototype
 // expect it to point to a's Prototype but it doesn't! 

a.__proto__  // points to a's Prototype! 

// Hands-On 
//a,b,c
//a - properties of a student
//b - properties of a person
//c - properties of a school 



// Some Practical JS in the Browser

// index.html, script.js

// JS Events

// Add an input HTML element
// Everytime the user inputs something into that input box, console.log
// and console.log("user entered text");



// Dialog Boxes - alert, confirm, prompt

// alert : OK

// confirm : Cancel, OK

// prompt : User Input


//Hands-On 
// Add A Button labelled Enter Name
// Clicking the button invokes the Prompt to asks for the user Name
// Console.log that name to the JS Console
// IF User pressed cancel : console.log("User cancelled Prompt");


// Web Document, DOM, Web Page

// DOM : Types of Nodes : Document, Element, Node

// Lots of Methods : Document, Element

// Access - Document.getElementById , Document.getElementsByTagName
// Modify Element 
// Create New Element 
// Add Element To DOM  

// Hands-On : Using JavaScript to access a DOM element
// Combining it all : Events + Dialog Boxes + DOM 


// https://developer.mozilla.org/en/docs/Web/API/Document

// https://developer.mozilla.org/en-US/docs/Web/API/Element


















