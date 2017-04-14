var player;


function setup() {
  createCanvas(250, 250);
  player = createSprite(width/2, height, 50, 50);
}

function draw() {
  background(0, 0, 100);
}




















var isGameOver;
//var player;       // Adding the Player
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload() {
  // playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
  playerImage = loadImage("./img/dopefish50.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("img/spongeback-350x250.png");
 // backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {      // Essential Element I (of any P5 Project)  - runs once
  isGameOver = false;
  createCanvas(350, 250);         // Adding the Player
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
}

function draw() {       // Essential Element II (of any P5 Project) - keeps repeating
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemy.overlap(player)) {
      gameOver();
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      player.position.x += 6; // kick it up to 6!
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      player.position.x -= 6;  // kick it up to 6!
    }
    enemy.position.y = enemy.position.y + 3;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("U lose, sucker!", width / 2, height / 2);
  text("Click anywhere fo another go!", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (playerImage.height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
}


