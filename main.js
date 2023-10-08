song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video-createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Pose Net is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}