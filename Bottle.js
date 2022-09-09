Status = "";
Bottle_image = "";

function preload(){
    Bottle_image = loadImage("https://i5.walmartimages.com/asr/745b5ebc-1a19-49ed-8a64-b56f35caa0bf_1.2b7a1dedd3bad7ad732d4605ee53f65e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff");
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
    object_Detector.detect(Bottle_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Bottle_image,0,0,640,350);
}