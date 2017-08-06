function add(p, q) {
  // if (typeof a !== 'number') {
  //   console.error('Please use numbers')
  // }
  return p + q;
}

var myfun = function () {
  console.log('yo hi');
}

var p = add (1,2)
//var q = add (false, true)

function lowFun () {
  console.log('some thing i have to say');
}

function higherOrderFun (a) {
  if (typeof a !== 'function') {
    throw new Error('we need a function')
  }
  a()
}

function greeterGen () {

  function greeter() {
    console.log('Hello There !');
  }

  return greeter;

}


/*
greeterGen()
function greeter()
myfun = greeterGen()
function greeter()
myfun()
Hello There !  functions.js:29:5
undefined
greeterGen()()
Hello There !  functions.js:29:5
undefined
*/
