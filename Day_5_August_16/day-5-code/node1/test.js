console.log("Before Start Time");

var start = new Date();
(function(){console.log("Y");})();

var end = Date.now();

console.log(end-start);
