const PI = 3.14;
const E = 2.71;

const SQRT2 = 1.414;

/*
module.exports = {
    PI: PI, //nobody should be able to change this
    E: E,
    SQUAREROOT2: SQRT2

}
 */


Object.defineProperty(module.exports, "PI", {
    value : 3.14,
    writable : false
})


