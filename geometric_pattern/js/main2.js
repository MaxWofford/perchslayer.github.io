// API Reference -   https://p5js.org/reference/#/p5/ellipse

/*

Parameters
x	Number: x-coordinate of the ellipse. [ center point ]
y	Number: y-coordinate of the ellipse. [ center point ]
w	Number: width of the ellipse.Array
[h]	Number: height of the ellipse.

*/

// width = width of defined canvas; thus, 480 pixels and so
// width/2 = 240 pixels
// similarly, height/2 = 300 pixels


var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;   // used later in this exercise


function setup() {
  createCanvas(480, 600);
  circleDiameter = width/NUM_CIRCLES;  // 480/12 = 40 pixels
  circleRadius = circleDiameter/2;     // used later in this exercise
}


//  Drawing a Row of Circles  --  The  HARD WAY By Hand    ======================================== 




function draw() {
  ellipse(0, height/2, circleDiameter, circleDiameter);
  ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
  ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
  ellipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
  ellipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
}



// ===========================================================================

//    --  One Row, Looped  The EASY Way  ======================================== 
/*
function draw() {
  var x = 0;    //  this is a variable that will store the value of our x-coordinate as we draw ellipses across the row.
  
  // Loop the loop:  https://workshops.hackclub.com/geometric_pattern/loops.md
  
  
  while (x <= width) {  //   this is the header of the while-loop, and it means that the instructions within the loop 
                       //    should be executed as long as x is less than or equal to width.
      
    ellipse(x, 0, circleDiameter, circleDiameter); // (variable, 0px, 40px, 40px)
    
    x = x + circleDiameter; // variable = variable + 40px more each loop cycle
    
    
  } // end brace for while loop. note: each time, it only steps back into the loop and does
    // not reset the "x" value to zero.
  
}
*/
// ===========================================================================


// ==-   Drawing a Grid of Circles - considering both X and Y   ---------------========================  

/*
function draw() {
  var y = 0;
  while (y <= height) {

    var x = 0;
    while (x <= width) {
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }                       // END "X" while Loop   

    y = y + circleDiameter;
  }                         // END "Y" while Loop
}                           // END draw function

*/

// ===========================================================================
// The WHOLE ENCHILADA With The Shift, Both Ways -- but not reversed......
/*


function draw() {
  var isShifted = false;

  var y = 0;
  while (y <= height) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y + circleRadius;
    isShifted = !isShifted;
  }
}

*/

// ===========================================================================
// The REVERSED!......

/*
function draw() {
  var isShifted = false;

  var y = height;
  while (y >= 0) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    y = y - circleRadius;
    isShifted = !isShifted;
  }
}

*/












