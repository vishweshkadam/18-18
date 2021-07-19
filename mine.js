/**
 * demonstrates how to load a GIF image using
 * createImg to create an <img> on the page
 * and to use that to update animation
 * (and illustrates how p5's loadImage loads only
 * one frame otherwise).
 */

//var gif_loadImg, gif_createImg;
var cv;

var sound1bg;



function preload() {
  //bg = loadImage('bedroom.jpg');
  bg = loadImage('slide1.jpg');
  
}

function setup() {
  //createCanvas(500, 700);
  cv = createCanvas(windowWidth,windowHeight);
  //cv.position(0,0);
  //background(0);
 //sound1.loop();
  //sound1.play();
 
}

function draw() {
  background(bg);
}

function windowResize()
{
  resizeCanvas(windowWidth,windowHeight);
}
