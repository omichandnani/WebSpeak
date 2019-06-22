console.log("HELLO WORLD");
var first = true;
class Counters {
  static navigationCounter = 1;
  static cardCounter = 1;
  static bannerCounter = 1;
  static textCounter = 1;
  static containerCounter = 1;
}

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
        var code = `<nav id="navigation-${Counters.navigationCounter}" class="navbar navbar-expand-lg" style="background-color: #34495e;">
              <a class="navbar-brand" style="color: white;" href="/">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                </div>
              </div>
            </nav>`;
          Counters.navigationCounter++;
          return code;
      case "banner":
        // code block
        var code =  `<div id="banner-${Counters.bannerCounter}" class="banner" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(public/img/wave.jpg); height: 70%">
              <div class="container" style="height: 100%; width: 100%; display:flex; flex-direction: column; justify-content: center; align-items: center;">
                <h1>Title</h1>
                <p>Description</p>
                <a class="btn btn-success" href="#">Get Started</a>
              </div>
            </div>`;
          Counters.bannerCounter++;
          return code;
      case "card":
        // code block
        var code = `<div id="card-${Counters.cardCounter}" class="card-trip">
              <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg">
              <div class="card-trip-infos">
                <div>
                  <h2>Title here</h2>
                  <p>Short here!</p>
                </div>
                <h2 class="card-trip-pricing">£99.99</h2>
                <img src='https://kitt.lewagon.com/placeholder/users/krokrob' class="card-trip-user avatar-bordered"/>
              </div>
            </div>`;
        Counters.cardCounter++;
        return code;
      case "text":
      // code block
        var code = `<h4 id="card-${Counters.textCounter}">AaBbCc</h4>`;
        return code;
      case "container":
        var code = `<div id="container-${Counters.containerCounter}" style="height: 300px; width: 100%; padding:20px;"><div class="container"><div class="row" id="content"></div></div></div>`
        Counters.containerCounter++;
        return code;
      default:
        // code block
        return false
        break;
    }
}
