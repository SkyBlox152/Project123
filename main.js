difference = 0;
rightX = 0;
leftX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftX = results[0].pose.leftWrist.x;
    rightX = results[0].pose.rightWrist.x;
    difference = floor(leftX - rightX);

    console.log("leftWristX  = " + leftX  + " rightWristX = "+ rightX + " difference = " + difference);
  }
}

function draw() {
background('black');

document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
textSize(difference);
fill('white');
text('Skybloxplays', 50, 400);
}
