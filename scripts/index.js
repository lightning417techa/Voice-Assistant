navigator.mediaDevices.getUserMedia({audio:true})
                    .then(soundAllowed)
                    .catch(soundNotAllowed);
                    
var timer = setInterval(function() {
    var voices = speechSynthesis.getVoices();    
    if (voices.length !== 0) {
      var msg = new SpeechSynthesisUtterance("hello, I am your LanyxSoft Assistant! What can I do for you?");
      msg.voice = voices[1];
      speechSynthesis.speak(msg);
      clearInterval(timer);
    }
}, 200);    
