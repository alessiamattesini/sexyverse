var go_on = 0;
var press_enter = true;

var nudes_counter = 0;
var non_vedo0 =  false;
var non_vedo1 = false;

var fade = 0;
var fadeAmount = 1;

function preload(){

  //IMMAGINI SFONDI
  himeros_garden = loadImage("./assets_new/img/Himeros_garden.png");
  phone_scene = loadImage("./assets_new/img/phone_scene.png");
  star_S = loadImage("./assets_new/img/star_S.png");
  star_M = loadImage("./assets_new/img/star_M.png");
  star_S_hi = loadImage("./assets_new/img/star_S_hi.png");
  star_M_hi = loadImage("./assets_new/img/star_M_hi.png");
  sfondo_nudini = loadImage("./assets_new/img/sfondo_nudini.png");

  qr_rin = loadImage("./assets_new/img/QR/RIN-IG.png");

  rin = loadImage("./assets_new/char/rin.png");
  rin_worried = loadImage("./assets_new/char/rin2.png");
  rin_talk = loadImage("./assets_new/char/rin3.png");
  himeros = loadImage("./assets_new/char/himeros.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  nudes_0 = createImg("./assets_new/img/nudini/nudino0.png");
  nudes_0.size(150, 150);
  nudes_0.addClass('shake');
  nudes_0.position(windowWidth/7, windowHeight * 6/8);
  nudes_0.hide();

  nudes_0.mousePressed(() => {

    nudes_counter ++;
    non_vedo0 = true;
    console.log("ECHECAZZO");
    //stella_0 = true;

  });

  nudes_1 = createImg("./assets_new/img/nudini/nudino1.png");
  nudes_1.size(225, 225);
  nudes_1.addClass('shake');
  nudes_1.position(windowWidth * 3/4, windowHeight * 8/12);
  nudes_1.hide();

  nudes_1.mousePressed(() => {

    nudes_counter ++;
    non_vedo1 = true;
    //stella_0 = true;

  });


}

function draw() {
  // put drawing code here

  if(go_on == 0){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Himeros you will never guess what I saw!!! I fear the worst is about to come upon our galaxy.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 1){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Some imbecile wants to steal the Awkwardness totem and will make a fucking mess!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();




  }

  if(go_on == 2){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX  HIMEROS
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "For all the giant cocks Rin! This is superb! WOW. We can finally do something about Awkwardness!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 3){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Wait, what? Why is it good? Am I missing something?";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 4){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX  HIMEROS
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Oh oh oh Rin you have so much to learn. Awkwardness was unfairly imprisonated.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 5){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX  HIMEROS
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "I wrote everything about it in my book: “Z69 revolution, memories of a hot bitch in state affairs”";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 6){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX  HIMEROS
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "It’s time for Awkwardness to get back its role in the Sexyverse, this is our chance.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 7){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX  HIMEROS
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Once and for all Sexyverse will be at peace.  Are you ready for the adventure?";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 8){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Okay Himeros, I’m in! But oh.. it’s my phone, an urgent message has arrived...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 9){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 5/7 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    image(himeros, windowWidth * 1/8 , windowHeight - himeros.width * 0.6, himeros.width * 0.30, himeros.height * 0.30);

    var delta = ((windowWidth/2 - 650/2) - (windowWidth/10));

    //TEXT BOX  HIMEROS
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth/10 -  5 + delta, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth/10 + 615 - star_S.width/4 + delta, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth/10 + star_S.width/2 + delta, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Mmm...how strange! It vibrates just like my latest anal plug.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 10){

      image(phone_scene, 0, 0, windowWidth, windowHeight);

      if (fade < 10 ){
        fadeAmount = 3;
      }
      if (fade > 255){
        fadeAmount = -3;
      }
      fade += fadeAmount;

     push();
     enter = "Press ENTER to go on";
     textFont('Nunito');
     textAlign(CENTER);
     fill(69, 66, 168, fade);
     textSize(20);
     text(enter, windowWidth/2, windowHeight * 8/9);
     pop();

     // push();
     // enter = "Press ENTER to go on";
     // textFont('Nunito');
     // textAlign(CENTER);
     // fill('rgba(69, 66, 168, 1)');
     // textSize(20);
     // text(enter, windowWidth/2, windowHeight * 8/9);
     // pop();

  }

  if(go_on == 11){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin_talk, windowWidth * 3/5 , windowHeight - rin_talk.width/2, rin_talk.width/2, rin_talk.height/2 );

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Almight fucks! We have a probem. Someone has hacked into the Sexyverse archive server...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 12){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin_talk, windowWidth * 3/5 , windowHeight - rin_talk.width/2, rin_talk.width/2, rin_talk.height/2 );

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Nudes of Sexyverse citizens are being spread.  I must fix this problem before we leave.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 13){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(rin_talk, windowWidth * 3/5 , windowHeight - rin_talk.width/2, rin_talk.width/2, rin_talk.height/2 );

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(252, 252, 167, 1)');
    strokeWeight(1.5);
    rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M, windowWidth/10 -  5, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S, windowWidth/10 + 615 - star_S.width/4, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S, windowWidth/10 + star_S.width/2, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    rin_name = "RIN";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(252, 252, 167, 1)');
    text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Please, help me! Point and click on the pop ups to put the nudes in a safe place.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    push();
    enter = "Press ENTER to go on";
    textFont('Nunito');
    textAlign(LEFT);
    fill(252, 252, 167, fade);
    textSize(20);
    text(enter, windowWidth/10 + 50, windowHeight - 223);
    pop();


  }

  if (go_on == 14) {

    press_enter =  false;

    image(sfondo_nudini, 0, 0, windowWidth, windowHeight);

    nudes_0.show();
    nudes_1.show();

    if (non_vedo0 == true){

      nudes_0.hide();

    }
    if (non_vedo1 == true){

      nudes_1.hide();

    }

  }

}


function keyPressed(){

  if(keyCode == 13){

    if(press_enter == true){

      go_on++;

    }
  }
}

function windowResized() {

 resizeCanvas(windowWidth, windowHeight);
 background('black');

}
