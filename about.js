function setup() {

  createCanvas(windowWidth,windowHeight);


  welcome = createImg("./assets_new/img/WELCOME.png");


  text = createP("Siamo molto karyne");
  text.position(windowWidth/2 - 100, windowHeight/3);
  text.style("color:white; font-size:30px; font-weight: bold;");
  text.center();


}

function draw() {

  image(welcome, 0, 0, windowWidth, windowHeight);


}



function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

    }
