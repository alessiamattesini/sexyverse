var posso_andare = false;
var go_on = 0;

var player_name;

var start = false;
var video =  false;
var press = false;

var sticazzi = false;
var firma = false;

var totem_pdf = false;
var totem_pdf2 = false;
var info_totem = false;
var info_revolution = false;

var rev_1 =  false;
var rev_2 =  false;

var travel = false;
var diversity = false;

var daje = false;
var emergency = false;

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

  welcome = createImg("./assets/img/WELCOME.png");
  welcome.position(0,0);
  welcome.show();

  vision = loadImage("./assets/img/Vision.png");
  rin_worried = loadImage("./assets/img/characters/Rin_worried.png");
  rin_talk = loadImage("./assets/img/characters/rin_talk.png");
  studio_rin = loadImage("./assets/img/studio_rin.png");
  privacy = loadImage("./assets/img/privacy.png");
  rin_intera = loadImage("./assets/img/characters/Rin_intera.png");
  rin_lab = loadImage("./assets/img/rin_lab.png");
  archivio = loadImage("./assets/img/archivio.png");
  page_1 = loadImage("./assets/img/page_1.png");
  page_2 = loadImage("./assets/img/page_2.png");
  alert_1 = loadImage("./assets/img/alert.png");
  alert_2 = loadImage("./assets/img/alert_2.png");
  //mappa = loadImage("./assets/img/mappa.png");
  diversity_land = loadImage("./assets/img/diversity_land.png");
  //albtn_1 = loadImage("./assets/img/albtn_1.png");
  //albtn_2 = loadImage("./assets/img/albtn_2.png");
  himeros_garden = loadImage("./assets/img/himerosgarden.png");
  himeros = loadImage("./assets/img/characters/himeros.png");
  phone_scene = loadImage("./assets/img/phone_scene.png");

  folder = createImg("./assets/img/folder.png");
  folder.position(windowWidth/2, windowHeight/2);
  folder.doubleClicked(apri_cartella);
  folder.size(179 * 0.6, 156 * 0.6);
  folder.hide();

  condom_bin = createImg("./assets/img/condom_bin.png");
  condom_bin.position(windowWidth * 4/5 - 45, windowHeight * 9/13);
  condom_bin.size(158 * 0.6, 179 * 0.6);
  condom_bin.hide();

  hazard = createImg("./assets/img/hazard.png");
  hazard.position(windowWidth * 2/9, windowHeight/4);
  hazard.size(165 * 0.6, 163 * 0.6);
  hazard.doubleClicked(revolution);
  hazard.hide();

  albtn_1 = createImg("./assets/img/albtn_1.png");
  albtn_1.position(0, 0);
  albtn_1.size(1920 * 0.75, 1080 * 0.75);
  albtn_1.mousePressed(next_rev);
  albtn_1.hide();

  albtn_2 = createImg("./assets/img/albtn_2.png");
  albtn_2.position(0, 0);
  albtn_2.size(1920 * 0.75, 1080 * 0.75);
  albtn_2.mousePressed(next_rev2);
  albtn_2.hide();

  chapter_1 = createVideo("./assets/video/segnaposto.mp4");
  chapter_1.hide();


  //about
  // about = createP("about");
  // about.position(windowWidth - 100, 45);
  // about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito;");
  // about.mousePressed(about_page);

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
  checkbox.position((width/2) - checkbox.width/9, height * 8 / 12 - 60);
  checkbox.changed(myCheckedEvent);
  checkbox.style('color', 'rgba(53, 28, 117, 1)');
	checkbox.style('font-size', '25px');
	checkbox.style('font-family', 'Nunito');
	checkbox.style('text-align', 'right');
  checkbox.hide();


  //////////////////chiudi

  next_page = createImg("./assets/img/arrow_libro.png");
  next_page.position(0, 0);
  next_page.size(1920 * 0.75, 1080 * 0.75);
  next_page.mousePressed(page);
  next_page.hide();

  chiudi = createImg("./assets/img/chiudi_libro.png");
  chiudi.position(0, 0);
  chiudi.size(1920 * 0.75, 1080 * 0.75);
  chiudi.mousePressed(chiudifile);
  chiudi.hide();

  ///////////////////////////////// MENU
   menu = createImg("./assets/img/menu.png");
   menu.position(windowWidth - 40 - 93*0.75, 40);
   menu.size(93 * 0.75, 93 * 0.75);
   //menu.style('filter: drop-shadow(0 0 0.75rem rgb(255, 255, 255));');
   //menu.mousePressed(open_menu);
   menu.show();
  //
   menu_glow = createImg("./assets/img/menu_glow.png");
   menu_glow.position(windowWidth - 40 - 93*0.75, 40 + (163 - 93)/2);
   menu_glow.size(93 * 0.75, 93 * 0.75);
   menu_glow.style('filter: drop-shadow(0 0 0.75rem rgb(255, 255, 255));');
   menu_glow.mousePressed(open_menu);
   menu_glow.hide();
  //
   icona_mappa = createImg("./assets/img/icona_mappa.png");
   icona_mappa.position(windowWidth - 40 - 93*0.75, 40 + 93*0.75 + 50);
   icona_mappa.size(93 * 0.75, 93 * 0.75);
   icona_mappa.mousePressed(open_mappa);
   icona_mappa.hide();

   mappa = createImg("./assets/img/mappa.png");
   mappa.position(0, 0);
   mappa.size(windowWidth, windowHeight);
   mappa.mousePressed(travel_diversity);
   mappa.hide();

}

function draw() {

  //about.mouseOver(miprendiingiro);
  //background(welcome);

  //video chapter 1
  if(start == true && video == true && go_on == 0){

    welcome.hide();
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
    enter = "Press ENTER to go on";
    textFont('Nunito');
    textAlign(LEFT);
    fill(212, 255, 164, fade);
    textSize(20);
    text(enter, windowWidth/10 + 50, windowHeight - 223);
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
    //image(studio_rin, 0, 0, windowWidth, windowHeight);

    image(rin_lab, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.65);
    image(rin_intera, windowWidth - 70, windowHeight  -  500);
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
    //image(studio_rin, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.65);
    image(rin_intera, windowWidth - 70, windowHeight  -  500);
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
    sticazzi =  true;
    setTimeout(vai, 200);


  }

  if( go_on == 6 && sticazzi == true){

    image(privacy, 0, 0, windowWidth, windowHeight);
    sticazzi  = false;

  }

  if(go_on == 6){

    checkbox.show();
    // archive.show();
    // rule_1.show();
    // rule_2.show();
    // //rule_3.show();
    // sign.show();

    posso_andare = false;
    setTimeout(vai, 200);


  }

  if(go_on == 7 && checkbox.checked() && firma == true){

    checkbox.hide();
    // archive.hide();
    // rule_1.hide();
    // rule_2.hide();
    // //rule_3.hide();
    // sign.hide();

    image(rin_lab, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.65);
    image(rin_intera, windowWidth - 70, windowHeight  -  500);
    pop();

    // TEXT BOX
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
    great = "Great! I'm glad you accepted, you're so hot! Welcome in the Sexyverse archive. Now let's get to work...";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(great, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    posso_andare = false;
    setTimeout(vai, 200);

  }


  if(go_on == 8){

    checkbox.hide();
    // archive.hide();
    // rule_1.hide();
    // rule_2.hide();
    // //rule_3.hide();
    // sign.hide();

    image(archivio, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.65);
    image(rin_intera, windowWidth - 70, windowHeight  -  500);
    pop();

    // TEXT BOX
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
    full = "The archive is full of books and objects that tell Sexyverse's stories.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(full, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    posso_andare = false;
    setTimeout(vai, 200);

  }

  if(go_on ==  9){

    // TEXT BOX
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

    push();
    give = "Give it a grope...e... I meant point and click to find useful information to decode my vision.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(give, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();

    posso_andare = false;
    setTimeout(vai, 200);

  }

  if(go_on == 10){

    image(archivio, 0, 0, windowWidth, windowHeight);

    push();
    fill('rgba(0, 0, 0, 0.5)');
    rect(0,  0, windowWidth, windowHeight);
    pop();

    folder.show();
    condom_bin.show();
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


    posso_andare = false;

    if(info_totem == true && info_revolution == true){

      posso_andare = true;

      if (fade < 10 ){
        fadeAmount = 3;
      }
      if (fade > 255){
        fadeAmount = -3;
      }
      fade += fadeAmount;
     // console.log(fade);

     push();
     enter = "Press ENTER to go on";
     textFont('Nunito');
     textAlign(CENTER);
     fill(212, 255, 164, fade);
     textSize(30);
     text(enter, windowWidth/2 , windowHeight - 200);
     pop();


    }
    //setTimeout(vai, 200);

  }

  if(go_on == 11 && info_totem == true &&  info_revolution ==  true){

    image(archivio, 0, 0, windowWidth, windowHeight);

    push();
    scale(0.5);
    image(rin_worried, windowWidth + 200, windowHeight  -  996/6);
    pop();

    folder.hide();
    condom_bin.hide();
    hazard.hide();

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
    wtf = "WTF, oopsie, I think we might be in trouble.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(wtf, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);

  }

  if (go_on == 12){

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
    must = "Someone’s going to get the lost Awkwardness totem! We must tell Himeros, he’ll know what to do.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(must, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);

  }

  if (go_on == 13){

    image(archivio, 0, 0, windowWidth, windowHeight);

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
    governor = "Himeros was the governor of Central Land, and today he is the most knowledgeable in the Sexyverse. ";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(governor, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);

  }

  if(go_on == 14){

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
    met = "I met him totally by chance during an intensive tantric sex workshop.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(met, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);

  }

  if(go_on == 15){

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
    askhim = "He lives in diversity, let's go and ask him about Awkardness totem.";
    textFont('Nunito');
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text(askhim, windowWidth/10 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
    pop();


    posso_andare = false;
    setTimeout(vai, 200);

  }

   if(go_on == 16){

     image(archivio, 0, 0, windowWidth, windowHeight);

     push();
     fill('rgba(0, 0, 0, 0.5)');
     rect(0,  0, windowWidth, windowHeight);
     pop();

     menu.hide();
     menu_glow.show();

     posso_andare = false;

   }

   if(travel == true){

   //image(mappa, 0, 0, windowWidth, windowHeight);
   menu_glow.hide();
   mappa.show();
   icona_mappa.position(windowWidth - 40 - 93*0.75, 40);


   }

   if(diversity == true){

     menu_glow.hide();
     mappa.hide();
     image(diversity_land, 0, 0, windowWidth, windowHeight);
     icona_mappa.hide();

     setTimeout(go, 2000);

   }

   if(daje == true){

     image(himeros_garden, 0, 0, windowWidth, windowHeight);

     push();
     scale(0.65);
     image(rin_intera, windowWidth + 210, windowHeight  -  500);
     pop();

     push();
     scale(0.65);
     image(himeros, 70, windowHeight  -  580);
     pop();

     //TEXT BOX
     push();
     fill('rgba(69, 66, 168, 1)');
     stroke('rgba(212, 255, 164, 1)');
     strokeWeight(1.5);
     rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
     pop();

     //NAME CHARACTER
     push();
     rin_name = "RIN";
     textFont('Nunito');
     textStyle(BOLD);
     textAlign(LEFT);
     textSize(20);
     fill('rgba(212, 255, 164, 1)');
     text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
     pop();

     //TEXT
     push();
     governor = "Himeros you will never guess what I saw! I fear the worst is about to come upon our galaxy.";
     textFont('Nunito');
     textAlign(LEFT);
     fill(255);
     textSize(20);
     text(governor, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
     pop();

     posso_andare = false;
     setTimeout(vai, 200);


   }

   if(go_on == 17){

     daje = false;

     image(himeros_garden, 0, 0, windowWidth, windowHeight);

     push();
     scale(0.65);
     image(rin_intera, windowWidth + 210, windowHeight  -  500);
     pop();

     push();
     scale(0.65);
     image(himeros, 70, windowHeight  -  580);
     pop();

     //TEXT BOX
     push();
     fill('rgba(69, 66, 168, 1)');
     stroke('rgba(212, 255, 164, 1)');
     strokeWeight(1.5);
     rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
     pop();

     //NAME CHARACTER
     push();
     rin_name = "RIN";
     textFont('Nunito');
     textStyle(BOLD);
     textAlign(LEFT);
     textSize(20);
     fill('rgba(212, 255, 164, 1)');
     text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
     pop();

     //TEXT
     push();
     governor = "Someone is intent on stealing the Awkwardness totem!";
     textFont('Nunito');
     textAlign(LEFT);
     fill(255);
     textSize(20);
     text(governor, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
     pop();

     posso_andare = false;
     setTimeout(vai, 200);


   }

   if(go_on == 18){

     //TEXT BOX
     push();
     fill('rgba(147, 39, 143, 1)');
     stroke('rgba(255, 174, 53, 1)');
     strokeWeight(1.5);
     rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
     pop();

     //NAME CHARACTER
     push();
     rin_name = "HIMEROS";
     textFont('Nunito');
     textStyle(BOLD);
     textAlign(LEFT);
     textSize(20);
     fill('rgba(255, 174, 53, 1)');
     text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
     pop();

     //TEXT
     push();
     governor = "For all the giant cocks Rin! This is superb! WOW.";
     textFont('Nunito');
     textAlign(LEFT);
     fill(255);
     textSize(20);
     text(governor, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
     pop();

     posso_andare = false;
     setTimeout(vai, 200);

   }

   if(go_on == 19){

     //TEXT BOX
     push();
     fill('rgba(147, 39, 143, 1)');
     stroke('rgba(255, 174, 53, 1)');
     strokeWeight(1.5);
     rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
     pop();

     //NAME CHARACTER
     push();
     rin_name = "HIMEROS";
     textFont('Nunito');
     textStyle(BOLD);
     textAlign(LEFT);
     textSize(20);
     fill('rgba(255, 174, 53, 1)');
     text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
     pop();

     //TEXT
     push();
     governor = "It means we finally have a chance to help AWKW, once and for all Sexyverse will be at peace. Ready for the adventure?";
     textFont('Nunito');
     textAlign(LEFT);
     fill(255);
     textSize(20);
     text(governor, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
     pop();

     posso_andare = false;
     setTimeout(vai, 200);

   }

   if(go_on == 20){

     //TEXT BOX
     push();
     fill('rgba(69, 66, 168, 1)');
     stroke('rgba(212, 255, 164, 1)');
     strokeWeight(1.5);
     rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
     pop();

     //NAME CHARACTER
     push();
     rin_name = "RIN";
     textFont('Nunito');
     textStyle(BOLD);
     textAlign(LEFT);
     textSize(20);
     fill('rgba(212, 255, 164, 1)');
     text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
     pop();

     //TEXT
     push();
     governor = "Oh it's my phone! an urgent message has arrived.";
     textFont('Nunito');
     textAlign(LEFT);
     fill(255);
     textSize(20);
     text(governor, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
     pop();

     posso_andare = false;
     setTimeout(vai, 200);

   }

   if(go_on == 21){

     //TEXT BOX
     push();
     fill('rgba(147, 39, 143, 1)');
     stroke('rgba(255, 174, 53, 1)');
     strokeWeight(1.5);
     rect(windowWidth/2 - 650/2, windowHeight - 200, 650, 239/2, 235/2, 235/2);
     pop();

     //NAME CHARACTER
     push();
     rin_name = "HIMEROS";
     textFont('Nunito');
     textStyle(BOLD);
     textAlign(LEFT);
     textSize(20);
     fill('rgba(255, 174, 53, 1)');
     text(rin_name, windowWidth/2 - 650/2 + 50, windowHeight - 203 + 20, 600, 239/2 - 50);
     pop();

     //TEXT
     push();
     governor = "Mmm...how strange! It vibrates just like my last anal plug.";
     textFont('Nunito');
     textAlign(LEFT);
     fill(255);
     textSize(20);
     text(governor, windowWidth/2 - 650/2 + 50, windowHeight - 173 + 20, 550, 239/2 - 50);
     pop();

     posso_andare = false;
     setTimeout(vai, 200);

   }

   if(go_on == 22){

     image(phone_scene, 0, 0, windowWidth, windowHeight);

    push();
    enter = "To be continued... Are you curious? Check @thereal_himeros on IG.";
    textFont('Nunito');
    textAlign(CENTER);
    fill('rgba(212, 255, 164, 1)');
    textSize(30);
    text(enter, windowWidth/2, windowHeight - 150);
    pop();


     posso_andare = false;


   }

   // if(go_on == 23){
   //
   //   image(himeros_garden, 0, 0, windowWidth, windowHeight);
   //
   // }


}



function name(){

    player_name = yourname.value();
    start = true;
    posso_andare = true;
    yourname.hide();
    write.hide();
    button.hide();

  }

  function keyPressed(){

    if(keyCode == 13){

      if(posso_andare == true){

        go_on++;

      }

    }

  }


 // function miprendiingiro(){
 //
 //     about.style("color:rgb(224, 254, 24); font-size:20px; font-family:Nunito; text-decoration: underline;");
 //
 //   }


// function about_page(){
//
//   window.open("about.html", "_self");
//
// }

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

function apri_cartella(){

  console.log("l'ho aperta");
  totem_pdf =  true;

}

function myCheckedEvent() {
  if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}



function mouseDragged() {


  if(go_on == 6){

    push();
    strokeWeight(3);
    stroke('black');
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
    firma =  true;
    console.log("che due coglioni");


  }
}

function page(){

  totem_pdf2 = true;

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

function chiudifile(){

  totem_pdf2 = false;
  chiudi.hide();
  info_totem = true;

}


 function open_menu(){

   icona_mappa.show();

 }

 function open_mappa(){

   travel = true;

 }

 function travel_diversity(){

   diversity = true;

 }

 function go(){

   daje = true;

 }

//window resize

function windowResized(){

      resizeCanvas(windowWidth, windowHeight);
      background('black');

}
