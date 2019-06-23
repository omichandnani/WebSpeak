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

let components = ["navigation", "banner", "card", "text", "container", "footer", "email", "about"]

let word2num = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five" : 5
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

      case "set" :
      if(transcriptArray[transcriptArray.length] != undefined)
        var num = transcriptArray[index+2];
        var string = "";
        if (transcriptArray.length > 1) {
          for(var i = 6; i<transcriptArray.length; i++){
            string += transcriptArray[i] + " ";
          }
        } else {
          string += transcriptArray[transcriptArray.length];
        }
        if(!isNaN(num)){
          var element = document.getElementById(`${transcriptArray[index + 1]}-${num}`);
          element.textContent = string;
        } else {
          var element = document.getElementById(`${transcriptArray[index + 1]}-${word2num[transcriptArray[index + 2]]}`);
          element.textContent = string;
        }
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
        if(transcriptArray[index+1]=="card"){
          issubcontainer(index,command,transcriptArray)
        }
        else if(transcriptArray[index+1]=="text"){
          issubcontainertext(index,command,transcriptArray)
        }
        
        return true;
      case "below":
      if (transcriptArray[index + 4] !== undefined){
        var num = transcriptArray[index + 4]
        if (!isNaN(num)) {
            var element = document.getElementById(`${transcriptArray[index + 3]}-${num}`);
            //console.log("IS NUM:", Components.getComponent(transcriptArray[index+1]));
            element.insertAdjacentHTML("afterend", Components.getComponent(transcriptArray[index+1]));
          } else {
            var element = document.getElementById(`${transcriptArray[index + 3]}-${word2num[transcriptArray[index+4]]}`);
            //console.log("IS NOT NUM:", Components.getComponent(transcriptArray[index+1]));
            element.insertAdjacentHTML("afterend", Components.getComponent(transcriptArray[index+1]));
          }
      }
        return true;
      case "above":
        if (transcriptArray[index + 4] !== undefined){
        var num = transcriptArray[index + 4]
        if (!isNaN(num)) {
            var element = document.getElementById(`${transcriptArray[index + 3]}-${num}`);
            console.log("IS NUM:", Components.getComponent(transcriptArray[index+1]));
            element.insertAdjacentHTML("beforebegin", Components.getComponent(transcriptArray[index+1]));
          } else {
            var element = document.getElementById(`${transcriptArray[index + 3]}-${word2num[transcriptArray[index+4]]}`);
            console.log("IS NOT NUM:", Components.getComponent(transcriptArray[index+1]));
            element.insertAdjacentHTML("beforebegin", Components.getComponent(transcriptArray[index+1]));
          }
      }
        return true;
      default:
        // code block
        return false
        break;
    }
  }
}

function issubcontainer(index,command,transcriptArray){
  if(transcriptArray[index + 3] != undefined) {
    var component = document.getElementById(`${transcriptArray[index + 3]}-${word2num[transcriptArray[index + 4]]}`)
    if(component !==undefined) {
      component.innerHTML += Components.getCard(counter.cardCounter);
      counter.cardCounter++;
    }
  }
}

// function textbanner(index,command,transcriptArray){
//   if(transcriptArray[index + 3] != undefined) {
//     var component = document.getElementById(`${transcriptArray[index + 3]}-${word2num[transcriptArray[index + 4]]}`)
//     if(component !==undefined) {
//       component.innerHTML += Components.getText(counter.textCounter);
//       counter.textCounter++;
//     }
//   }
// }
function issubcontainertext(index,command,transcriptArray){
  if(transcriptArray[index + 3] != undefined) {
    if(transcriptArray[index + 3] == "container"){
      var component = document.getElementById(`${"container"}-${word2num[transcriptArray[index + 4]]}`)
    if(component !==undefined) {
      component.innerHTML += Components.getText(counter.textCounter);
      counter.textCounter++;
      }  
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
        var code = Components.getContainer(counter.containerCounter);
        counter.containerCounter++;
        return code;
      case "email" :
        var code = Components.getEmail(counter.emailCounter);
        counter.emailCounter++;
        return code;
      case "footer":
        var code = Components.getFooter(counter.footerCounter);
        counter.footerCounter++;
        return code;
      case "about" : 
        var code = Components.getAboutUs(counter.aboutUsCounter);
        return code;  
      default:
        // code block
        return false
        break;
    }
}
