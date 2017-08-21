this=module.exports = exports


function Greet4(){

    this.greeting = "Hello World From Greet4";
    this.greet = function (){
        console.log(this.greeting);
    }
}

module.exports = new Greet4();


// module.exports = new object of type Greet4



