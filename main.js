var NoseX = 0;
var NoseY = 0;

function preload() {
    ClownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    Canvas = createCanvas(400, 300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();

    PoseNet = ml5.poseNet(Video, ModelLoaded);
    PoseNet.on("pose", GetPoses);
}

function ModelLoaded() {
    console.log("PoseNet is loaded");
}

function GetPoses(Results) {
    if (Results.length > 0) {
        NoseX = Results[0].pose.nose.x;
        NoseY = Results[0].pose.nose.y;
        console.log(Results);
        console.log("Nose x  = " + NoseX);
        console.log("Nose y  = " + NoseY);
    }
}

function draw() {
    image(Video, 0, 0, 400, 300);

    image(ClownNose, NoseX + 40, NoseY - 10, 50, 40);

    /*fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(NoseX+60, NoseY, 30);*/

    fill(255, 128, 0);
    stroke(255, 128, 0);
    circle(0, 0, 100);
    circle(400, 0, 100);
    circle(0, 300, 100);
    circle(400, 300, 100);

    fill(255, 255, 0);
    stroke(255, 255, 0);
    rect(50, -10, 300, 20);
    rect(50, 290, 300, 20);
    rect(-10, 50, 20, 200);
    rect(390, 50, 20, 200);
}

function Snap() {
    save("FilterImage.png");
}