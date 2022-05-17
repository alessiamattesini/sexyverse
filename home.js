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

  // let about = 'about';
  // let aboutWidth = textWidth(about);
  // push();
  // textSize(20);
  // fill(224, 254, 24);
  // text(about, windowWidth - aboutWidth - 45, 45);
  // pop();
  //
  // push();
  // let media = 'media';
  // let mediaWidth = textWidth(media);
  // textSize(20);
  // fill(224, 254, 24);
  // text(media, windowWidth - mediaWidth - aboutWidth - 100, 45);
  // pop();

}

function draw() {


/////////// CAZZETTO CARINO

   // push();
   // fill(255);
   // noStroke();
   // circle(windowWidth/2, windowHeight/2, 50, 50);
   // circle(windowWidth/2 + 50, windowHeight/2, 50, 50);
   // rect(windowWidth/2 + 10, windowHeight/2, 30, 100, 30);
   // circle(windowWidth/2 + 24, windowHeight/2 + 90, 40, 40);
   // pop();

}


function mousePressed() {



}

function windowResized(){
      resizeCanvas(windowWidth, windowHeight);
      background('black');
    }
