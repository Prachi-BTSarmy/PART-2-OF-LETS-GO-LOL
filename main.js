status = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(640,420);
    video.hide();
}

function preload(){

}

function draw(){
    image(video,0,0,640,420);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
    document.getElementById("input").Value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}


