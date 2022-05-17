var map_x = 100;
var map_y = 100;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0);

}

function draw() {

  fill(255);
  circle(map_x, map_y, 100); //icona mappa (si spera)

}


function mousePressed() {

  if(dist(mouseX, mouseY, map_x, map_y) < 50){

      // fill(255);
      // circle(200, 200, 200); //qui magari ci sarà la mappa vera

      move_land();

      //i posti clickabili in png separati

      //un if che mi dice se premo nei posti apre gli script delle lands

  }

}


function move_land (){

  window.open("diversity.html", "_self");

}
