let r1 = 0;
let g1 = 170;
let b1 = 238;
let r2 = 0;
let g2 = 153;
let b2 = 153;

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  var c;
  var c1;
  var c2;
  noStroke();
  c1 = color(r1, g1, b1);
  c2 = color(r2, g2, b2);
  for (let w = 0; w < width; w += 5) {
    for (let h = 0; h < height; h += 5) {
      c = lerpColor(c1, c2, (w + h) / (width + height));
      fill(c);
      rect(w, h, 5, 5);
    }
  }
  if (mouseIsPressed) {
    fill(0);
    r1+=0.5;
    if (r1>255)r1=255;
    g1-=0.7;
    if (g1<153)g1=153;
    b1-=0.6;
    if (b1<0)b1=0;
    r2+=0.5;
    if (r2>238)r2=238;
    g2-=0.4;
    if (g2<0)g2=0;
    b2+=0.6;
    if (b2>68)b2=68;
  } else if (!mouseIsPressed) {
    noFill();
    r1-=0.5;
    if (r1<0)r1=0;
    g1+=0.4;
    if (g1>170)g1=170;
    b1+=0.3;
    if (b1>238)b1=238;
    r2-=0.4;
    if (r2<0)r2=0;
    g2+=0.5;
    if (g2>153)g2=153;
    b2-=0.3;
    if (b2>153)b2=153;
  }
  circle(mouseX, mouseY, 30);
    fill(0);
  textSize(40);
  text(-(b1-200)+"℃",50,50);
}
