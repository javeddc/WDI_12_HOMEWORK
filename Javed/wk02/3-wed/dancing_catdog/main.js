var movePixels = 2;
var foxImg = document.getElementById('fox');
var startButton = document.getElementById('start');
var fasterButton = document.getElementById('faster');
var stopButton = document.getElementById('stop');
var walkingRight = false;
var walkRate = 25;
var timer;

var flipImg = function(boolean) {
  if (boolean)  {
    foxImg.style.transform = 'scaleX(-1)'
  } else {
    foxImg.style.transform = 'scaleX(1)'
  }
}

var foxWalk = function() {
  if (!walkingRight) {
    var currentRight = parseInt(foxImg.style.right);
    foxImg.style.right = (currentRight + movePixels) + 'px';
    if (parseInt(foxImg.style.right) > (window.innerWidth - foxImg.width)) {
      walkingRight = true;
      flipImg(true);
    }
  } else {
    var currentRight = parseInt(foxImg.style.right);
    foxImg.style.right = (currentRight - movePixels) + 'px';
    if (parseInt(foxImg.style.right)===0) {
      walkingRight = false;
      flipImg(false);
    }
  }
}

var walkRepeat = function() {
  timer = setInterval(foxWalk, walkRate)
}

var makeFaster = function() {
  clearInterval(timer);
  walkRate = walkRate/2;
  walkRepeat();
}

var stopWalking = function() {
  clearInterval(timer);
  walkRate = 20;
}


startButton.addEventListener('click', walkRepeat);
fasterButton.addEventListener('click', makeFaster);
stopButton.addEventListener('click', stopWalking);
