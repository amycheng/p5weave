// console.log(window.innerWidth);
var _width = window.innerWidth;
var _height = window.innerHeight;
function setup() {
  createCanvas(_width, _height);
}

function detectQuad(){
    background(255,255,255,5);
    stroke(random(255),0,random(255),random(100,255));
    line(0,0,mouseX,mouseY);
    line(0,_height,mouseX,mouseY);
    line(_width,0,mouseX,mouseY);
    line(_width,_height,mouseX,mouseY);
}
function mouseDragged(){
detectQuad();
}

function renderLine(){
  line(0,0,mouseX,mouseY);
}

