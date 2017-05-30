//  Working Past/Future/Present Year Detector
var year = Number(prompt('enter a year:'))
var today = new Date();
var currentYear = today.getFullYear();

if (year === currentYear) {
  console.log('present 4 u');
} else if (year < currentYear) {
  console.log('blast from le past');
} else if (year > currentYear) {
  console.log('spooky future');
}


// // Working 2015 Past/Present/Future Detector
//
// var year = Number(prompt('enter a year:'))
//
// if (year === 2015) {
//   console.log('present 4 u');
// } else if (year < 2015) {
//   console.log('blast from le past');
// } else if (year > 2015) {
//   console.log('spooky future');
// }
