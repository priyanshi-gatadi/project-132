Status = "";
LightBulb_image = "";

function preload(){
    LightBulb_image = loadImage("https://i5.walmartimages.com/asr/22e784a4-03f1-4cc9-a905-b9e6e8ae0767_1.45b4897884b65b858975f3be0720c885.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff");
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
    object_Detector.detect(LightBulb_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(LightBulb_image,0,0,640,350);
}