var privVar = 10;

var privFun = function(){console.log(privVar);};


var pubVar = 20;

var pubFun = function(){console.log("public function");}



module.exports = {
    pubVar : pubVar,
    pubFun : pubFun,
    pubFun2 : privFun}