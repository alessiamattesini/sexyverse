var start = false;

function preload(){


}

function setup() {

  createCanvas(windowWidth,windowHeight);


  logo_sexy = createImg("./assets/img/logo_sexy_prova.png");
  logo_sexy.position(windowWidth/2 - 100, 60);

  welcome = loadImage("./assets/img/WELCOME.png");


  //about
  about = createP("about");
  about.position(windowWidth - 100, 45);
  about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito;");
  about.mousePressed(about_page);
  //about.mouseOver(miprendiingiro);

  //write your name
  yourname = createInput();
  yourname.style("color: #ffffff; background:rgba(224, 254, 104, 0.3); border-radius: 50px; border: 1px solid #E0FE68; width: 244px; height: 43px; padding-left: 10px; font-size: 15px;text-align: center; font-family:Nunito;");
  yourname.position((windowWidth / 2)-244/2, windowHeight/2);

  write = createP("Your name");
  write.position(windowWidth/2 - 100, windowHeight/3);
  write.style("color:white; font-size:30px; font-weight: bold;");

  //submit
  button = createButton('lets go');
  button.style("border-radius: 50px; border: 1px solid #E0FE68; width: 244px; height: 43px; padding-left: 10px; font-size: 15px; font-family:Nunito;");
  button.position(windowWidth/2 - 244/2, windowHeight/2 + 100);
  button.mousePressed(name);


}

function draw() {

  about.mouseOver(miprendiingiro);
  background(welcome);


}

function name(){

  let player_name = yourname.value();
  console.log("funza" + player_name);
  start = true;
  yourname.hide();
  write.hide();
  button.hide();

  }

 function miprendiingiro(){

     console.log("funza2");
     about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito; text-decoration: underline;");

   }


function about_page(){

  window.open("about.html", "_self");

}


function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

    }
