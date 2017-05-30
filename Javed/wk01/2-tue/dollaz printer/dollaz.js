var lines = Number(prompt('how much dollaz$$:'));

for (var i = 1; i < lines; i++) {
  var currentString = "";
  for (var k = lines - i; k > 0; k--) {
    currentString = currentString + ' ';
  }
  for (j = (2 * i) - 1; j > 0; j--) {
    currentString = currentString + '$';
  }
  console.log(currentString);
}
