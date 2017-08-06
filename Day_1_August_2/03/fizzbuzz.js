var list = document.getElementById('list')

var startTime = (new Date()).getTime()
var listString = '';
for (var i = 1; i <= 1000; i++) {
  var value = ''
  if (i % 3 == 0) {
    value += 'fizz'
  }
  if (i % 5 == 0) {
    value += 'buzz'
  }
  if (value == '') {
    value += i
  }
  listString += '<li>' + value + '</li>'
}
list.innerHTML = listString
var endTime = (new Date()).getTime()
console.log(endTime - startTime)
