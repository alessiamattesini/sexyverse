var posso_andare = false;
var go_on = 0;

var start = false;
var video =  false;
var press = false;

var fade = 0;
var fadeAmount = 1;

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
  rin_talk = loadImage("./assets/img/characters/rin_talk.png");
  studio_rin = loadImage("./assets/img/studio_rin.png");
  privacy = loadImage("./assets/img/privacy.png");

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

  checkbox = createCheckbox('I accept the sexy rulez <3', false);
  checkbox.position((width/2) - 100, height * 7 / 12);
  checkbox.changed(myCheckedEvent);
  checkbox.hide();

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
    text("press ENTER to go on", windowWidth/2, windowHeight/2);

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
    setTimeout(vai, 200);

  }

//questa del go_on è una soluzione mega-iper punk


  if(go_on == 2){


    //CHARACTER
    image(studio_rin, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.5);
    image(rin_worried, windowWidth + 200, windowHeight  -  996/6);
    pop();


    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(212, 255, 164, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(212, 255, 164, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    oh_no = "Oh boy, what the hell did I just see? I didn’t understand a thing!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(oh_no, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    //PRESS TO GO ON

     if (fade < 10 ){
       fadeAmount = 3;
     }
     if (fade > 255){
       fadeAmount = -3;
     }
     fade += fadeAmount;
    // console.log(fade);

    push();
    spacebar = "Press SPACEBAR to go on";
    textFont('Nunito');
    textAlign(LEFT);
    fill(212, 255, 164, fade);
    textSize(20);
    text(spacebar, windowWidth/10 + 50, windowHeight - 223);
    pop();

    posso_andare = false;
    setTimeout(vai, 200);

  }



  if(go_on == 3){

    //CHARACTER
    image(studio_rin, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.5);
    image(rin_worried, windowWidth + 200, windowHeight  -  996/6);
    pop();


    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(212, 255, 164, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(212, 255, 164, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    please = "Please help me find out what this means! Let’s go in my Sex Archive.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(please, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);


  }

  if (go_on == 4){

    //CHARACTER
    image(studio_rin, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.5);
    image(rin_talk, windowWidth + 200, windowHeight  -  996/6);
    pop();


    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(212, 255, 164, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(212, 255, 164, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    ehi = "Ehi, Stop! First, I need to understand how sexy you are!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(ehi, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);


  }

  if (go_on == 5){

    //CHARACTER
    image(studio_rin, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.5);
    image(rin_talk, windowWidth + 200, windowHeight  -  996/6);
    pop();


    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(212, 255, 164, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(212, 255, 164, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    read = "Not everyone can enter the archive, I have to trust you. Please read the privacy rules. ";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(read, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);


  }

  if(go_on == 6){

    background('rgba(46, 49, 146, 1)');
    image(privacy, windowWidth/2 - privacy.width/2, windowHeight/2 - privacy.height/2);

    push();
    textFont('Nunito');
    textSize(80);
    textAlign(CENTER);
    text("ARCHIVE PRIVACY RULEZ", width / 2, height / 5);
    pop();

    push();
    fill('black');
    textFont('Nunito');
    textSize(20);
    text("1. Don’t talk about other people’s sexual life", width / 2, height * 4 / 12);
    text("2. Don’t distribute the sexy contents without the consent of the persons involved. ", width / 2, height * 5 / 12);
    text("3. Feel free to leave your sexy documents in this space, no one  is judging you. ", width / 2, height * 6 / 12);

    checkbox.show();

    text("Sign here", width/2, height * 8 / 12);
    line((width/2)-150, height * 9 / 12, (width/2)+150, height * 9 / 12);
    pop();

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

  if(keyCode == 13){

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

function myCheckedEvent() {
  if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}



//////CAPIRE DOMATTINA COME MAI NON FUNZIONA
function mouseDragged() {


  if(go_on == 6){

    push();
    strokeWeight(3);
    stroke('black');
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
    console.log("che due coglioni");


  }
}

//window resize

function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

}
