function setup() {

  createCanvas(windowWidth,windowHeight);


  logo_sexy = createImg("./assets/img/logo_sexy_prova.png");
  logo_sexy.position(windowWidth/2 - 100, 60);

  welcome = loadImage("./assets/img/WELCOME.png");


  text = createP("Siamo molto carine");
  text.position(windowWidth/2 - 100, windowHeight/3);
  text.style("color:white; font-size:30px; font-weight: bold;");


}

function draw() {

  //about.mouseOver(miprendiingiro);
  background(welcome);


}



function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

    }
