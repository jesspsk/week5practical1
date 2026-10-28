let historyX = [];
let historyY = [];

function setup(){
    createCanvas(400, 400);
    noStroke()
}

function draw(){
    background(255);
    fill(150, 60, 200);
    for (let i = 0; i < historyX.length; i++){
        circle(historyX[i], historyY[i], 10);
    }
}

function mouseClicked(){
    historyX.push(mouseX);
    historyY.push(mouseY);
}

function keyPressed(){
    if (key === 'z'){
        historyX.pop()
        historyY.pop()
    }
}