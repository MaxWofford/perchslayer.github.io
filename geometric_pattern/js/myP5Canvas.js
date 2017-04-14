var x = 0;

function setup() {
  var myCanvas = createCanvas(700, 300);
  myCanvas.parent('project0');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  background(200);
  ellipse(width/2, height/2, 50, 50);
}