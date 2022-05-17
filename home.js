function preload(){

      //bg = loadImage("./assets/img/mappa_home.png");

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  background(0);

  logo_sexy = createImg("./assets/img/logo_sexy_prova.png");
  logo_sexy.position(windowWidth/2 - 100, 60);

  //about
  about = createP("about");
  about.position(windowWidth - 400, 45);
  about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito");

  //write your name
  yourname = createInput();
  yourname.position((windowWidth / 2)-yourname.width/2, windowHeight/2);

  write = createP("Hey! What's your name?");
  write.position(windowWidth/3, windowHeight/4);
  write.style("color:white; font-size:60px; font-weight: bold;");

  //submit
  button = createButton('lets go');
  button.position(yourname.x + yourname.width +20, windowHeight/2);
  button.mousePressed(name);


}

function draw() {

}

function name(){
  console.log("funza");
  }

//function mousePressed() {
//}

function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

    }
