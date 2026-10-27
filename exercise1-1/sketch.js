let diameters = [360, 280, 200, 150];
let colourVals = [60, 140, 180, 255];

function setup(){
    createCanvas(400, 400);
}

function draw(){
    for (let i = 0 ; i < 4; i++){
        fill(colourVals[i]);
        circle(200, 200, diameters[i]);
    }
}

function mouseClicked(){
    colourVals.unshift(colourVals.pop());
}