function preload(){

      bg = loadImage("./assets/img/mappa_home.png");

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  background(bg);

  logo_sexy = createImg("./assets/img/logo_sexy_prova.png");
  logo_sexy.position(windowWidth/2 - 100, 60);

  about = createP("about");
  about.position(windowWidth - 400, 45);
  about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito");


}

function draw() {



}


function mousePressed() {



}

function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

    }
