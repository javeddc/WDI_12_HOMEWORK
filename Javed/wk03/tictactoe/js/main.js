var dimension = 3;
var winCount = 3;
var grid = document.getElementById('grid');
var player1img = document.getElementById('player1img');
var player2img = document.getElementById('player2img');
var alerts = document.getElementById('alerts');
var resetBtn = document.getElementById('reset');
var newCharsBtn = document.getElementById('newChars')
var p1score = document.getElementById('player1score');
var p2score = document.getElementById('player2score');



var teep = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
]




var gameInit = function() {
  var board = []
  var players = []
  var characters = [1, 2, 3, 4, 5, 6]
  var currentPlayerID = players[0]
  var turnID = 0
  var winningPlayer = 0;
  var player1score = 0;
  var player2score = 0;
  var newGame = {
    drawGrid: function() {
      for (var i = 0; i < dimension; i++) {
        var newRow = document.createElement('div');
        newRow.classList.add('gridRow');
        grid.appendChild(newRow)
        for (var j = 0; j < dimension; j++) {
          var newCell = document.createElement('div');
          newCell.classList.add('gridCell');
          newCell.id = i + '-' + j;

          var newImg = document.createElement('img');
          newImg.src = './img/0.png';
          newImg.classList.add('cellImg')

          if (j === 0) {
            newCell.classList.add('x-left')
          } else if (j < dimension - 1) {
            newCell.classList.add('x-center')
          } else if (j === dimension - 1) {
            newCell.classList.add('x-right')
          }

          if (i === 0) {
            newCell.classList.add('y-top')
          } else if (i < dimension - 1) {
            newCell.classList.add('y-center')
          } else if (i === dimension - 1) {
            newCell.classList.add('y-bottom')
          }
          newRow.appendChild(newCell);
          newCell.appendChild(newImg);
        }
      }
    },
    clearBoard: function() {
      board = [];
      for (var i = 0; i < dimension; i++) {
        board.push([])
        for (var j = 0; j < dimension; j++) {
          board[i].push(0)
        }
      }
    },
    getBoard: function() {
      return board
    },
    newChars: function() {
      players = [];
      player1score = 0;
      player2score = 0;
      p1score.textContent = player1score;
      p2score.textContent = player2score;
      p1score.classList.remove('winnerText');
      p2score.classList.remove('winnerText');
      p1score.classList.remove('tieText');
      p2score.classList.remove('tieText');
      game.initialise();
      game.resetGame();
      alerts.classList.remove('winnerText')
    },
    initialise: function() {
      game.clearBoard();
      players.push(characters[Math.floor(Math.random() * characters.length)]);
      players.push(characters[Math.floor(Math.random() * characters.length)]);
      while (players[0] === players[1]) {
        players[1] = characters[Math.floor(Math.random() * characters.length)]
      }
      currentPlayerID = players[0];
      player1img.src = './img/' + players[0] + '.png';
      player2img.src = './img/' + players[1] + '.png';
      // player1img.classList.remove('activePlayer');
      // player2img.classList.remove('activePlayer');
      player1img.classList.add('activePlayer');
      player2img.classList.remove('activePlayer');
      console.log(players);
    },
    click: function(clicked) {
      alerts.style.visibility = 'hidden';
      newCharsBtn.style.visibility = 'hidden';
      console.log(clicked.id);
      var xVal = clicked.parentElement.id.charAt(0);
      var yVal = clicked.parentElement.id.charAt(2);
      console.log(xVal);
      console.log(yVal);

      if (board[xVal][yVal] === 0) {
        board[xVal][yVal] = currentPlayerID;
        clicked.src = './img/' + currentPlayerID + '.png';
        game.checkWin();
        game.checkTie(board);
        game.nextTurn();
      }
    },
    nextTurn: function() {
      turnID++;
      currentPlayerID = players[(turnID % players.length)];
      player1img.classList.toggle('activePlayer');
      player2img.classList.toggle('activePlayer');
    },
    checkTie: function(array) {
      var zeroCount = 0;
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[0].length; j++) {
          if (array[i][j] === 0) {
            zeroCount++;
          }
        }
      }
      if (zeroCount === 0) {
        game.tie();
        return true
      } else {
        return false
      }
    },
    checkWin: function() {
        var testArray = [];
        // check rows
        for (var i = 0; i < dimension; i++) {
          testArray = board[i];
          if (game.checkArray(testArray)) {
            game.winner();
          }
          testArray = []
        }
        // check columns
        testArray = []
        for (var i = 0; i < dimension; i++) {
          for (var j = 0; j < dimension; j++) {
            testArray.push(board[j][i]);
          }
          if (game.checkArray(testArray)) {
            game.winner();
          }
          testArray = []
        }
        // check diagonals
        // for (var i = 0; i < dimension; i++) {
        //   testArray.push(board[i][i]);
        // }
        // if (game.checkArray(testArray)) {
        //   game.winner();
        // }
        // testArray = []
        //
        // for (var i = 0; i < dimension; i++) {
        //   testArray.push(board[dimension - i - 1][i]);
        // }
        // if (game.checkArray(testArray)) {
        //   game.winner();
        // }
        // testArray = []
        // check diagonals 2

        for (var i = 0; i < dimension; i++) {
          testArray = []
          for (var j = 0; j <= i; j++) {
            var x = i - j;
            testArray.push(board[x][j]);
            // console.log(testArray);
            if(game.checkArray(testArray)) {game.winner()}
          }
          console.log(testArray);
        }
        for (var i = dimension - 2; i >= 0; i--) {
          testArray = []
          for (var j = 0; j <= i; j++) {
            var x = i - j;
            testArray.push(board[dimension - j - 1][dimension - x - 1]);
            // console.log(testArray);
            if(game.checkArray(testArray)) {game.winner()}
          }
          console.log(testArray);
        }
        for (var i = dimension - 1; i >= 0; i--) {
          testArray = []
          for (var j = 0; j < dimension - i; j++) {
            testArray.push(board[i + j][j]);
            // console.log(testArray);
            if(game.checkArray(testArray)) {game.winner()}
          }
          console.log(testArray);
        }
        for (var i = dimension - 2; i >= 0; i--) {
          testArray = []
          for (var j = i; j >= 0; j--) {
            x = i-j;
            console.log(x);
            testArray.push(board[x][dimension - j -1]);
            if(game.checkArray(testArray)) {game.winner()}
          }
          console.log(testArray);
        }

      }

      ,
    checkdiags: function(board) {
      // var teep = [['a','b','c'],['d','e','f'],['g','h','i']]

      for (var i = 0; i < dimension; i++) {
        testArray = []
        for (var j = 0; j <= i; j++) {
          var x = i - j;
          testArray.push(board[x][j]);
          // console.log(testArray);
          // if(game.checkArray(testArray)) {game.winner()}
        }
        console.log(testArray);
      }
      for (var i = dimension - 2; i >= 0; i--) {
        testArray = []
        for (var j = 0; j <= i; j++) {
          var x = i - j;
          testArray.push(board[dimension - j - 1][dimension - x - 1]);
          // console.log(testArray);
          // if(game.checkArray(testArray)) {game.winner()}
        }
        console.log(testArray);
      }
      for (var i = dimension - 1; i >= 0; i--) {
        testArray = []
        for (var j = 0; j < dimension - i; j++) {
          testArray.push(board[i + j][j]);
          // console.log(testArray);
          // if(game.checkArray(testArray)) {game.winner()}
        }
        console.log(testArray);
      }
      for (var i = dimension - 2; i >= 0; i--) {
        testArray = []
        for (var j = i; j >= 0; j--) {
          x = i-j;
          console.log(x);
          testArray.push(board[x][dimension - j -1]);
        }
        console.log(testArray);
      }
      // [['a','b','c','d'],
      // ['e','f','g','h'],
      // ['i','j','k','l'],
      // ['m','n','o','p']]

    },
    winner: function() {
      alerts.textContent = "WE HAVE A WINNER";
      alerts.classList.toggle('winnerText');
      player1img.classList.remove('activePlayer');
      player2img.classList.remove('activePlayer');
      if (players[0] === winningPlayer) {
        player1img.classList.toggle('winFrame');
      }
      if (players[1] === winningPlayer) {
        player2img.classList.toggle('winFrame');
      }
      alerts.style.visibility = 'visible';
      resetBtn.style.visibility = 'visible';
      newCharsBtn.style.visibility = 'visible';
      if (players[0] === winningPlayer) {
        player1score++;
        p1score.textContent = player1score;

      }
      if (players[1] === winningPlayer) {
        player2score++;
        p2score.textContent = player2score;
      }
      if (player1score > player2score) {
        p1score.classList.add('winnerText');
        p2score.classList.remove('winnerText');
        p1score.classList.remove('tieText');
        p2score.classList.remove('tieText');
      }
      if (player1score < player2score) {
        p1score.classList.remove('winnerText');
        p2score.classList.add('winnerText');
        p1score.classList.remove('tieText');
        p2score.classList.remove('tieText');
      }
      if ((player1score === player2score) && (player1score > 0)) {
        p1score.classList.add('tieText');
        p2score.classList.add('tieText');
        p1score.classList.remove('winnerText');
        p2score.classList.remove('winnerText');
      }
    },
    tie: function() {
      alerts.textContent = "NODOBY WINS!";
      alerts.classList.toggle('tieText');
      player1img.classList.remove('activePlayer');
      player2img.classList.remove('activePlayer');
      alerts.style.visibility = 'visible';
      resetBtn.style.visibility = 'visible';
      newCharsBtn.style.visibility = 'visible';
    },
    resetGame: function() {
      // location.reload();
      while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
      game.drawGrid();
      game.clearBoard();
      alerts.textContent = "Pick a square to start";
      alerts.classList.toggle('winnerText');
      player1img.classList.remove('winFrame');
      player2img.classList.remove('winFrame');
      player1img.classList.add('activePlayer');
      player2img.classList.remove('activePlayer');
      currentPlayerID = players[0];
      turnID = 0;
      resetBtn.style.visibility = 'hidden';
      newCharsBtn.style.visibility = 'visible';
    },
    checkArray: function(array) {
      var zeroCount = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
          zeroCount++
        }
      }
      if (zeroCount > Math.abs(dimension - winCount)) {
        return false
      }

      var count = []
      for (var i = 0; i < array.length - 1; i++) {
        if ((array[i] != 0) && (array[i] === array[i + 1])) {
          count.push(1);
        } else {
          count.push(0)
        }
      }

      var countNum = 0

      for (var i = 0; i < count.length; i++) {
        if ((count[i] != 0) && (count[i] === count[i + 1])) {
          countNum++;
          winningPlayer = array[i];
        }

      }

      if (countNum >= winCount - 2) {
        if (dimension === winCount) {
          console.log('beep');
          return true
        } else if (winCount < dimension) {
          if (count[0] === 0 || count[dimension - 2] === 0) {
            console.log(count);
            console.log('boop');
            return true
          }
        }
      } else {
        return false
      }
    }
  }
  return newGame
}

var pickCell = function() {
  game.click(event.target);
}

var game = gameInit();

game.drawGrid();
game.initialise();

grid.addEventListener('click', function() {
  if (event.target.tagName === 'IMG') {
    pickCell(event);
  }
})
resetBtn.addEventListener('click', game.resetGame)
newCharsBtn.addEventListener('click', game.newChars)
