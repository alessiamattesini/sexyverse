/////////////////////basic variabili

var player_name;
var go_on = 0;
var text_box = "";
var start = false;

var iniziamo = false;
var press_enter = false;
var fade = 0;
var fadeAmount = 1;

//DESKTOP variabili

var totem_pdf = false;
var totem_pdf2 = false;
var info_totem = false;
var info_revolution = false;
//var next_rev = false;
var rev_1 = false;
var rev_2 = false;


function preload() {


}

function setup() {

  createCanvas(windowWidth, windowHeight);

  //IMMAGINI SFONDI
  welcome_page = loadImage("./assets_new/img/WELCOME.png");
  rin_lab = loadImage("./assets_new/img/rin_lab.png");
  archive_door = loadImage("./assets_new/img/archive_door.png");
  archive = loadImage("./assets_new/img/archive.png");
  star_S = loadImage("./assets_new/img/star_S.png");
  star_M = loadImage("./assets_new/img/star_M.png");




  /////////////////////////////////////////WELCOME PAGE

  about = createP("about");
  about.position(windowWidth - 100, 45);
  about.style("color:rgba(212, 255, 164, 1); font-size:20px; font-family:Nunito;");
  about.mouseOver(about_over);
  about.mouseOut(about_out);
  about.mousePressed(about_page);

  //write your name
  yourname = createInput();
  yourname.style("color:rgba(212, 255, 164, 1); background:rgba(212, 255, 164, 0); border-radius: 50px; border: 1px solid #D4FFA4; width: 244px; height: 43px; padding-left: 10px; font-size: 17px;text-align: center; font-family:Nunito;");
  yourname.position((windowWidth / 2) - 244 / 2, windowHeight/2 + 10);
  yourname.center('horizontal');


  //submit
  button = createButton('lets go');
  button.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 244px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
  button.position(windowWidth / 2, windowHeight*4/5);
  button.center('horizontal');
  button.mousePressed(name);


  let account = createP('@fabolousrin');
  account.style('color:rgba(252, 252, 167, 1); font-size: 20px; font-family: Nunito;');
  account.position(windowWidth/10 + 50, windowHeight - 173 + 20);
  //account.center('horizontal');
  account.hide();

  // //pronouns
  // she = createButton('she/her');
  // she.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
  // she.position(windowWidth/5 - 80, windowHeight * 2 / 3);
  // she.mouseOver(im_over);
  // she.mouseOut(im_out);
  // //she.mousePressed(she_select);
  //
  // he = createButton('he/him');
  // he.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
  // he.class('he_pron');
  // he.position(windowWidth *  2/5 - 80, windowHeight * 2 / 3);
  // he.mouseOver(im_over1);
  // he.mouseOut(im_out1);
  // he.mousePressed(he_select);
  //
  // they = createButton('they/them');
  // they.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
  // they.class('he_pron');
  // they.position(windowWidth *  3/5 - 80, windowHeight * 2 / 3);
  // they.mouseOver(im_over2);
  // they.mouseOut(im_out2);
  //
  // ze = createButton('ze/zir');
  // ze.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
  // ze.class('he_pron');
  // ze.position(windowWidth *  4/5 - 80, windowHeight * 2 / 3);
  // ze.mouseOver(im_over3);
  // ze.mouseOut(im_out3);


/////CHAPTER 1

  chapter_1 = createVideo('./assets_new/video/segnaposto.mp4');
  chapter_1.hide();

  rin_vision = createVideo('./assets_new/video/rin-vision.mp4');
  rin_vision.hide();

///////////checkbox

  checkbox = createCheckbox('I accept the sexy rulez <3', false);
  checkbox.position((width/2) - checkbox.width/9, height * 8 / 12 - 60);
  //checkbox.changed(myCheckedEvent);
  checkbox.style('color: rgba(53, 28, 117, 1); font-size: 25px ; font-family: Nunito; text-align : right');
  checkbox.class('checky');
  // checkbox.style('font-size', '25px');
  // checkbox.style('font-family', 'Nunito');
  // checkbox.style('text-align', 'right');
  checkbox.hide();


/////AFTER RIN Vision

  rin = loadImage("./assets_new/char/rin.png");
  rin_worried = loadImage("./assets_new/char/rin2.png");
  rin_talk = loadImage("./assets_new/char/rin3.png");

////////////////////ARCHIVE DESKTOP
  folder = createImg("./assets_new/img/folder.png");
  folder.position(windowWidth/2, windowHeight/2);
  folder.doubleClicked(apri_cartella);
  folder.size(179 * 0.6, 156 * 0.6);
  folder.hide();

  condom_bin = createImg("./assets_new/img/condom_bin.png");
  condom_bin.position(windowWidth * 4/5 - 45, windowHeight * 9/13);
  condom_bin.size(158 * 0.6, 179 * 0.6);
  condom_bin.doubleClicked(win_error);
  condom_bin.hide();

  hazard = createImg("./assets_new/img/hazard.png");
  hazard.position(windowWidth * 2/9, windowHeight/4);
  hazard.size(165 * 0.6, 163 * 0.6);
  hazard.doubleClicked(revolution);
  hazard.hide();


  page_1 = loadImage("./assets_new/img/desktop_contents/page_1.png");
  page_2 = loadImage("./assets_new/img/desktop_contents/page_2.png");
  alert_1 = loadImage("./assets_new/img/desktop_contents/alert.png");
  alert_2 = loadImage("./assets_new/img/desktop_contents/alert_2.png");

  albtn_1 = createImg("./assets_new/img/desktop_contents/albtn_1.png");
  albtn_1.position(0, 0);
  albtn_1.size(1920 * 0.75, 1080 * 0.75);
  albtn_1.mousePressed(next_rev);
  albtn_1.hide();

  albtn_2 = createImg("./assets_new/img/desktop_contents/albtn_2.png");
  albtn_2.position(0, 0);
  albtn_2.size(1920 * 0.75, 1080 * 0.75);
  albtn_2.mousePressed(next_rev2);
  albtn_2.hide();

  next_page = createImg("./assets_new/img/desktop_contents/arrow_libro.png");
  next_page.position(0, 0);
  next_page.size(1920 * 0.75, 1080 * 0.75);
  next_page.mousePressed(page);
  next_page.hide();

  chiudi = createImg("./assets_new/img/desktop_contents/chiudi_libro.png");
  chiudi.position(0, 0);
  chiudi.size(1920 * 0.75, 1080 * 0.75);
  chiudi.mousePressed(chiudifile);
  chiudi.hide();

  /////////////AUDIO
  suono = loadSound('./assets_new/audio/Windows_error.mp3');
  suono.stop();


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

  if(start == true && go_on == 0){

    image(chapter_1, 0, 0, windowWidth, windowHeight);
    about.hide();

  }

  if(iniziamo == true && go_on == 0){

    image(rin_vision, 0, 0, windowWidth, windowHeight);

  }

  if(press_enter == true && go_on == 0){

    background(0);

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
   fill(212, 255, 164, fade);
   textSize(30);
   text(enter, windowWidth/2, windowHeight/2);
   pop();



  }



  //////AFTER RIN VISION

  if(go_on == 1){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
    image(rin_worried, windowWidth * 3/5 , windowHeight - rin_worried.width/2, rin_worried.width/2, rin_worried.height/2 );

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
    text_box = "Oh geez, what the hell was that?! It must be another one of my crazy sexy visions...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    //PRESS TO GO ON

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
    textAlign(LEFT);
    fill(252, 252, 167, fade);
    textSize(20);
    text(enter, windowWidth/10 + 50, windowHeight - 223);
    pop();

    //noLoop();

  }

  if(go_on == 2){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
    image(rin_worried, windowWidth * 3/5 , windowHeight - rin_worried.width/2, rin_worried.width/2, rin_worried.height/2 );

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
    text_box = "...man I really have to stop with flower infusions at night, they f**k up my head.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 3){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "Oh, hi " + player_name + "! I didn’t see you there! You must excuse me, but I just had the weirdest vision...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 4){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "Let me introduce myself. My name is Rin, I live in Privacy Land and I work for the government.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 4){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "I am a the guardian of Sexyverse top secret archives. As you can tell, privacy is my speciality!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 5){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "Wanna learn more hot stuff about me? Check out my IG account @fabolousrin, you won’t regret it!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 6){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "About earlier... sometimes I see things  and after a while they really happen!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 7){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = player_name + "... I might be going nuts, but this vision gave me the chills, I swear!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 7){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "We need to understand what it means, I fear the future of the Sexyverse might be in danger!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 8){

    image(rin_lab, 0, 0, windowWidth, windowHeight);
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
    text_box = "Let’s go in Privacy sex archive, I’m sure we’ll find something useful!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }


  ///////////////////////////////////////////////Archive

  if(go_on == 9){

    image(archive_door, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = player_name + " wait! Not everyone can enter Sexyverse’s most secret archive...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 10){

    image(archive_door, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "...First I need to understand how sexy you are! I need to know I can trust you!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 11){

    image(archive_door, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "Please, fill out this form on the door and read the archive rules. ";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 11){

    image(archive_door, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "Please, fill out this form on the door and read the archive rules. ";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 11){

    // image(archive_door, 0, 0, windowWidth, windowHeight);
    // image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );
    //
    // //TEXT BOX
    // push();
    // fill('rgba(69, 66, 168, 1)');
    // stroke('rgba(252, 252, 167, 1)');
    // strokeWeight(1.5);
    // rect(windowWidth/10, windowHeight - 200, 650, 239/2, 235/2, 235/2);
    // pop();
    //
    // image(star_M, windowWidth/10 -  5, windowHeight - 215, star_M.width/2, star_M.height/2);
    // image(star_S, windowWidth/10 + 615 - star_S.width/4, windowHeight - 235 + star_S.height/4 + 239/2 , star_S.width/2, star_S.height/2);
    // image(star_S, windowWidth/10 + star_S.width/2, windowHeight - 200 -  star_S.height/4, star_S.width/2, star_S.height/2);
    //
    // //NAME CHARACTER
    // push();
    // rin_name = "RIN";
    // textFont('Nunito');
    // textStyle(BOLD);
    // textAlign(LEFT);
    // textSize(20);
    // fill('rgba(252, 252, 167, 1)');
    // text(rin_name, windowWidth/10 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
    // pop();

    background(0);

    //TEXT
    push();
    text_box = "Questo è un segna posto in attesa di capire come saranno le rulez";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 12){

    image(archive_door, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "Great! I'm glad you accepted, you're so hot! Welcome in privacy sex archive!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }


//////////////ENTERING THE  ARCHIVE
  if(go_on == 13){

    image(archive, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "The archive is full of books and objects that tell sexyverse stories.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 14){

    image(archive, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "Most of them have been digitalized and are now accessible on my Iplug pro computer.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 14){

    image(archive, 0, 0, windowWidth, windowHeight);
    image(rin, windowWidth * 3/5 , windowHeight - rin.width, rin.width/2, rin.height/2 );

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
    text_box = "Give it a grope... ehm... I mean search through the files to find information to decode my vision.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    if (fade < 10 ){
      fadeAmount = 3;
    }
    if (fade > 255){
      fadeAmount = -3;
    }
    fade += fadeAmount;

   push();
   enter = "Press ENTER to get to the Iplug Pro";
   textFont('Nunito');
   textAlign(LEFT);
   fill(252, 252, 167, fade);
   textSize(20);
   text(enter, windowWidth/10 + 50, windowHeight - 223);
   pop();


  }

  if(go_on == 15){

    press_enter  = false;
    image(archive, 0, 0, windowWidth, windowHeight);

////////////////black layer
    push();
    fill('rgba(0, 0, 0, 0.5)');
    rect(0,  0, windowWidth, windowHeight);
    pop();


/////////////DESKTOP
    condom_bin.show();
    folder.show();
    hazard.show();

    push();
    label_1 =  "condom bin";
    textFont('Nunito');
    textAlign(CENTER);
    textSize(16);
    fill('white');
    text(label_1, windowWidth * 4/5 - 45, windowHeight * 9/13 + 100, 158 * 0.6, 179*0.6);
    pop();

    push();
    label_2 =  "AWKW_chaces";
    textFont('Nunito');
    textAlign(CENTER);
    textSize(16);
    fill('white');
    text(label_2, windowWidth * 2/9, windowHeight/4 + 80, 165 * 0.6, 163 * 0.6);
    pop();

    push();
    label_3 =  "TOTEM.pdf";
    textFont('Nunito');
    textAlign(CENTER);
    textSize(16);
    fill('white');
    text(label_3, windowWidth/2, windowHeight/2 + 80, 179 * 0.6, 156 * 0.6);
    pop();

    if(totem_pdf == true){

      folder.hide();
      condom_bin.hide();
      hazard.hide();

      next_page.show();

      push();
      scale(0.75);
      image(page_1, 0, 0);
      pop();

    }

    if(totem_pdf2 == true){

      totem_pdf = false;
      folder.hide();
      condom_bin.hide();
      hazard.hide();

      next_page.hide();
      chiudi.show();

      push();
      scale(0.75);
      image(page_2, 0, 0);
      pop();

    }

    if(rev_1 == true){

      folder.hide();

      push();
      scale(0.75);
      image(alert_1, 0, 0);
      pop();

      albtn_1.show();

    }

    if(rev_2 == true){

      folder.hide();

      push();
      scale(0.75);
      image(alert_1, 0, 0);
      image(alert_2, 0, 0);
      pop();

      albtn_1.show();
      albtn_2.show();

    }

    if(info_totem == true && info_revolution == true){

      press_enter = true;

      if (fade < 10 ){
        fadeAmount = 3;
      }
      if (fade > 255){
        fadeAmount = -3;
      }
      fade += fadeAmount;
     // console.log(fade);

     push();
     enter = "When you're okay press ENTER to go on";
     textFont('Nunito');
     textAlign(CENTER);
     fill(212, 255, 164, fade);
     textSize(30);
     text(enter, windowWidth/2 , windowHeight * 6/7);
     pop();


    }

  }

  if(go_on == 16){

    folder.hide();
    condom_bin.hide();
    hazard.hide();

    image(archive, 0, 0, windowWidth, windowHeight);
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
    text_box = "Holy pussies! " + player_name +" thank you for your precious help! I think we might be in trouble...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 17){

    image(archive, 0, 0, windowWidth, windowHeight);
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
    text_box = "Someone will soon get the lost awkwardness totem and activate the G-spot legend!";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 18){

    image(archive, 0, 0, windowWidth, windowHeight);
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
    text_box = "This has to be kept in safe hands. We must tell Himeros! He’ll know what to do.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 19){

    image(archive, 0, 0, windowWidth, windowHeight);
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
    text_box = "Himeros was the governor of Central Land, today he is the most knowledgeable in the Sexyverse.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }

  if(go_on == 20){

    image(archive, 0, 0, windowWidth, windowHeight);
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
    text_box = "I met him totally by chance during an intensive tantric sex workshop. He lives in Diversity Land.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(text_box, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


  }


}

function name() {

  player_name = yourname.value();
  yourname.hide();
  button.hide();
  console.log(player_name);

  start = true;

  chapter_1.play();
  chapter_1.onended(video_end);

}

function video_end(){

  iniziamo = true;
  start = false;

  rin_vision.play();
  rin_vision.onended(vision_end);

}

function vision_end(){

  iniziamo = false;
  press_enter = true;

}



function keyPressed(){

  if(keyCode == 13){

    if(press_enter == true){

      go_on++;

    }
  }
}

function apri_cartella(){

  console.log("l'ho aperta");
  totem_pdf =  true;

}

function revolution(){

  rev_1 = true;

}

function next_rev(){

  rev_2 = true;

}

function next_rev2(){

  rev_1 = false;
  rev_2 = false;
  info_revolution = true;
  albtn_1.hide();
  albtn_2.hide();

}

function page(){

  totem_pdf2 = true;

}

function chiudifile(){

  totem_pdf2 = false;
  chiudi.hide();
  info_totem = true;

}

function win_error(){

  suono.play();

}

 function about_page(){

   window.open("about.html", "_blank");

 }

 function about_over(){

   about.style("text-decoration: underline;");

 }

 function about_out(){

   about.style("color:rgba(212, 255, 164, 1); font-size:20px; font-family:Nunito; text-decoration: none;");

 }


//window resize
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background('black');

}

// function im_over(){
//
//   she.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_out(){
//
//   she.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_over1(){
//
//   he.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_out1(){
//
//   he.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_over2(){
//
//   they.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_out2(){
//
//   they.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_over3(){
//
//   ze.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0.3); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function im_out3(){
//
//   ze.style("border-radius: 50px; border: 1px solid #D4FFA4; background:rgba(212, 255, 164, 0); color: #D4FFA4; width: 160px; height: 43px; padding-left: 10px; font-size: 17px; font-family:Nunito;");
//
// }
//
// function he_select(){
//
//   he = true;
//   she = false;
//   ze = false;
//   they = false;
//
//   he.style
//
// }
