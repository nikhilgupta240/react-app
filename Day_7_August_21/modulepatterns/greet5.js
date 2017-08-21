function Greet(){

    this.greeting = "Hello World From Greet4";
    this.greet = function (){
        console.log(this.greeting);
    }
}

module.exports = Greet;


// module.exports = new object of type Greet4



