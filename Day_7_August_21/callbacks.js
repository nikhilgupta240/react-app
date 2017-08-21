//A design pattern is a general repeatable solution to a
// commonly occurring problem in software design


Callback Pattern

// Typically a function
// a) takes an input
// b) does some processing
// c) returns some value
// d) then you accept that value and perform some other action on that value






function typical_function(input){
    var d = processing(input);  
    return d;  // output value      
}

var data = typical_function(my_input);
consequent_action(data);



// Example

function get_input(label){  
    var d = window.prompt(label);
    return d; 
}

var name = get_input("Name"); 
prettyPrint = function(name) { console.log("Hey " + name); }
simplePrint = function(name) { console.log(name);}
prettyPrint(name);     // consequent action - 1  
simplePrint(name);     // consequent action - 2 





// Callback pattern

// Functions are first class in JavaScript 
// Let's exploit that to rewrite above code in a different style

function get_input_with_consequent_action(label, consequent_action){ 
    var d = window.prompt(label);
    consequent_action(d);
}


prettyPrint = function(name) { console.log("Hey " + name); }

get_input_with_consequent_action("Name", prettyPrint);
    d = window.prompt("Name");
    prettyPrint(d);
}

function square(number){
    return number*number;
}
function half(input){
    console.log(input/2);
}
var sq = square(4);
half(sq);
square(4) > sq > half(sq)


// First Input : number : integer, float
// Second Input : Function with one parameter - that's a number 
function squareCB(number, second_action_function){
    var d = number*number;
    // second_action(d);
}


squareCB(4, half);

function half(k) { console.log(k/2);}

function half(x) { console.log(x/2);}




// forEach 
- follows the callback pattern 
- it expects a callback function
- that it "calls" within its execution



// Defining a CBP function
// some_action : passed say one parameter : number
function for_each(array, some_action){
    var i = 0;
    while(i<array.length){

        some_action(array[i]);
        i = i+1;
    }
}
// Using a CBP function

for_each([1,2,3,4], square)

var square = function(array_item){console.log(array_item*array_item)};


forEach(array, func2){
    runs func2 on each of the array items
}

map(array, func2){
    // creates a new array2
    // runs func2 on each of the array items
    // array2[i] stores return value of func2 on array(i);

}


function map_CB(array, some_operation){
    var b_array = empty array of length = array.length;
    var i = 0;
    while(i<array.length){

       b_array[i]=  some_operation(array[i]);
        i = i+1;
    }
    return b_array;
}













// Somewhere in the execution, the parameter function is executed, or "called back"


// Callback functions, HoF 
// A function that is passed as parameter to another function and is called at some point
// during execution of that "another function". 

http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

// If you write code in this style, it's called the callback pattern
// Basically 

function do_something(input, once_you_are_done_run_this_callback){};


// Hands-On 

// Have we used functions with callback before? 
// a.forEach(callback);
// a.map(callback);

function forEach(callback){
    let arr = this;
    let i=0;
    while(i<arr.length){
        callback(a[i]); 
        i++;
    }

}

// So forEach expects a callback function
// And it's going to call "the callback function" with a first parameter (item)

// So your callback function should have a first parameter (item)

var callback = function(item){
    do_something_on_item;
}




// So while writing a callback function for another function
// Know what the "another function" expects

// But before that

// Hands-On : Try to write code for a.forMap function 
// Then write a relevant callback function
// 


// Summary
// 1. Callback pattern
// 2. Functions can accept callback functions as arguments
// 3. Check out docs for what sort of callback function is expected


// We will see functions with callbacks in the http module 

// Note for later 

/*
This style of technique is very powerful with asynchronous functions
Asynchronous functions with callbacks as parameters - are at the heart of what
makes Node fast (and hence popular).

We will discuss this soon :synchronous, asynchronous, blocking, non-blocking

Familiarty with "functions with callbacks" for now. 
*/ 












