let small = 0.7;
let medium = 1;
let large = 1.5;

let smallCount = 240;
let mediumCount = 96;
let largeCount = 24;

let circles = [];

xsize = 3700
ysize = 2100

let off = 135;

function setup()
{
  createCanvas(xsize, ysize);

  for (let i = 0; i < smallCount; i++)
  {
    circles.push(new Circle(small, [255, 0, 0]));
  }

  for (let i = 0; i < mediumCount; i++)
  {
    circles.push(new Circle(medium, [0, 255, 255]));
  }

  for (let i = 0; i < largeCount; i++)
  {
    circles.push(new Circle(large, [255, 0, 255]));
  }
}

function draw()
{
  background(255);
  
  noFill();
  stroke(0, 0, 0);
  
  drawStaticRect(off);

  fill(255, 204, 0);
  
  stroke(255, 204, 0);
  
  for (let i = 0; i < circles.length; i++)
  {
    
    //circles[i].glow();
    circles[i].display();
  }
}

function drawStaticRect(off)
{
  rect(off, off, width - 2*off, height - 2 * off)
}

class Circle 
{
  constructor(r, color)
  {
    this.x = random(off + r, (width - off) - r)
    this.y = random(off + r, (height - off) - r)
    this.r = r;
    this.color = color
  }

  display()
  {
    stroke(this.color);
    strokeWeight(5);
    ellipse(this.x, this.y, this.r, this.r);
  }

  glow()
  {
    stroke(255, 204, 0, random(0, 255));
  }
}