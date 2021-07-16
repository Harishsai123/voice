var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function lets_go() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();

}

Recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;

    speak();

}

function speak() {
     var synth = window.speechSynthesis;

     speak_data = document.getElementById("textbox").value;
     
     var utterthis  = new SpeechSynthesisUtterance(speak_data);
     
     synth.speak(utterthis);
     Webcam.attach(camera);
} 

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");