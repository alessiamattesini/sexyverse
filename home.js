var posso_andare = false;
var go_on = 0;

var start = false;
var video =  false;
var press = false;

let chapter_1;

function preload(){


}

function setup() {

  createCanvas(windowWidth,windowHeight);


  logo_sexy = createImg("./assets/img/logo_sexy_prova.png");
  logo_sexy.position(windowWidth/2 - 100, 60);

///////////////////////////////////////////////////////////////////////////LOAD EVERY IMAGE

  welcome = loadImage("./assets/img/WELCOME.png");
  vision = loadImage("./assets/img/Vision.png");
  rin_worried = loadImage("./assets/img/characters/Rin_worried.png");
  studio_rin = loadImage("./assets/img/studio_rin.png");

  chapter_1 = createVideo("./assets/video/segnaposto.mp4");
  chapter_1.hide();


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

  //video chapter 1
  if(start == true && video == true){

    image(chapter_1, 0, 0, windowWidth, windowHeight);

  }

  if(press == true && go_on == 0){

    fill('#E0FE68');
    textAlign(CENTER);
    textSize(20);
    text("press E to go on", windowWidth/2, windowHeight/2);

  }

  //visione di Rin

  if(go_on == 1 &&  start ==  true){

    console.log("adesso passiamo a Rin");
    //segnaposto per il video della visione

    image(vision, 0, 0, windowWidth, windowHeight);
    fill('#E0FE68');
    textAlign(CENTER);
    textSize(20);
    text("Qui in realtà ci starebbe il video della visione di Rin", windowWidth/2, windowHeight/2);

    press = false;
    video = false;
    posso_andare = false;
    setTimeout(vai, 500);

  }

//questa del go_on è una soluzione mega-iper punk


  if(go_on == 2){

    image(studio_rin, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.5);
    image(rin_worried, windowWidth + 200, windowHeight  -  996/6);
    pop();

    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(212, 255, 164, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 750, 239/2, 235/2, 235/2);
    pop();

    push();
    oh_no = "RIN — Oh boy, what the hell did I just see? I didn’t understand a thing! Please help me find out what this means! Let’s go in my Sex Archive.";
    text(oh_no, windowWidth/10 + 10, windowHeight - 200 + 10);


  }



  if(go_on == 3){

    console.log("bella bro");

  }


}

function name(){

    let player_name = yourname.value();
    start = true;
    posso_andare = true;
    yourname.hide();
    write.hide();
    button.hide();

  }

 function miprendiingiro(){

     about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito; text-decoration: underline;");

   }


function about_page(){

  window.open("about.html", "_self");

}

function mousePressed(){

  if(start == true){

    logo_sexy.hide();
    chapter_1.play();
    video = true;
    setTimeout(premi, 7000);

  }

}

function keyPressed(){

  if(keyCode == 69){

    if(posso_andare == true){

      go_on++;

    }

  }

}

function premi(){

  press = true;


}


function vai(){

  posso_andare = true;

}


//window resize

function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

}
