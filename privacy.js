var go_on = 0;
var press_enter = true;
var player_name;

var nudes_counter = 0;
var non_vedo0 =  false;
var non_vedo1 = false;
var non_vedo2 =  false;
var non_vedo3 = false;
var non_vedo4 =  false;
var non_vedo5 = false;
var non_vedo6 =  false;
var non_vedo7 = false;
var non_vedo8 =  false;
var non_vedo9 = false;
var non_vedo10 =  false;
var non_vedo11 = false;
var non_vedo12 = false;

var pw_ch1 = "FIKIFIKI";
var end = false;
var wrong = false;
var suono = false;

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
  stellona = loadImage("./assets_new/img/nudini/stellona.png");
  ch1_end = loadImage("./assets_new/img/ch1_end.png");

  qr_himeros = loadImage("./assets_new/img/QR/HIMEROS-IG.png");

  rin = loadImage("./assets_new/char/rin.png");
  rin_worried = loadImage("./assets_new/char/rin2.png");
  rin_talk = loadImage("./assets_new/char/rin3.png");
  himeros = loadImage("./assets_new/char/himeros.png");
  himeros_talk = loadImage("./assets_new/char/himeros_talk.png");

  saved = loadSound('./assets_new/audio/saved.mp3');

  ambient2 = loadSound('./assets_new/audio/diversity_sound.mp3');

}

function setup() {

  //setTimeout(entro, 200);

      var parts = window.location.search.substr(1).split("&");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }

    player_name = $_GET.player_name;
    console.log(player_name);


  createCanvas(windowWidth, windowHeight);

  nudes_0 = createImg("./assets_new/img/nudini/nudino0.png");
  nudes_0.size(150, 150);
  nudes_0.addClass('shake');
  nudes_0.position(windowWidth/7, windowHeight * 6/8);
  nudes_0.hide();

  nudes_0.mousePressed(() => {

    nudes_counter ++;
    non_vedo0 = true;
    saved.play();

  });

  nudes_1 = createImg("./assets_new/img/nudini/nudino1.png");
  nudes_1.size(225, 225);
  nudes_1.addClass('shake1');
  nudes_1.position(windowWidth * 3/4, windowHeight * 8/12);
  nudes_1.hide();

  nudes_1.mousePressed(() => {

    nudes_counter ++;
    non_vedo1 = true;
    saved.play();

  });

  nudes_2 = createImg("./assets_new/img/nudini/nudino2.png");
  nudes_2.size(315, 315);
  nudes_2.addClass('shake');
  nudes_2.position(windowWidth * 2/7, windowHeight * 1/3);
  nudes_2.hide();

  nudes_2.mousePressed(() => {

    nudes_counter ++;
    non_vedo2 = true;
    saved.play();

  });

  nudes_3 = createImg("./assets_new/img/nudini/nudino3.png");
  nudes_3.size(130, 130);
  nudes_3.addClass('shake1');
  nudes_3.position(windowWidth * 5/8, windowHeight * 1/14);
  nudes_3.hide();

  nudes_3.mousePressed(() => {

    nudes_counter ++;
    non_vedo3 = true;
    saved.play();

  });

  nudes_4 = createImg("./assets_new/img/nudini/nudino4.png");
  nudes_4.size(220, 220);
  nudes_4.addClass('shake');
  nudes_4.position(windowWidth * 1/13, windowHeight * 3/7);
  nudes_4.hide();

  nudes_4.mousePressed(() => {

    nudes_counter ++;
    non_vedo4 = true;
    saved.play();

  });

  nudes_5 = createImg("./assets_new/img/nudini/nudino5.png");
  nudes_5.size(170, 170);
  nudes_5.addClass('shake1');
  nudes_5.position(windowWidth * 3/4 + 10, windowHeight * 5/13);
  nudes_5.hide();

  nudes_5.mousePressed(() => {

    nudes_counter ++;
    non_vedo5 = true;
    saved.play();

  });

  nudes_6 = createImg("./assets_new/img/nudini/nudino6.png");
  nudes_6.size(170, 170);
  nudes_6.addClass('shake');
  nudes_6.position(windowWidth/2, windowHeight * 1/8);
  nudes_6.hide();

  nudes_6.mousePressed(() => {

    nudes_counter ++;
    non_vedo6 = true;
    saved.play();

  });

  nudes_7 = createImg("./assets_new/img/nudini/nudino7.png");
  nudes_7.size(300, 300);
  nudes_7.addClass('shake1');
  nudes_7.position(windowWidth* 5/9, windowHeight * 6/10);
  nudes_7.hide();

  nudes_7.mousePressed(() => {

    nudes_counter ++;
    non_vedo7 = true;
    saved.play();

  });

  nudes_8 = createImg("./assets_new/img/nudini/nudino8.png");
  nudes_8.size(190, 190);
  nudes_8.addClass('shake1');
  nudes_8.position(windowWidth * 2/11, windowHeight * 7/19);
  nudes_8.hide();

  nudes_8.mousePressed(() => {

    nudes_counter ++;
    non_vedo8 = true;
    saved.play();

  });

  nudes_9 = createImg("./assets_new/img/nudini/nudino9.png");
  nudes_9.size(130, 130);
  nudes_9.addClass('shake');
  nudes_9.position(windowWidth * 1/11, windowHeight * 4/23);
  nudes_9.hide();

  nudes_9.mousePressed(() => {

    nudes_counter ++;
    non_vedo9 = true;
    saved.play();

  });

  nudes_10 = createImg("./assets_new/img/nudini/nudino10.png");
  nudes_10.size(150, 150);
  nudes_10.addClass('shake1');
  nudes_10.position(windowWidth * 3/18, windowHeight * 4/9);
  nudes_10.hide();

  nudes_10.mousePressed(() => {

    nudes_counter ++;
    non_vedo10 = true;
    saved.play();

  });

  nudes_11 = createImg("./assets_new/img/nudini/nudino11.png");
  nudes_11.size(175, 175);
  nudes_11.addClass('shake');
  nudes_11.position(windowWidth * 12/23, windowHeight * 6/17);
  nudes_11.hide();

  nudes_11.mousePressed(() => {

    nudes_counter ++;
    non_vedo11 = true;
    saved.play();

  });

  nudes_12 = createImg("./assets_new/img/nudini/nudino12.png");
  nudes_12.size(130, 130);
  nudes_12.addClass('shake1');
  nudes_12.position(windowWidth * 10/17, windowHeight/3);
  nudes_12.hide();

  nudes_12.mousePressed(() => {

    nudes_counter ++;
    non_vedo12 = true;
    saved.play();

  });


  ////////////////name

  pw = createInput();
  pw.style("color:rgba(212, 255, 164, 1); background:rgba(212, 255, 164, 0); border-radius: 50px; border: 1px solid #D4FFA4; width: 200px; height: 30px; padding-left: 10px; font-size: 17px;text-align: center; font-family:Nunito;");
  pw.position(windowWidth * 2/5 + 50 + 190, windowHeight - 173 + 20);
  pw.hide();


  //submit
  submit = createButton('submit');
  submit.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 100px; height: 32px; padding-left: 10px; font-size: 14px; font-family:Nunito;");
  submit.position(pw.x + 200 + 30, windowHeight - 173 + 20);
  submit.mousePressed(() => {

    if(pw.value() === pw_ch1){

      end = true;

    } else {

      wrong = true;

    }

    console.log(pw.value());

  });
  submit.hide();

  wrong_pw = createImg("./assets_new/img/wrong_pw.png");
  wrong_pw.size(757 * 2/3, 328 * 2/3);
  wrong_pw.position(windowWidth * 2/5 + 50, windowHeight/3);
  wrong_pw.hide();

  about = createP("about");
  about.position(windowWidth - 100, 5);
  about.style("color:rgba(212, 255, 164, 1); font-size:25px; font-family:Nunito;");
  about.mouseOver(about_over);
  about.mouseOut(about_out);
  about.mousePressed(about_page);
  about.hide();

  play_again = createP("play again");
  play_again.position(30, 5);
  play_again.style("color:rgba(212, 255, 164, 1); font-size:25px; font-family:Nunito;");
  play_again.mouseOver(() => {

    play_again.style("text-decoration: underline;");

  });
  play_again.mouseOut(() => {

    play_again.style("color:rgba(212, 255, 164, 1); font-size:25px; font-family:Nunito; text-decoration: none;");


  });
  play_again.mousePressed(() => {

      window.open("index.html", "_self");

  });
  play_again.hide();


  menu = createImg("./assets_new/img/menu.png");
  menu.position(windowWidth - 40 - 93*0.75, 40);
  menu.size(93 * 0.75, 93 * 0.75);
  menu.show();

}

function draw() {

  // if(suono == false){
  //
  //
  //   entro();
  //   suono = true;
  //
  // }


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

      menu.hide();

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
     fill(69, 66, 168);
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

    menu.show();

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
    text_box = "Please, " + player_name + " help me! Point and click on the pop ups to put the nudes in a safe place.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    push();
    enter = "- Press ENTER to go on";
    textFont('Nunito');
    textAlign(LEFT);
    fill(252, 252, 167);
    textSize(20);
    text(enter, windowWidth/10 + 90, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();


  }

  if (go_on == 14) {

    press_enter =  false;
    console.log(nudes_counter);

    menu.hide();

    image(sfondo_nudini, 0, 0, windowWidth, windowHeight);

    image(stellona, nudes_0.x, nudes_0.y, nudes_0.width, nudes_0.height);
    image(stellona, nudes_1.x, nudes_1.y, nudes_1.width, nudes_1.height);
    image(stellona, nudes_2.x, nudes_2.y, nudes_2.width, nudes_2.height);
    image(stellona, nudes_3.x, nudes_3.y, nudes_3.width, nudes_3.height);
    image(stellona, nudes_4.x, nudes_4.y, nudes_4.width, nudes_4.height);
    image(stellona, nudes_5.x, nudes_5.y, nudes_5.width, nudes_5.height);
    image(stellona, nudes_6.x, nudes_6.y, nudes_6.width, nudes_6.height);
    image(stellona, nudes_7.x, nudes_7.y, nudes_7.width, nudes_7.height);
    image(stellona, nudes_8.x, nudes_8.y, nudes_8.width, nudes_8.height);
    image(stellona, nudes_9.x, nudes_9.y, nudes_9.width, nudes_9.height);
    image(stellona, nudes_10.x, nudes_10.y, nudes_10.width, nudes_10.height);
    image(stellona, nudes_11.x, nudes_11.y, nudes_11.width, nudes_11.height);
    image(stellona, nudes_12.x, nudes_12.y, nudes_12.width, nudes_12.height);

    nudes_0.show();
    nudes_1.show();
    nudes_2.show();
    nudes_3.show();
    nudes_4.show();
    nudes_5.show();
    nudes_6.show();
    nudes_7.show();
    nudes_8.show();
    nudes_9.show();
    nudes_10.show();
    nudes_11.show();
    nudes_12.show();

    if (non_vedo0 == true){

      nudes_0.hide();

    }
    if (non_vedo1 == true){

      nudes_1.hide();

    }
    if (non_vedo2 == true){

      nudes_2.hide();

    }
    if (non_vedo3 == true){

      nudes_3.hide();

    }
    if (non_vedo4 == true){

      nudes_4.hide();

    }
    if (non_vedo5 == true){

      nudes_5.hide();

    }
    if (non_vedo6 == true){

      nudes_6.hide();

    }
    if (non_vedo7 == true){

      nudes_7.hide();

    }
    if (non_vedo8 == true){

      nudes_8.hide();

    }
    if (non_vedo9 == true){

      nudes_9.hide();

    }
    if (non_vedo10 == true){

      nudes_10.hide();

    }
    if (non_vedo11 == true){

      nudes_11.hide();

    }
    if (non_vedo12 == true){

      nudes_12.hide();

    }


  }

  if(nudes_counter == 13){

    menu.show();

    press_enter = true;

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
    text_box = "Good job, " + player_name + " you’re a pro at this! Himeros we are now ready to go. But where do we start?";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 15){

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
    text_box = "First we have to find a person with mixed blood. I might know where to find one.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if (go_on == 16) {

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
    text_box = "A mixed blood person? What fuckery is this? How come you only tell me about this stuff now?";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 17){

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(himeros_talk, windowWidth * 1/8 , windowHeight - himeros_talk.height/2, himeros_talk.width/2, himeros_talk.height/2 );

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth * 2/5, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth * 2/5 -  5, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth * 2/5 + 615 - star_S.width/4, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth * 2/5 + star_S.width/2, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    hi_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(hi_name, windowWidth * 2/5 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Find the keyword hidden in my profile to go on in the game, when you’re done come back here.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth * 2/5 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    push();
    stroke('rgba(69, 66, 168, 1)');
    fill('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth * 2/5 - 200 - 10, windowHeight - 200, 200, 239/2, 235/2, 235/2);
    pop();

    image(qr_himeros, windowWidth * 2/5 - 200 + 40, windowHeight - 203 + 12, 239/2 - 20, 239/2 - 20);


  }

  if(go_on == 18){

    press_enter = false;

    image(himeros_garden, 0, 0, windowWidth, windowHeight);
    image(himeros_talk, windowWidth * 1/8 , windowHeight - himeros_talk.height/2, himeros_talk.width/2, himeros_talk.height/2 );

    //TEXT BOX
    push();
    fill('rgba(69, 66, 168, 1)');
    stroke('rgba(255, 125, 227, 1)');
    strokeWeight(1.5);
    rect(windowWidth * 2/5, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    pop();

    image(star_M_hi, windowWidth * 2/5 -  5, windowHeight - 215, star_M.width/2, star_M.height/2);
    image(star_S_hi, windowWidth * 2/5 + 615 - star_S.width/4, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    image(star_S_hi, windowWidth * 2/5 + star_S.width/2, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);

    //NAME CHARACTER
    push();
    hi_name = "HIMEROS";
    textFont('Nunito');
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(20);
    fill('rgba(255, 125, 227, 1)');
    text(hi_name, windowWidth * 2/5 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    pop();

    //TEXT
    push();
    text_box = "Have you found it?";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth * 2/5 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    pw.show();
    submit.show();

    if(wrong == true){

      wrong_pw.show();

    }


  }

  if(end == true){

    image(ch1_end, 0, 0, windowWidth, windowHeight);

    pw.hide();
    submit.hide();
    wrong_pw.hide();
    menu.hide();
    about.show();
    play_again.show();

  }


}


function keyPressed(){

  if(keyCode == 13){

    if(press_enter == true){

      go_on++;

    }

    if(go_on == 1){

      ambient2.setVolume(0.65);
      ambient2.loop();

    }
  }
}

// function backgroundmusic(){
//
//   ambient2.setVolume(0.5);
//   ambient2.loop();
//
// }

// function entro(){
//
//   console.log("ehi sono entrato");
//   ambient2.play();
//
//
// }

function about_page(){

  window.open("about.html", "_blank");

}

function about_over(){

  about.style("text-decoration: underline;");

}

function about_out(){

  about.style("color:rgba(212, 255, 164, 1); font-size:25px; font-family:Nunito; text-decoration: none;");

}

function windowResized() {

 resizeCanvas(windowWidth, windowHeight);
 background('black');

}
