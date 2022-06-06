/////////////////////basic variabili

var player_name;
var go_on = 0;
var text_box = "";
var start = false;

var larghezza;



function preload() {


}

function setup() {

  createCanvas(windowWidth, windowHeight);

  //IMMAGINI
  welcome_page = loadImage("./assets_new/img/WELCOME.png");




  /////////////////////////////////////////WELCOME PAGE

  //write your name
  yourname = createInput();
  yourname.style("color:rgba(212, 255, 164, 1); background:rgba(212, 255, 164, 0); border-radius: 50px; border: 1px solid #D4FFA4; width: 244px; height: 43px; padding-left: 10px; font-size: 20px;text-align: center; font-family:Nunito;");
  yourname.position((windowWidth / 2) - 244 / 2, windowHeight/2 + 10);
  yourname.center('horizontal');


  //submit
  button = createButton('lets go');
  larghezza = button.width;
  button.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 244px; height: 43px; padding-left: 10px; font-size: 20px; font-family:Nunito;");
  button.position(windowWidth / 2, windowHeight*4/5);
  button.center('horizontal');
  button.mousePressed(name);

  //pronouns
  




}

function draw() {

  if(start == false && go_on == 0){

    image(welcome_page, 0, 0, windowWidth, windowHeight);

    push();
    insert = "write your name";
    textFont('Nunito');
    textAlign(CENTER);
    fill('#D4FFA4');
    textSize(20);
    text(insert, windowWidth/2, windowHeight/2 - 5);
    pop();

  }

}

function name() {

  player_name = yourname.value();
  yourname.hide();
  //write.hide();
  button.hide();
  console.log(player_name);

}


//window resize
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background('black');

}
