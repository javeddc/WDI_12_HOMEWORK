var headsCount = 0;
var tailsCount = 0;
var result = document.getElementById('result');
var coin = document.getElementById('coin');

var coinFlip = function() {
  flipAnimate();
  if (Math.random() > 0.5) {
    headsCount++;
    console.log('heads');
    setTimeout(coinUpdateHeads, 300);
    fiveCheck();
  } else {
    tailsCount++;
    console.log('tails');
    setTimeout(coinUpdateTails, 300);
    fiveCheck();
  }
}

var flipAnimate = function() {
  for (var i = 0.9 - 0.1)
    window.setTimeout(function() {
      flipFrame1(i)
    }, 100);

  window.setTimeout(flipFrame2, 200);
}


var flipFrame1 = function(i) {
  coin.style.transform = 'scaleX(' + i + ')';
}

var flipFrame2 = function() {
  coin.style.transform = 'scaleX(0.3)'
}

var fiveCheck = function() {
  if (headsCount === 5) {
    result.textContent = "You flipped 5 heads!"
    headsCount = 0;
    tailsCount = 0;
  }
  if (tailsCount === 5) {
    result.textContent = "You flipped 5 tails!"
    headsCount = 0;
    tailsCount = 0;
  }
}

var coinUpdateHeads = function(result) {
  coin.src = 'heads.jpg'
  coin.style.transform = 'scaleX(1)'
}

var coinUpdateTails = function(result) {
  coin.src = 'tails.jpg'
  coin.style.transform = 'scaleX(1)'
}

coin.addEventListener('click', coinFlip)
