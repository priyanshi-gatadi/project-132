Status = "";
fan_image = "";

function preload(){
    fan_image = loadImage("https://i5.walmartimages.com/asr/dd6ff603-9e3a-40c5-a54b-52bf6f424b33_1.13e5bac028cefa9ca2c98d703ce4f65b.jpeg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fan_image,0,0,640,350);
}