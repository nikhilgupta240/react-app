var arr = [1,2,3,4]

console.log(arr.join('-'));
arr.reverse()
console.log(arr);

function numSort(a, b) {
  return Math.abs(a) - Math.abs(b)
}

var a2 = [1,7, -20, 11,-3,0,4]
a2.sort(numSort)
console.log(a2);


/*
Array [ 4, 3, 2, 1 ]  arrays.js:5:1
Array [ 0, 1, -3, 4, 7, 11, -20 ]  arrays.js:13:1
a2.splice(4,2,     3,4,5)
Array [ 7, 11 ]
a2
Array [ 0, 1, -3, 4, 3, 4, 5, -20 ]
