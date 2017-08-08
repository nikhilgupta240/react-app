// Function 

// Function Declaration

function printSomething(something){console.log(something);}

// Function Expression
var printSomething = function(something){console.log(something);}

// Anonymous Functions


// Functions - First Class Citizens 

// Assign to identifiers



// Closures  - next class (returned functions)

// Scope Part I : if you define a variable/object/function where is it accessible


// Global Scope - variable defined outside a function 
// Local Scope - variable defined within a function

// Block Scope - No : Not Until ES5 (version of JS)
// ES6/2015 onwards : you have block scope in JS 


// EsS5 (2009) and ES6(2015) - most popular 




// global object 
// global variables - all are properties of the global object 

// In browsers : global = window

// var a = 3;
// console.log(a);
// console.log(window.a); // In Browsers 



// this : special keyword
// Different from "classical languages" 


// Other languages
// Methods of a class can access "this"
// "this" points to object 

// "this" depends on context

// No Context  - When used outside of a function
// Refers to global object
// Within a function   [Caveat : strict mode : later]
// Function is called without any context : this -> global object

// Temporarily supply a context 
function - this - object (temporary) : use apply(object) OR call(object)
// Permanently apply a context
function - this - object (permanent) : use bind(object)




// When called as an object method




// When an object method is called out of the object context
// Come back to this in React 




// Objects


// Creating new objects

var s1 = {fn : "John", ln: "Doe"}
var s2 = {fn: "Ankit", ln: "Malik"}
var s3 = {fn : "Amit", ln : "Sharma"}


// Using functions and this 

s1 = student_creator("John", "Doe") 

function student_creator(f, l){
    var new_obj = {};
    new_obj.fn = f;
    new_obj.ln = l;
    return new_obj;
}


var s1 = student_creator.call({}, "John", "Doe");

function student_creator(f,l){
    this.fn = f;
    this.ln = l;
    return this; 
}


// Creating similar objects : 4 persons ... 

// Let's use functions to create similar objects


// Function Constructor : A function which will be used to create new objects
// using the new keyword
// Just another function 
//
function Student(f,l){
    this.fn = f;
    this.ln = l;
}

var s1 = new Student("John", "Doe");

{} 


// What new does 
1. Creates an empty object new_object = {}
2. Calls the constructor with the parameters and sets this = new_object
3. ONE MORE THING // Later  
4. returns new_object 



// Hands-On
// Create three person objects p1, p2,p3 
// Use a FC : Person and the new keyword
// p1 : {name : Ankit, age : 28, height : 178 }
// ~ p2, p3 


this -> window/ global 
function Person(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;

}


var p1 = new Person("Ankit", 28, 178);


// JavaScript has something similar built-in already! 

// var x = new Object(); 

Object : FC that's already defined in JS 

// typeof


// new + Function : get some functionality for free
// Only set data members in the function and then use with "new"



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object




// What "new" does?

// A Function Constructor is just another function .... capitalised


// Hands-On
// Person : name, age 

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){console.log(this.name);}

var p1 = new Student("John", 20);


p1 = { name : "Ankit",
        age : 28;
        greet : function(){ console.log(this.name);}
    }


// Person objects
// They share a 'parent'/Prototype
// Ideally I would store all the shared methods in that Prototype 

// new keyword + a property called 'prototype' (! The English Word Prototype)

// __proto__, Protoype, keyword prototype (which doesnt point to the English Prototype 
)


// Simulating "class like behaviour" in JavaScript
// Objects From Templates called Function Constructors
// Data Members : go in the definition of FCs
// Methods : added to FC.prototype 
// new keyword : all of these objects have the same prototype FC.prototype 

// new keyword 

1. Creates an empty object new_object = {}
2. Calls the constructor with the parameters and sets this = new_object
3. It sets the Prototype of new_object to be Person.prototype  
4. returns new_object 











// Function Constructor : Template to create new objects
// Classical Language : Analogy : Classes

// "Simulated Classes"










// Data Members in Function Constructor

// Objects with Methods? Eg. greet() 



// Referencing the same method - memory usage

// Where to put the method ?  - to avoid memory waste 




// JavaScript has this feature built in!
// prototype property + new keyword 






// Data Members

// Methods

// prototype, __proto__, Prototype






// Hands-On


p1, p2, p3 : name, age, height 
methods : 
printAge();
printHeight();
printName(); 

FCs + new => 3 objects 


function Person(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height; 
}


Person.prototype.printAge = function(){console.log(this.age);}
Person.prototype.printHeight = function(){console.log(this.height);}
Person.prototype.printName = function(){console.log(this.name);}


var p1 = new Person("Ankit", 28, 178);
var p2 = new Person("Amit", 30, 179);





// Issues , Anti Patterns

p1.__proto__ = Person.prototype // Not needed, comes with new  
// Global 
function greet() { console.log(this.name)}; 

p1.greet();  // This wont work : Review why 

greet()
window.greet();

greet.call(p1);  // This will work! 




// ES5 "Simulated Classes" Summary





// There are no classes in JavaScript
// You can simulate class-object like functionality in JavaScript 
// with new, FCs and prototypal delegation







// However, there is a "class" keyword in ES6! 

// Read this link 
// https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/




// ES6 

// ECMAScript
// Specification 
// JavaScript : most popular ECMAScript Language
// JavaScript = ECMAScript  + More Features

// Major Version of ES
// ES5 - 2009 - Most modern browsers understand it 
// JavaScript upto ES5 



// ES6 
// 2015
// New features
// Few browsers undestand JavaScript with ES6 features

// DO READ: https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/

function Person(name, age){
    this.name = name;
    this.age = age;

}

Person.prototype.greet = function(){}
Person.prototype.printAll = function(){}

var p1 = new Person("John", 30);

// ES6 : class keyword 

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){ do something}; 
    printAll() { do something};

}

var p2 = new Person("John", 30); 

p2.greet(); // 
var gr = p2.greet; 
gr(); 


// ES6 : class keyword
// Syntactic Sugar - What's that?





// Converting ES5 style "simulated classes" to ES6 "syntactic sugar" classes (class keyword)


// Hands-On

function Person(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height; 
}


Person.prototype.printAge = function(){console.log(this.age);}
Person.prototype.printHeight = function(){console.log(this.height);}
Person.prototype.printName = function(){console.log(this.name);}


var p1 = new Person("Ankit", 28, 178);
var p2 = new Person("Amit", 30, 179);


class Person{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    printAge(){console.log(this.age); }
    printName(){console.log(this.name); }
    printHeight(){console.log(this.height); }
}

var p1 = new Person("Ankit", 28, 178);
var p2 = new Person("Amit", 30, 179);








// Reminder
// ES6 classes are only "syntactic sugar"
// They "look" like classes from "classical languages"
// But under the hood functionality - is still - ES5 "simulated classes"
// So when debugging - think prototypal delegation, new, FCs 






// Only Few Browsers understand ES6
// Great for devs, bad for browsers
// Solution : Transpilation
// Transpilation vs Compilation
// Hands-On http://babeljs.io/repl/

