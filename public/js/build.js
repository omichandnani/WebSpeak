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
      // code block
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
        var code = Components.navigation
          Counters.navigationCounter++;
          return code;
      case "banner":
          var code = Components.banner
          Counters.bannerCounter++;
          return code;
      case "card":
        // code block
        var code = Components.card
        Counters.cardCounter++;
        return code;
      case "text":
      // code block
        var code = Components.text
        Counters.containerCounter++;
        return code;
      case "container":
        var code = Components.container
        Counters.containerCounter++;
        return code;
      default:
        // code block
        return false
        break;
    }
}
