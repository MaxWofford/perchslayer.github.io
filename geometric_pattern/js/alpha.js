// API Reference -   https://p5js.org/reference/#/p5/alpha
function setup() {
  // Sets the screen to be 640 pixels wide and 360 pixels high
  createCanvas(720, 400);
}

function draw() {

  noStroke();
  c = color(0, 126, 255, 128);
fill(c);
rect(15, 15, 35, 70);
value = alpha(c);  // Sets 'value' to 102
fill(value);
rect(50, 15, 35, 70);

}

 