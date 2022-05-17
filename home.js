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
  write.position(windowWidth/2 - 150, windowHeight/3);
  write.style("color:white; font-size:30px; font-weight: bold;");

  //submit
  button = createButton('lets go');
  button.position(windowWidth/2 - button.width/2, windowHeight/2 + 100);
  button.mousePressed(name);


}

function draw() {

}

function name(){

  let player_name = yourname.value();
  console.log("funza" + player_name);

  }

//function mousePressed() {
//}

function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

    }
