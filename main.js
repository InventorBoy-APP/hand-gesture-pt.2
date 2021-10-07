Webcam.set({
    width:350,
    height:350,
    image_format:"jpg",
    jpg_quality:90
});


camera= document.getElementById("camera");
Webcam.attach(camera);


function buttonCheck(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= "<img id='img_thing' src="+data_uri+">";
});

}

console.log('ml5 version',ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/V8iFuBx88/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded !");
}


function speak(){
    var synth=window.speechSynthesis;
     speak_data1= "First Prediction Will Be... Dun Dun Dun"+predicition_1;
     speak_data2= " And Second Prediction Will Be... Ta-Da!!"+predicition_2;
     var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
     synth.speak(utterThis);
}