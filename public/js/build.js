console.log("HELLO WORLD");
var first = true;
let render = document.getElementById("render");
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
let finalTranscript = '';
let recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;
recognition.onresult = (event) => {
  let interimTranscript = '';
  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript.toLowerCase();
    console.log(transcript)
    if (event.results[i].isFinal) {
      finalTranscript += transcript;
      finalTranscriptArray = finalTranscript.split(" ");
      for (var j = 0; j < finalTranscriptArray.length; j++) {
        checkCommand(j, finalTranscriptArray[j], finalTranscriptArray)
      }
      finalTranscriptArray = []
      finalTranscript = ""
    } else {
      interimTranscript += transcript;
    }
  }
  document.querySelector('#transcription').innerHTML = finalTranscript + '<p style="color:#F6FAFD;">' + interimTranscript + '</p>';
}
recognition.start();

let components = ["navigation", "banner", "card", "text", "container"]
let word2num = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4
}

function checkCommand(index, command, transcriptArray) {
  switch(command) {
    case "add":
      // code block
      if(!isSubCommand(index, command, transcriptArray)) {
        if(transcriptArray[index + 1] != undefined) {
          if(components.includes(transcriptArray[index + 1] )) {
            render.innerHTML += getCodedString(transcriptArray[index + 1])
            if (first) {
              document.getElementById("initial-message").style.display = "none";
              first = false;
            }
          }
        }
      }
      render.scrollTop = render.scrollHeight;
      break;
    case "remove":
      if(transcriptArray[index + 2] !== undefined && components.includes(transcriptArray[index + 1])){
          var num = transcriptArray[index + 2];
          if (!isNaN(num)) {
            var element = document.getElementById(`${transcriptArray[index + 1]}-${num}`);
            element.parentNode.removeChild(element);
          } else {
            var element = document.getElementById(`${transcriptArray[index + 1]}-${word2num[transcriptArray[index + 2]]}`);
            element.parentNode.removeChild(element);
          }
          
          if (first) {
              document.getElementById("initial-message").style.display = "none";
              first = false;
            }
      }
      break;
    case "make":
      // code block
      break;
    default:
      // code block
      break;
  }
}

function isSubCommand(index, command, transcriptArray) {
  if(transcriptArray[index + 2] != undefined) {
  switch(transcriptArray[index + 2]) {
      case "to":
        // code block
        return true;
      case "below":
        // code block
        return true;
      case "above":
        // code block
        return true;
      case "about":
      // code block
      return true;
      default:
        // code block
        return false
        break;
    }
  }
}

function getCodedString(component) {
  switch(component) {
      case "navigation":
        // code block
        var code = Components.getNavigation(counter.navigationCounter);
          counter.navigationCounter++;
          return code;
      case "banner":
          var code = Components.getBanner(counter.bannerCounter);
          counter.bannerCounter++;
          console.log("BANNER COUNT:", counter.bannerCounter);
          return code;
      case "card":
        // code block
        var code = Components.getCard(counter.cardCounter);
        counter.cardCounter++;
        return code;
      case "text":
      // code block
        var code = Components.getText(counter.textCounter);
        counter.textCounter++;
        return code;
      case "container":
        var code = Components.getContainer(counter.textCounter);
        counter.textCounter++;
        return code;
      default:
        // code block
        return false
        break;
    }
}
