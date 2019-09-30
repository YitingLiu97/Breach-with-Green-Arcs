let object; // Declare object
let items = [];
let x = 300;
let y = 300;


function setup() {
  createCanvas(600, 700);
  angleMode(DEGREES);
  frameRate(100);

  for (let i = 0; i < 25; i++) {
    for (let n = 0; n < 10; n++) {
      x+=2*i;
      y+=2*i;
      translate(x, y);
      items.push(new Items(x, y , 60));
    }
  }
}

function draw() {
  background(13, 2, 8);
  //don't know how to load font on Sublime Text
  // textFont(loadFont('Bangers-Regular.ttf'));
  push();
  
  textFont('Courier New ');
  textSize(70);
  fill(255,random(100,200));
  // strokeWeight(1.5);
  textAlign(CENTER);
  text("breach",300,660);

  push();
  textSize(10);
  textFont('Georgia');
  noStroke();
  fill(80);
  text("Press r/g/b to change colors and space to return.", 300,690);
  pop();

  pop();

  // translate(x,y);
  for (let m = 0; m < items.length; m++) {

    items[m].rotate();
    items[m].display();

  }
}

// Items class
class Items {
  constructor(x, y,degree) {
    this.degree = degree;
    this.x = x;
    this.y = y;
    this.diameter = random(20,600);
    this.speed = 10;
    this.degree = 10;
    this.startingPoint = 2;

    this.red = color(random(255),0,0);
    this.green = color(0,random(255),0);
    this.blue = color(0,0,random(255));


  }

  rotate() {
    translate(x, y);
    this.speed++;
    rotate(this.degree*(this.speed%11));
  }


  display() {
    noFill();
    // rectMode(CENTER);
    strokeWeight(3);

    if (key === "r"){
      stroke(this.red,random(175,255));
    }   else if (key === "g"){
      stroke(this.green,random(175,255));
    }  else if (key === "b"){
      stroke(this.blue,random(175,255));
    } else if (key === " "){
      stroke(random(255),random(255),random(255),random(175,255));
    }else{
      stroke(random(255),random(255),random(255),random(175,255));

    } 

    // stroke(0, 255, 65,random(175,255));
    // stroke(random(0,255));
    // rect(0, 0, this.diameter, this.diameter+this.speed/5);
    // this.startingPoint = round(random(0,2)/2);
    arc(300,300, this.diameter, this.diameter, this.startingPoint*random(-2,2), this.diameter*2+this.speed*2);
  }
}