console.log('ready looping');

var secretNumber = 42;

var correctGuess = false;

var guess = 0

while (correctGuess == false) {
  if (Number(guess) === secretNumber) {
    correctGuess = true;
    alert('You got it!');
  } else {
    guess = Number(prompt("enter a number 1-100:"));
    console.log('wrong guess')
  }
}




// while (correctGuess == false) {
//   if (Number(guess) === secretNumber) {
//     correctGuess = true;
//     alert('You got it!');
//   } else {
//     switch (correctGuess) {
//       case (Number(guess) === 0):
//         guess = number(prompt('Enter a number between 1 and 10:'));
//         break
//       case (Number(guess) < secretNumber):
//         guess = Number(prompt('It\'s higher than that, try again:'));
//         break
//     case (Number(guess) > secretNumber):
//       guess = Number(prompt('It\'s less than that, try again:'));
//     }
//   }
// }




// var count = 1;
//
// while (count <= 100) {
//   switch (true) {
//     case ((count % 3 === 0) && (count % 5 === 0)):
//       console.log('CakePudding');
//       break
//     case ((count % 3 === 0) && !(count % 5 === 0)):
//       console.log('Cake');
//       break
//     case (!(count % 3 === 0) && (count % 5 === 0)):
//       console.log('Pudding');
//       break
//     default:
//       console.log(count);
//   }
//   count++;
// }
//
//
//
// while (count <= 100) {
//   if ((count % 3 === 0) && (count % 5 === 0)) {
//     console.log('CakePudding');
//   } else if ((count % 3) === 0) {
//     console.log("Cake");
//   } else if ((count % 5) === 0) {
//     console.log("Pudding");
//   } else {
//     console.log(count);
//   }
//   count++;
// }
