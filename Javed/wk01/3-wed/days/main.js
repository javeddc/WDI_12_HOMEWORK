var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

dayList.unshift(dayList.pop());

console.log('the week starting sunday:');
console.log(dayList);

var splitWeek = [
  (dayList.slice(1,6)),
  [dayList[0], dayList[6]]
];

console.log('the week is split into weekdays and weekends:');
console.log(splitWeek);

splitWeek.pop()
splitWeek = splitWeek[0];

console.log('bye bye weekend:');
console.log(splitWeek);

console.log('the weekdays alphabetised:');
console.log(splitWeek.sort());
