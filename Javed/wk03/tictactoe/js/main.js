console.log('yo');


var dimension = 3;
var winCount = 3;
var grid = document.getElementById('grid');
var player1img = document.getElementById('player1img');
var player2img = document.getElementById('player2img');
var alerts = document.getElementById('alerts');
var resetBtn = document.getElementById('reset');

// make the display grid:
//for each row, make the columns
// for each column make a square div
// for (var i = 0; i < dimension; i++) {
//   var newRow = document.createElement('div');
//   newRow.classList.add('gridRow');
//   grid.appendChild(newRow)
//   for (var j = 0; j < dimension; j++) {
//     var newCell = document.createElement('div');
//     newCell.classList.add('gridCell');
//     newCell.id = i + '-' + j;
//
//     var newImg = document.createElement('img');
//     newImg.src = './img/0.png';
//     newImg.classList.add('cellImg')
//
//     if (j === 0) {
//       newCell.classList.add('x-left')
//     } else if (j < dimension - 1) {
//       newCell.classList.add('x-center')
//     } else if (j === dimension - 1) {
//       newCell.classList.add('x-right')
//     }
//
//     if (i === 0) {
//       newCell.classList.add('y-top')
//     } else if (i < dimension - 1) {
//       newCell.classList.add('y-center')
//     } else if (i === dimension - 1) {
//       newCell.classList.add('y-bottom')
//     }
//     newRow.appendChild(newCell);
//     newCell.appendChild(newImg);
//   }
// }

// 3 x 3 board should look like:
//  board = [[0,0,0],[0,0,0],[0,0,0]]


var gameInit = function() {
  var board = []
  var players = []
  var characters = [1, 2, 3, 4, 5, 6]
  var currentPlayerID = players[0]
  var turnID = 0
  var winningPlayer = 0;
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
    initialise: function() {
      for (var i = 0; i < dimension; i++) {
        board.push([])
        for (var j = 0; j < dimension; j++) {
          board[i].push(0)
        }
      }
      players.push(characters[Math.floor(Math.random() * characters.length)]);
      players.push(characters[Math.floor(Math.random() * characters.length)]);
      while (players[0] === players[1]) {
        players[1] = characters[Math.floor(Math.random() * characters.length)]
      }
      currentPlayerID = players[0];
      player1img.src = './img/' + players[0] + '.png';
      player2img.src = './img/' + players[1] + '.png';
      player1img.classList.toggle('activePlayer');
      console.log(players);
    },
    click: function(clicked) {
      alerts.style.visibility = 'hidden';
      console.log(clicked.id);
      var xVal = clicked.parentElement.id.charAt(0);
      var yVal = clicked.parentElement.id.charAt(2);
      console.log(xVal);
      console.log(yVal);

      if (board[xVal][yVal] === 0) {
        board[xVal][yVal] = currentPlayerID;
        clicked.src = './img/' + currentPlayerID + '.png';
        game.nextTurn();
        game.checkWin();
      }
    },
    nextTurn: function() {
      turnID++;
      currentPlayerID = players[(turnID % players.length)];
      player1img.classList.toggle('activePlayer');
      player2img.classList.toggle('activePlayer');
    },
    checkWin: function() {
        // [[0,0,0,0]
        // [0,0,0,0]
        // [0,0,0,0]
        // [0,0,0,0]] = board
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
        for (var i = 0; i < dimension; i++) {
          testArray.push(board[i][i]);
        }
        if (game.checkArray(testArray)) {
          game.winner();
        }
        testArray = []

        for (var i = 0; i < dimension; i++) {
          testArray.push(board[dimension - i - 1][i]);
        }
        if (game.checkArray(testArray)) {
          game.winner();
        }
        testArray = []

      }

      ,
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
    },
    reset: function() {
      location.reload();

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
  // event.target.src = './img/2.png'
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
resetBtn.addEventListener('click', game.reset)
