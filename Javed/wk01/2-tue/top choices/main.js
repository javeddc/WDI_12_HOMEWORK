// Working Top Choices with Ordinals

var choices = ['migos', 'pablo', 'tycho', 'newton', 'figaro', 'aphex', 'popeye', 'skrvt'];

function getOrdinal(n) {
  if (n === 1) {
    return n + "st";
  } else if (n === 2) {
    return n + "nd";
  } else if (n === 3) {
    return n + "rd";
  } else {
    return n + "th";
  }
}

for (var i = 0; i < choices.length; i++) {
  console.log('My ' + getOrdinal(i) + ' choice is teh ' + choices[i] + '.');
}
