img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    oD = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected!";
}

function modelLoaded(){
    console.log("Model has been Loaded!")
    status = true;
    oD.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("error");
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("lightgreen");
    text("Dog", 45, 75);
    noFill();
    stroke("seagreen");
    rect(30, 60, 450, 350);

    fill("lightgreen");
    text("Cat", 320, 120);
    noFill();
    stroke("seagreen");
    rect(300, 90, 270, 320);
}