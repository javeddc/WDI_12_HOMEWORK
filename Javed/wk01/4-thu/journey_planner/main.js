var lines = [
  ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'],
  ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'],
  ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'],
  ['parliament', 'richmond', 'south yarra', 'caulfield', 'moorabbin', 'mordialloc', 'frankston']
]
var lineNames = ['alamein', 'glen waverley', 'sandringham', 'frankston']
var journey = [];
var firstSegment = [];
var secondSegment = [];
var singleLine;
var firstLine;
var secondLine;
var sameLine = false

// input origin and destination with verification
var origAsked = prompt('Please enter your origin station:').toLowerCase()
while (findLineIndex(origAsked) === undefined) {
  origAsked = prompt('That station wasn\'t found. Please try again:').toLowerCase()
}
var destAsked = prompt('Please enter your destination station:').toLowerCase()
while (findLineIndex(destAsked) === undefined) {
  destAsked = prompt('That station wasn\'t found. Please try again:').toLowerCase()
}

// check if inputs are the same
if (origAsked === destAsked) {
  console.log('Wormhole opened – you have already arrived.');
}

// returns the line for a specified station
function findLineIndex(station) {
  for (index = 0; index < lines.length; index++) {
    if (lines[index].includes(station)) {
      return index
    }
  }
}

// makes an array with the stops between specified stations on a specified line
function makeSegment(station1, station2, anIndex) {
  if (lines[anIndex].indexOf(station1) < lines[anIndex].indexOf(station2)) {
    return lines[anIndex].slice(lines[anIndex].indexOf(station1), lines[anIndex].indexOf(station2) + 1)
  } else {
    return (lines[anIndex].slice(lines[anIndex].indexOf(station2), lines[anIndex].indexOf(station1) + 1)).reverse()
  }
}

// function to make initial caps
function initCaps(string) {
  return string.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};


// check if inputs are on same line
for (var index = 0; index < lines.length; index++) {
  if (lines[index].includes(origAsked) && lines[index].includes(destAsked)) {
    sameLine = true;
    singleLine = index;
  }
}

// if they are on the same line make a journey on one line, then log the journey
if (sameLine === true) {
  journey = makeSegment(origAsked, destAsked, singleLine);
  console.log('Origin: ' + initCaps(origAsked));
  console.log('Destination: ' + initCaps(destAsked));
  console.log('You will be taking the ' + initCaps(lineNames[singleLine]) + ' line.');
  console.log(initCaps(journey.join(' -----> ')));
  console.log((journey.length - 1) + ' stops total');
}

// if they are on different lines make two segments and join them, removing the double richmond, then log the journey
if (sameLine === false) {
  firstLine = findLineIndex(origAsked);
  secondLine = findLineIndex(destAsked);
  firstSegment = makeSegment(origAsked, 'richmond', firstLine);
  secondSegment = makeSegment('richmond', destAsked, secondLine);
  journey = firstSegment.concat(secondSegment);
  journey.splice(journey.indexOf('richmond'), 1)
  console.log('Origin: ' + initCaps(origAsked));
  console.log('Destination: ' + initCaps(destAsked));
  console.log('You will be taking the ' + initCaps(lineNames[firstLine]) + ' and ' +
    initCaps(lineNames[secondLine]) + ' lines. Change trains at Richmond station.');
  console.log(initCaps(journey.join(' -----> ')));
  console.log((journey.length - 1) + ' stops total');
}
