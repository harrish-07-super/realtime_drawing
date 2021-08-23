noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(550, 150);
    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX);

        console.log("difference = " + difference);

    }
}

function draw() {
    background("#FF0000");

    document.getElementById("square").innerHTML="Width and Height of the square " + difference + "px";

    fill("#0000FF");
    stroke("#0000FF");
    square(noseX,noseY,difference);
}
