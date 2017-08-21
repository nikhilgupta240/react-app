function Student(){

    this.firstname = "Ankit";
}


var s1 = new Student();


// Douglas Crockford
// new is dangerous

// FC - no

// Objects : Module Pattern

function student(){

    var a = {}
    a.firstname = "Ankit";
    return a;
}

var s1 = student();

// Module Pattern : JavaScript

// Node module patterns : what are the different patterns of node modules (exports)