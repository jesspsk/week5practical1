let tailX =[];
let tailY = [];
let diameters = [12, 14, 16, 18, 20];

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(255)
    fill(0, 0, 255)
    addCircle()
    for (let i = 0; i < tailX.length; i++){
        circle(tailX[i], tailY[i], diameters[i])
    }
}

function addCircle(){
    tailX.push(mouseX)
    tailY.push(mouseY)
    if (tailX.length >= 6){
        tailX.shift()
        tailY.shift()
    }
}