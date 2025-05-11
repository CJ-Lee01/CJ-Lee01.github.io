const buttonElem = document.getElementById("read-aloud");
const article = document.querySelector("#content");
const synth = window.speechSynthesis;

function speak() {
  if (synth.speaking) {
    synth.cancel()
    return;
  }

  const utterance = new SpeechSynthesisUtterance(article.innerText);
  utterance.rate = 1; // normal speed
  utterance.pitch = 1; // normal pitch
  
  utterance.onend = function (event) {
    console.log("SpeechSynthesisUtterance.onend");
  };

  utterance.onerror = function (event) {
    console.error("SpeechSynthesisUtterance.onerror");
  }

  synth.speak(utterance);


}

buttonElem.onclick = function (event) {
  event.preventDefault();
  speak();
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    synth.cancel();
  });
});