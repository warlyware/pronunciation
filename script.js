function initElement() {
  elem = document.getElementById("inputText");
  elem.onblur = sayWord;
  elem.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      sayWord;
      return false;
      e.preventDefault;
    } 
  })
};

function sayWord() {
  var wordToDefine = elem.value;
  var wordUrl = 'http://ssl.gstatic.com/dictionary/static/sounds/de/0/' + wordToDefine + '.mp3';
  player = document.getElementById("audioPlayer");
  player.src = wordUrl; 
}