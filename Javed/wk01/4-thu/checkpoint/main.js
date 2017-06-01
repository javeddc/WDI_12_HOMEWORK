// Variables
var captain = 'Jack';
var phrase = ('Oh ' + captain + ', my ' + captain + '!');


// Conditionals
var souls = 3;
var lifeRafts = 2;
if (souls > lifeRafts) {
  console.log('SOS!');
}


// Arrays
var weekend = ['Saturday'];
weekend.push('Sunday');
weekend.unshift('Friday');
var day = weekend[1];
weekend.shift();



//  Objects
var brain = {
  energyLevel: 10
}
var energy = brain.energyLevel;
Object.defineProperty(brain, 'dream', {value: 'electric sheep'});



// Functions
var findArea = function(length, width) {
  return length * width
}
var areaExample = findArea(3, 4);
