var listItems = document.querySelectorAll('li');
var inputBox = document.getElementById('input');
var btn = document.getElementById('add');
var list = document.getElementById('todolist');

var addItem = function() {
  console.log(event);
  var newItem = document.createElement('li');
  newItem.textContent = inputBox.value;
  // newItem.addEventListener('click', markAsDone);
  if (newItem.textContent.length > 15) {
    newItem.classList.add('long');
  }
  // debugger
  list.appendChild(newItem);
  inputBox.value = '';
}

list.addEventListener('click', function() {
  // debugger
  if (event.target.tagName === 'LI') {
    event.target.classList.add('done');
  }
});

inputBox.addEventListener('keypress', function() {
  // debugger
  if (event.charCode === 13) {
    addItem();
  }
});

btn.addEventListener('click', addItem)





// attach event handling to list parent (ul)
// list.addEventListener('click', function() {
//   markAsDone(event);
// })

// var markAsDone = function(event) {
//   // debugger
//   if (event.target.tagName === 'LI') {
//     event.target.className = 'done';
//   }
//
// }
