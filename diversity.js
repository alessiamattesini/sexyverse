var go_on = 22;
var press_enter = true;

// //NUDINI
//
// let popups = [];
// let nudinosalvato;
// let nudini = [];
// let salviamoinudini = false;
// let counter_nudini = 0;


function preload() {

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


  travel_animation = createVideo('./assets_new/video/travel.mp4');
  travel_animation.hide();



}

function draw() {

  // if(diversity_land ==  true){
  //
  //
  //   image(himeros_garden, 0, 0, windowWidth, windowHeight);  //////PLACEHOLDER
  //   //travel_animation.play();
  //   // travel_animation.onended(() => {
  //   //
  //   //   press_himeros = true;
  //   //
  //   // });
  //
  // }
  //
  // if(press_himeros  ==  true){
  //
  //   diversity_land = false;
  //
  //   press_enter = true;
  //
  //   if (fade < 10 ){
  //     fadeAmount = 3;
  //   }
  //   if (fade > 255){
  //     fadeAmount = -3;
  //   }
  //   fade += fadeAmount;
  //
  //  push();
  //  enter = "Press ENTER to go on";
  //  textFont('Nunito');
  //  textAlign(CENTER);
  //  fill(212, 255, 164, fade);
  //  textSize(30);
  //  text(enter, windowWidth/2, windowHeight/2);
  //  pop();
  //
  //
  // }

  if(go_on == 22){

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

  if(go_on == 23){

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

  if(go_on == 24){

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

  if(go_on == 25){

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

  if(go_on == 26){

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

  if(go_on == 27){

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

  if(go_on == 28){

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

  if(go_on == 29){

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

  if(go_on == 30){

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

  if(go_on == 31){

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

  if(go_on == 32){

    image(phone_scene, 0, 0, windowWidth, windowHeight);

     push();
     enter = "Press ENTER to go on";
     textFont('Nunito');
     textAlign(CENTER);
     fill('rgba(69, 66, 168, 1)');
     textSize(20);
     text(enter, windowWidth/2, windowHeight * 8/9);
     pop();

  }

  if(go_on == 33){

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

  if(go_on == 34){

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
    text_box = "Nudes of Sexyverse citizens are being spread. I must fix this problem before we leave.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 35){

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
    text_box = "Please " + player_name + ", help me! Point and click on the pop ups to put the nudes in a safe place.";
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

  if (go_on == 36) {

    press_enter =  false;

    image(sfondo_nudini, 0, 0, windowWidth, windowHeight);
    // salviamoinudini = true;
    //
    // for (let i = 0; i < popups.length; i++){
    //   popups[i].move();
    //   popups[i].show();
    //
    //   //console.log("parte??");
    //
    // }

  }

  // if (counter_nudini > 20) {
  //
  //   background(0);
  //
  //   }

}

function keyPressed(){

  if(keyCode == 13){

    if(press_enter == true){

      go_on++;

    }
  }
}

// function mousePressed(){
//
//       if (salviamoinudini == true) {
//       for (let i = 0; i < popups.length; i++){
//         popups[i].clicked(mouseX, mouseY);
//         console.log("ti prego");
//         console.log("counter nudini" + counter_nudini);
//         }
//       }
//
// }

// class Popup {
//   constructor(x, y, r, img) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.nudinorandom = img;
//   }
//
// clicked(px, py) {
//     if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r && salviamoinudini == true) {
//     this.nudinorandom = nudinosalvato; //random(nudini);
//     counter_nudini = counter_nudini +1;
//
//   }
// }
//
//   move(){
//     this.x = this.x + random(-2, 2);
//     this.y = this.y + random(-2, 2);
//   }
//
//   show(){
//     image(this.nudinorandom, this.x, this.y, this.r, this.r);
//   }
// }



//window resize
function windowResized() {

 resizeCanvas(windowWidth, windowHeight);
 background('black');

}
