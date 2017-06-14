var lettersGuessedDisplay = document.getElementById('lettersGuessed');
var guessesRemainingDisplay = document.getElementById('guessesRemaining');
var totalScoreDisplay = document.getElementById('totalScore');
var letterArea = document.getElementById('letterArea');
var letterInput = document.getElementById('letterInput');
var wordInput = document.getElementById('wordGuess');
var wordGuessBtn = document.getElementById('wordGuessBtn');
var newWordBtn = document.getElementById('newWord')

var makePlayer = function() {
  var totalScore = 0;
  var guessesThisTurn = 0;
  var guessesRemaining;
  var newPlayer = {
    totalScore: function() {
      return totalScore
    },
    totalScoreAdd: function(number) {
      totalScore += number;
    },
    initTurn: function(currentWordLength) {
      guessesRemaining = (currentWordLength - 2);
    },
    guessesRemaining: function() {
      return guessesRemaining;
    },
    guessSubtract: function() {
      guessesRemaining--;
    }

  }
  return newPlayer
}

var makeWord = function() {
  var wordList = ['tomato', 'potato', 'eggplant', 'beetroot', 'spinach', 'radish', 'turnip', 'carrot', 'pumpkin', 'cucumber'];
  var word = wordList[Math.floor(Math.random() * wordList.length)];
  var newWord = {
    getLength: function() {
      return word.length;
    },
    guessWord: function(guess) {
      if (guess === word) {
        return true
      } else {
        return false
      }
    },
    getWord: function() {
      return word;
    },
    checkLetter: function(letter) {
      return word.includes(letter.toLowerCase())
    },
    getLetterIndexes: function(letter) {
      var indexes = [];
      for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          indexes.push(i)
        }
      }
      return indexes
    }
  }
  return newWord;
}

var renderWord = function(word) {
  // get the word length
  // for i = word length do the following
  // create an h1 element
  // set the contents of the h1 element to be an underscore
  // append the h1 to the doc
  for (var i = 0; i < currentWord.getLength(); i++) {
    var newLetter = document.createElement('h2');
    newLetter.textContent = '_';
    newLetter.classList.add('displayLetter');
    letterArea.appendChild(newLetter);
  }

}

var wordGuess = function() {
  if (currentWord.guessWord(wordInput.value.toLowerCase())) {
    clearRender();
    var correctWord = document.createElement('h2');
    correctWord.textContent = wordInput.value.toUpperCase();
    correctWord.classList.add('correct');
    letterArea.appendChild(correctWord);
    newWordBtn.style.visibility = 'visible';
  } else {
    player.guessSubtract();
    updateGuesses();
    var incorrectWord = document.createElement('h3');
    incorrectWord.textContent = wordInput.value.toUpperCase();
    document.getElementById('incorrectGuesses').appendChild(incorrectWord);
  }
}

var renderLetter = function(letter) {
  console.log(letter);
  var letterIndexes = currentWord.getLetterIndexes(letter.toLowerCase());
  for (var i = 0; i < currentWord.getLength(); i++) {
    if (letterIndexes.includes(i)) {
      letterArea.children[i].textContent = letter.toUpperCase();
    }
  }
}

var clearRender = function() {
  while (letterArea.hasChildNodes()) {
    letterArea.removeChild(letterArea.firstChild);
  }
}

var updateGuesses = function() {
  guessesRemainingDisplay.textContent = player.guessesRemaining();
}

var newWord = function() {
  player.totalScoreAdd(player.guessesRemaining());
  totalScoreDisplay.textContent = player.totalScore();
  clearRender();
  currentWord = makeWord();
  renderWord(currentWord);
  player.initTurn(currentWord.getLength())
  updateGuesses();
  lettersGuessedDisplay.textContent = ''
  while (document.getElementById('incorrectGuesses').hasChildNodes()) {
    document.getElementById('incorrectGuesses').removeChild(document.getElementById('incorrectGuesses').firstChild);
  }

}

// on load:
// create a new player
var player = makePlayer();
// create a new word
var currentWord = makeWord();
// initialise player score
player.initTurn(currentWord.getLength())
// render the word
renderWord(currentWord);
// show remaining guesses this turn
updateGuesses()
// create event listeners
letterInput.addEventListener('click', function(event) {
  if (currentWord.checkLetter(event.target.textContent)) {
    renderLetter(event.target.textContent);
  } else {
    lettersGuessedDisplay.textContent += event.target.textContent;
  };
  player.guessSubtract();
  updateGuesses();
})
wordGuessBtn.addEventListener('click', wordGuess)

newWordBtn.addEventListener('click', newWord)
