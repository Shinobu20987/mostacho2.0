var noseX=0
var noseY=0
function preload() {
mostacho=loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9aeb9a30-0dc5-44ad-8eed-60b44755c8fd/d4qsj18-9c6491a1-eb39-4b87-9efc-96bd8df54226.png/v1/fill/w_500,h_362/mostacho_png_by_majolovegood_d4qsj18-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYyIiwicGF0aCI6IlwvZlwvOWFlYjlhMzAtMGRjNS00NGFkLThlZWQtNjBiNDQ3NTVjOGZkXC9kNHFzajE4LTljNjQ5MWExLWViMzktNGI4Ny05ZWZjLTk2YmQ4ZGY1NDIyNi5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6mlnaSxC1XZ2lJdl23JdwhI9GBoLbNLvFri0KwjpAaY');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet está inicializando');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mostacho,noseX-30,noseY,80,35);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}