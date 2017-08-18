function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}


function setTimeoutSynchronous(callback, time){
    pause(time * 1000);
    callback();
}



function cb() { console.log("The Set Time Out Line");}

console.log("Line 1");

setTimeoutSynchronous(cb, 5);

console.log("Line 2");



