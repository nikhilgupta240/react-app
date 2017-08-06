var arr = [4,2,8,1,9]
var obj = {a:1, b:2, c:3}

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
console.log('-----')
for (var i of arr) {
  console.log(i)
}
console.log('-----')
for (var i in arr) {
  console.log(i + ':' + arr[i])
}
console.log('-----')
for (var i in obj) {
  console.log(i + ':' + obj[i])
}
