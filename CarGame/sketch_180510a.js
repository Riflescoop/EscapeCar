var layer_1_count=0;
var layer_2_count=0;
var layer_3_count=0;
var matches_count=0;
var screwdriversuccess_count=0;
var screwdriverfail_count=0;
var hammersuccess_count=0;
var hammerfail_count=0;
var iphonenothing_count=0;
var iphonefail_count=0;
var iphonesuccess_count=0;
var watermelonfail_count=0;
var watermelonsuccess_count=0;
var watermelonnothing_count=0;
var lockpicksuccess_count=0;
var lockpickfail_count=0;
var shoefail_count=0;
var shoesuccess_count=0;
var headfail_count=0;
var headsuccess_count=0;

var title_bool=true;
var layer_1_bool=false;
var layer_2_bool=false;
var layer_3_bool=false;
var match_bool=false;
var screwdriversuccess_bool=false;
var screwdriverfail_bool=false;
var hammersuccess_bool=false;
var hammerfail_bool=false;
var iphonenothing_bool=false;
var iphonefail_bool=false;
var iphonesuccess_bool=false;
var watermelonnothing_bool=false;
var watermelonfail_bool=false;
var watermelonsuccess_bool=false;
var lockpickfail_bool=false;
var lockpicksuccess_bool=false;
var shoefail_bool=false;
var shoesuccess_bool=false;
var headfail_bool=false;
var headsuccess_bool=false;
var congratulations_bool=false;
var fail_bool=false;


function preload() {
  congratulations_img=loadImage('Congratulations.png');
  fail_img=loadImage('fail.png');
  title_img=loadImage('title.png');
  
  layer_1_img0=loadImage('layer_1/000.jpg');
  layer_1_img1=loadImage('layer_1/001.jpg');
  layer_1_img2=loadImage('layer_1/002.jpg');
  layer_1_img3=loadImage('layer_1/003.jpg');
  layer_1_img4=loadImage('layer_1/004.jpg');
  
  layer_2_img0=loadImage('layer_2/000.png');
  layer_2_img1=loadImage('layer_2/001.png');
  layer_2_img2=loadImage('layer_2/002.png');
  layer_2_img3=loadImage('layer_2/003.png');
  layer_2_img4=loadImage('layer_2/004.png');
  
  layer_3_img0=loadImage('layer_3/000.png');
  layer_3_img1=loadImage('layer_3/001.png');
  layer_3_img2=loadImage('layer_3/002.png');
  layer_3_img3=loadImage('layer_3/003.png');
  layer_3_img4=loadImage('layer_3/004.png');
  
  matches_img0=loadImage('matches/000.png');
  matches_img1=loadImage('matches/001.png');
  matches_img2=loadImage('matches/002.png');
  matches_img3=loadImage('matches/003.png');
  matches_img4=loadImage('matches/004.png');
  matches_img5=loadImage('matches/005.png');
  matches_img6=loadImage('matches/006.png');
  matches_img7=loadImage('matches/007.png');
  matches_img8=loadImage('matches/008.png');
  matches_img9=loadImage('matches/009.png');
  matches_img10=loadImage('matches/010.png');
  matches_img11=loadImage('matches/011.png');
  
  screwdriversuccess_img0=loadImage('screwdriversuccess/000.png');
  screwdriversuccess_img1=loadImage('screwdriversuccess/001.png');
  screwdriversuccess_img2=loadImage('screwdriversuccess/002.png');
  screwdriversuccess_img3=loadImage('screwdriversuccess/003.png');
  screwdriversuccess_img4=loadImage('screwdriversuccess/004.png');
  screwdriversuccess_img5=loadImage('screwdriversuccess/005.png');
  screwdriversuccess_img6=loadImage('screwdriversuccess/006.png');
  screwdriversuccess_img7=loadImage('screwdriversuccess/007.png');
  screwdriversuccess_img8=loadImage('screwdriversuccess/008.png');
  screwdriversuccess_img9=loadImage('screwdriversuccess/009.png');
  screwdriversuccess_img10=loadImage('screwdriversuccess/010.png');
  screwdriversuccess_img11=loadImage('screwdriversuccess/011.png');
  screwdriversuccess_img12=loadImage('screwdriversuccess/012.png');
  
  screwdriverfail_img0=loadImage('screwdriverfail/000.png');
  screwdriverfail_img1=loadImage('screwdriverfail/001.png');
  screwdriverfail_img2=loadImage('screwdriverfail/002.png');
  screwdriverfail_img3=loadImage('screwdriverfail/003.png');
  screwdriverfail_img4=loadImage('screwdriverfail/004.png');
  screwdriverfail_img5=loadImage('screwdriverfail/005.png');
  screwdriverfail_img6=loadImage('screwdriverfail/006.png');
  screwdriverfail_img7=loadImage('screwdriverfail/007.png');
  screwdriverfail_img8=loadImage('screwdriverfail/008.png');
  screwdriverfail_img9=loadImage('screwdriverfail/009.png');
  screwdriverfail_img10=loadImage('screwdriverfail/010.png');
  screwdriverfail_img11=loadImage('screwdriverfail/011.png');
  
  iphonenothing_img0=loadImage('iphonenothing/000.png');
  iphonenothing_img1=loadImage('iphonenothing/001.png');
  iphonenothing_img2=loadImage('iphonenothing/002.png');
  iphonenothing_img3=loadImage('iphonenothing/003.png');
  iphonenothing_img4=loadImage('iphonenothing/004.png');
  iphonenothing_img5=loadImage('iphonenothing/005.png');
  iphonenothing_img6=loadImage('iphonenothing/006.png');
  iphonenothing_img7=loadImage('iphonenothing/007.png');
  iphonenothing_img8=loadImage('iphonenothing/008.png');
  iphonenothing_img9=loadImage('iphonenothing/009.png');
  iphonenothing_img10=loadImage('iphonenothing/010.png');
  iphonenothing_img11=loadImage('iphonenothing/011.png');
  iphonenothing_img12=loadImage('iphonenothing/012.png');
  iphonenothing_img13=loadImage('iphonenothing/013.png');
  iphonenothing_img14=loadImage('iphonenothing/014.png');
  iphonenothing_img15=loadImage('iphonenothing/015.png');
  
  watermelonnothing_img0=loadImage('watermelonnothing/000.png');
  watermelonnothing_img1=loadImage('watermelonnothing/001.png');
  watermelonnothing_img2=loadImage('watermelonnothing/002.png');
  watermelonnothing_img3=loadImage('watermelonnothing/003.png');
  watermelonnothing_img4=loadImage('watermelonnothing/004.png');
  watermelonnothing_img5=loadImage('watermelonnothing/005.png');
  watermelonnothing_img6=loadImage('watermelonnothing/006.png');
  watermelonnothing_img7=loadImage('watermelonnothing/007.png');
  watermelonnothing_img8=loadImage('watermelonnothing/008.png');
  watermelonnothing_img9=loadImage('watermelonnothing/009.png');
  watermelonnothing_img10=loadImage('watermelonnothing/010.png');
  watermelonnothing_img11=loadImage('watermelonnothing/011.png');
  
  iphonefail_img0=loadImage('iphonefail/000.png');
  iphonefail_img1=loadImage('iphonefail/001.png');
  iphonefail_img2=loadImage('iphonefail/002.png');
  iphonefail_img3=loadImage('iphonefail/003.png');
  iphonefail_img4=loadImage('iphonefail/004.png');
  iphonefail_img5=loadImage('iphonefail/005.png');
  iphonefail_img6=loadImage('iphonefail/006.png');
  iphonefail_img7=loadImage('iphonefail/007.png');
  iphonefail_img8=loadImage('iphonefail/008.png');
  iphonefail_img9=loadImage('iphonefail/009.png');
  iphonefail_img10=loadImage('iphonefail/010.png');
  iphonefail_img11=loadImage('iphonefail/011.png');
  iphonefail_img12=loadImage('iphonefail/012.png');
  iphonefail_img13=loadImage('iphonefail/013.png');
  iphonefail_img14=loadImage('iphonefail/014.png');
  iphonefail_img15=loadImage('iphonefail/015.png');
  iphonefail_img16=loadImage('iphonefail/016.png');
  iphonefail_img17=loadImage('iphonefail/017.png');
  iphonefail_img18=loadImage('iphonefail/018.png');
  
  iphonesuccess_img0=loadImage('iphonesuccess/000.png');
  iphonesuccess_img1=loadImage('iphonesuccess/001.png');
  iphonesuccess_img2=loadImage('iphonesuccess/002.png');
  iphonesuccess_img3=loadImage('iphonesuccess/003.png');
  iphonesuccess_img4=loadImage('iphonesuccess/004.png');
  iphonesuccess_img5=loadImage('iphonesuccess/005.png');
  iphonesuccess_img6=loadImage('iphonesuccess/006.png');
  iphonesuccess_img7=loadImage('iphonesuccess/007.png');
  iphonesuccess_img8=loadImage('iphonesuccess/008.png');
  iphonesuccess_img9=loadImage('iphonesuccess/009.png');
  iphonesuccess_img10=loadImage('iphonesuccess/010.png');
  iphonesuccess_img11=loadImage('iphonesuccess/011.png');
  iphonesuccess_img12=loadImage('iphonesuccess/012.png');
  iphonesuccess_img13=loadImage('iphonesuccess/013.png');
  iphonesuccess_img14=loadImage('iphonesuccess/014.png');
  iphonesuccess_img15=loadImage('iphonesuccess/015.png');
  iphonesuccess_img16=loadImage('iphonesuccess/016.png');
  
  watermelonfail_img0=loadImage('watermelonfail/000.png');
  watermelonfail_img1=loadImage('watermelonfail/001.png');
  watermelonfail_img2=loadImage('watermelonfail/002.png');
  watermelonfail_img3=loadImage('watermelonfail/003.png');
  watermelonfail_img4=loadImage('watermelonfail/004.png');
  watermelonfail_img5=loadImage('watermelonfail/005.png');
  watermelonfail_img6=loadImage('watermelonfail/006.png');
  watermelonfail_img7=loadImage('watermelonfail/007.png');
  watermelonfail_img8=loadImage('watermelonfail/008.png');
  watermelonfail_img9=loadImage('watermelonfail/009.png');
  watermelonfail_img10=loadImage('watermelonfail/010.png');
  watermelonfail_img11=loadImage('watermelonfail/011.png');

  watermelonsuccess_img0=loadImage('watermelonsuccess/000.png');
  watermelonsuccess_img1=loadImage('watermelonsuccess/001.png');
  watermelonsuccess_img2=loadImage('watermelonsuccess/002.png');
  watermelonsuccess_img3=loadImage('watermelonsuccess/003.png');
  watermelonsuccess_img4=loadImage('watermelonsuccess/004.png');
  watermelonsuccess_img5=loadImage('watermelonsuccess/005.png');
  watermelonsuccess_img6=loadImage('watermelonsuccess/006.png');
  watermelonsuccess_img7=loadImage('watermelonsuccess/007.png');
  watermelonsuccess_img8=loadImage('watermelonsuccess/008.png');
  watermelonsuccess_img9=loadImage('watermelonsuccess/009.png');
  watermelonsuccess_img10=loadImage('watermelonsuccess/010.png');
  watermelonsuccess_img11=loadImage('watermelonsuccess/011.png');
  watermelonsuccess_img12=loadImage('watermelonsuccess/012.png');
  watermelonsuccess_img13=loadImage('watermelonsuccess/013.png');
  watermelonsuccess_img14=loadImage('watermelonsuccess/014.png');
  watermelonsuccess_img15=loadImage('watermelonsuccess/015.png');
  watermelonsuccess_img16=loadImage('watermelonsuccess/016.png');
  
  shoefail_img0=loadImage('shoefail/000.png');
  shoefail_img1=loadImage('shoefail/001.png');
  shoefail_img2=loadImage('shoefail/002.png');
  shoefail_img3=loadImage('shoefail/003.png');
  shoefail_img4=loadImage('shoefail/004.png');
  shoefail_img5=loadImage('shoefail/005.png');
  shoefail_img6=loadImage('shoefail/006.png');
  shoefail_img7=loadImage('shoefail/007.png');
  shoefail_img8=loadImage('shoefail/008.png');
  shoefail_img9=loadImage('shoefail/009.png');
  shoefail_img10=loadImage('shoefail/010.png');
  shoefail_img11=loadImage('shoefail/011.png');
  shoefail_img12=loadImage('shoefail/012.png');
  
  shoesuccess_img0=loadImage('shoesuccess/000.png');
  shoesuccess_img1=loadImage('shoesuccess/001.png');
  shoesuccess_img2=loadImage('shoesuccess/002.png');
  shoesuccess_img3=loadImage('shoesuccess/003.png');
  shoesuccess_img4=loadImage('shoesuccess/004.png');
  shoesuccess_img5=loadImage('shoesuccess/005.png');
  shoesuccess_img6=loadImage('shoesuccess/006.png');
  shoesuccess_img7=loadImage('shoesuccess/007.png');
  shoesuccess_img8=loadImage('shoesuccess/008.png');
  shoesuccess_img9=loadImage('shoesuccess/009.png');
  shoesuccess_img10=loadImage('shoesuccess/010.png');
  shoesuccess_img11=loadImage('shoesuccess/011.png');
  
  headfail_img0=loadImage('headfail/000.png');
  headfail_img1=loadImage('headfail/001.png');
  headfail_img2=loadImage('headfail/002.png');
  headfail_img3=loadImage('headfail/003.png');
  headfail_img4=loadImage('headfail/004.png');
  headfail_img5=loadImage('headfail/005.png');
  headfail_img6=loadImage('headfail/006.png');
  headfail_img7=loadImage('headfail/007.png');
  headfail_img8=loadImage('headfail/008.png');
  headfail_img9=loadImage('headfail/009.png');
  
  headsuccess_img0=loadImage('headsuccess/000.png');
  headsuccess_img1=loadImage('headsuccess/001.png');
  headsuccess_img2=loadImage('headsuccess/002.png');
  headsuccess_img3=loadImage('headsuccess/003.png');
  headsuccess_img4=loadImage('headsuccess/004.png');
  headsuccess_img5=loadImage('headsuccess/005.png');
  headsuccess_img6=loadImage('headsuccess/006.png');
  headsuccess_img7=loadImage('headsuccess/007.png');
  headsuccess_img8=loadImage('headsuccess/008.png');
  headsuccess_img9=loadImage('headsuccess/009.png');
  headsuccess_img10=loadImage('headsuccess/010.png');
  
  lockpicksuccess_img0=loadImage('lockpicksuccess/000.png');
  lockpicksuccess_img1=loadImage('lockpicksuccess/001.png');
  lockpicksuccess_img2=loadImage('lockpicksuccess/002.png');
  lockpicksuccess_img3=loadImage('lockpicksuccess/003.png');
  lockpicksuccess_img4=loadImage('lockpicksuccess/004.png');
  lockpicksuccess_img5=loadImage('lockpicksuccess/005.png');
  lockpicksuccess_img6=loadImage('lockpicksuccess/006.png');
  lockpicksuccess_img7=loadImage('lockpicksuccess/007.png');
  lockpicksuccess_img8=loadImage('lockpicksuccess/008.png');
  lockpicksuccess_img9=loadImage('lockpicksuccess/009.png');
  lockpicksuccess_img10=loadImage('lockpicksuccess/010.png');
  lockpicksuccess_img11=loadImage('lockpicksuccess/011.png');
  lockpicksuccess_img12=loadImage('lockpicksuccess/012.png');
  lockpicksuccess_img13=loadImage('lockpicksuccess/013.png');


  lockpickfail_img0=loadImage('lockpickfail/000.png');
  lockpickfail_img1=loadImage('lockpickfail/001.png');
  lockpickfail_img2=loadImage('lockpickfail/002.png');
  lockpickfail_img3=loadImage('lockpickfail/003.png');
  lockpickfail_img4=loadImage('lockpickfail/004.png');
  lockpickfail_img5=loadImage('lockpickfail/005.png');
  lockpickfail_img6=loadImage('lockpickfail/006.png');
  lockpickfail_img7=loadImage('lockpickfail/007.png');
  lockpickfail_img8=loadImage('lockpickfail/008.png');
  lockpickfail_img9=loadImage('lockpickfail/009.png');
  lockpickfail_img10=loadImage('lockpickfail/010.png');

  hammerfail_img0=loadImage('hammerfail/000.png');
  hammerfail_img1=loadImage('hammerfail/001.png');
  hammerfail_img2=loadImage('hammerfail/002.png');
  hammerfail_img3=loadImage('hammerfail/003.png');
  hammerfail_img4=loadImage('hammerfail/004.png');
  hammerfail_img5=loadImage('hammerfail/005.png');
  hammerfail_img6=loadImage('hammerfail/006.png');
  hammerfail_img7=loadImage('hammerfail/007.png');
  hammerfail_img8=loadImage('hammerfail/008.png');


  hammersuccess_img0=loadImage('hammersuccess/000.png');
  hammersuccess_img1=loadImage('hammersuccess/001.png');
  hammersuccess_img2=loadImage('hammersuccess/002.png');
  hammersuccess_img3=loadImage('hammersuccess/003.png');
  hammersuccess_img4=loadImage('hammersuccess/004.png');
  hammersuccess_img5=loadImage('hammersuccess/005.png');
  hammersuccess_img6=loadImage('hammersuccess/006.png');
  hammersuccess_img7=loadImage('hammersuccess/007.png');
  hammersuccess_img8=loadImage('hammersuccess/008.png');
  hammersuccess_img9=loadImage('hammersuccess/009.png');
  hammersuccess_img10=loadImage('hammersuccess/010.png');
  hammersuccess_img11=loadImage('hammersuccess/011.png');
}
function setup() {
  createCanvas(1900, 900);
  background(200);
  textFont('Georgia');
  textSize(30);
  frameRate(3)
}

function congratulations() {
  image(congratulations_img,0,0,1900,900);
}
function fail() {
  image(fail_img,0,0,1900,900);
}
function title() {
  image(title_img,0,0,1900,900);
  if(mouseIsPressed) {
    title_bool=false;
    layer_1_bool=true;
  }
}
function matches() {
  switch(matches_count%12) {
    case 0:
    image(matches_img0,0,0,1900,900);
    break;
    case 1:
    image(matches_img1,0,0,1900,900);
    break;
    case 2:
    image(matches_img2,0,0,1900,900);
    break;
    case 3:
    image(matches_img3,0,0,1900,900);
    break;
    case 4:
    image(matches_img4,0,0,1900,900);
    break;
    case 5:
    image(matches_img5,0,0,1900,900);
    break;
    case 6:
    image(matches_img6,0,0,1900,900);
    break;
    case 7:
    image(matches_img7,0,0,1900,900);
    break;
    case 8:
    image(matches_img8,0,0,1900,900);
    break;
    case 9:
    image(matches_img9,0,0,1900,900);
    break;
    case 10:
    image(matches_img10,0,0,1900,900);
    break;
    case 11:
    image(matches_img11,0,0,1900,900);
    break;
    default:
  }
  if(matches_count==11) {
    match_bool=false;
    fail_bool=true;
  }
  matches_count++;
}

function screwdriversuccess() {
  switch(screwdriversuccess_count%12) {
    case 0:
    image(screwdriversuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(screwdriversuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(screwdriversuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(screwdriversuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(screwdriversuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(screwdriversuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(screwdriversuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(screwdriversuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(screwdriversuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(screwdriversuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(screwdriversuccess_img10,0,0,1900,900);
    break;
    case 11:
    image(screwdriversuccess_img11,0,0,1900,900);
    break;
    default:
  }
  if(screwdriversuccess_count==11) {
    screwdriversuccess_bool=false;
    congratulations_bool=true;
  }
  screwdriversuccess_count++;
}

function screwdriverfail() {
  switch(screwdriverfail_count%12) {
    case 0:
    image(screwdriverfail_img0,0,0,1900,900);
    break;
    case 1:
    image(screwdriverfail_img1,0,0,1900,900);
    break;
    case 2:
    image(screwdriverfail_img2,0,0,1900,900);
    break;
    case 3:
    image(screwdriverfail_img3,0,0,1900,900);
    break;
    case 4:
    image(screwdriverfail_img4,0,0,1900,900);
    break;
    case 5:
    image(screwdriverfail_img5,0,0,1900,900);
    break;
    case 6:
    image(screwdriverfail_img6,0,0,1900,900);
    break;
    case 7:
    image(screwdriverfail_img7,0,0,1900,900);
    break;
    case 8:
    image(screwdriverfail_img8,0,0,1900,900);
    break;
    case 9:
    image(screwdriverfail_img9,0,0,1900,900);
    break;
    case 10:
    image(screwdriverfail_img10,0,0,1900,900);
    break;
    case 11:
    image(screwdriverfail_img11,0,0,1900,900);
    break;
    default:
  }
  if(screwdriverfail_count==11) {
    screwdriverfail_bool=false;
    layer_2_bool=true;
  }
  screwdriverfail_count++;
}

function iphonefail() {
  switch(iphonefail_count%19) {
    case 0:
    image(iphonefail_img0,0,0,1900,900);
    break;
    case 1:
    image(iphonefail_img1,0,0,1900,900);
    break;
    case 2:
    image(iphonefail_img2,0,0,1900,900);
    break;
    case 3:
    image(iphonefail_img3,0,0,1900,900);
    break;
    case 4:
    image(iphonefail_img4,0,0,1900,900);
    break;
    case 5:
    image(iphonefail_img5,0,0,1900,900);
    break;
    case 6:
    image(iphonefail_img6,0,0,1900,900);
    break;
    case 7:
    image(iphonefail_img7,0,0,1900,900);
    break;
    case 8:
    image(iphonefail_img8,0,0,1900,900);
    break;
    case 9:
    image(iphonefail_img9,0,0,1900,900);
    break;
    case 10:
    image(iphonefail_img10,0,0,1900,900);
    break;
    case 11:
    image(iphonefail_img11,0,0,1900,900);
    break;
    case 12:
    image(iphonefail_img12,0,0,1900,900);
    break;
    case 13:
    image(iphonefail_img13,0,0,1900,900);
    break;
    case 14:
    image(iphonefail_img14,0,0,1900,900);
    break;
    case 15:
    image(iphonefail_img15,0,0,1900,900);
    break;
    case 16:
    image(iphonefail_img16,0,0,1900,900);
    break;
    case 17:
    image(iphonefail_img17,0,0,1900,900);
    break;
    case 18:
    image(iphonefail_img18,0,0,1900,900);
    break;

    default:
  }
  if(iphonefail_count==18) {
    iphonefail_bool=false;
    fail_bool=true;
  }
  iphonefail_count++;
}

function iphonesuccess() {
  switch(iphonesuccess_count%17) {
    case 0:
    image(iphonesuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(iphonesuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(iphonesuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(iphonesuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(iphonesuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(iphonesuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(iphonesuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(iphonesuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(iphonesuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(iphonesuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(iphonesuccess_img10,0,0,1900,900);
    break;
    case 11:
    image(iphonesuccess_img11,0,0,1900,900);
    break;
    case 12:
    image(iphonesuccess_img12,0,0,1900,900);
    break;
    case 13:
    image(iphonesuccess_img13,0,0,1900,900);
    break;
    case 14:
    image(iphonesuccess_img14,0,0,1900,900);
    break;
    case 15:
    image(iphonesuccess_img15,0,0,1900,900);
    break;
    case 16:
    image(iphonesuccess_img16,0,0,1900,900);
    break;

    default:
  }
  if(iphonesuccess_count==16) {
    iphonesuccess_bool=false;
    congratulations_bool=true;
  }
  iphonesuccess_count++;
}

function iphonenothing() {
  switch(iphonenothing_count%16) {
        case 0:
    image(iphonenothing_img0,0,0,1900,900);
    break;
    case 1:
    image(iphonenothing_img1,0,0,1900,900);
    break;
    case 2:
    image(iphonenothing_img2,0,0,1900,900);
    break;
    case 3:
    image(iphonenothing_img3,0,0,1900,900);
    break;
    case 4:
    image(iphonenothing_img4,0,0,1900,900);
    break;
    case 5:
    image(iphonenothing_img5,0,0,1900,900);
    break;
    case 6:
    image(iphonenothing_img6,0,0,1900,900);
    break;
    case 7:
    image(iphonenothing_img7,0,0,1900,900);
    break;
    case 8:
    image(iphonenothing_img8,0,0,1900,900);
    break;
    case 9:
    image(iphonenothing_img9,0,0,1900,900);
    break;
    case 10:
    image(iphonenothing_img10,0,0,1900,900);
    break;
    case 11:
    image(iphonenothing_img11,0,0,1900,900);
    break;
    case 12:
    image(iphonenothing_img12,0,0,1900,900);
    break;
    case 13:
    image(iphonenothing_img13,0,0,1900,900);
    break;
    case 14:
    image(iphonenothing_img14,0,0,1900,900);
    break;
    case 15:
    image(iphonenothing_img15,0,0,1900,900);
    break;

    default:
  }
  if(iphonenothing_count==15) {
    iphonenothing_bool=false;
    layer_3_bool=true;
  }
  iphonenothing_count++;
}

function watermelonfail() {
  switch(watermelonfail_count%12) {
    case 0:
    image(watermelonfail_img0,0,0,1900,900);
    break;
    case 1:
    image(watermelonfail_img1,0,0,1900,900);
    break;
    case 2:
    image(watermelonfail_img2,0,0,1900,900);
    break;
    case 3:
    image(watermelonfail_img3,0,0,1900,900);
    break;
    case 4:
    image(watermelonfail_img4,0,0,1900,900);
    break;
    case 5:
    image(watermelonfail_img5,0,0,1900,900);
    break;
    case 6:
    image(watermelonfail_img6,0,0,1900,900);
    break;
    case 7:
    image(watermelonfail_img7,0,0,1900,900);
    break;
    case 8:
    image(watermelonfail_img8,0,0,1900,900);
    break;
    case 9:
    image(watermelonfail_img9,0,0,1900,900);
    break;
    case 10:
    image(watermelonfail_img10,0,0,1900,900);
    break;
    case 11:
    image(watermelonfail_img11,0,0,1900,900);
    break;

    default:
  }
  if(watermelonfail_count==11) {
    watermelonfail_bool=false;
    fail_bool=true;
  }
  watermelonfail_count++;
}
function watermelonsuccess() {
  switch(watermelonsuccess_count%17) {
        case 0:
    image(watermelonsuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(watermelonsuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(watermelonsuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(watermelonsuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(watermelonsuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(watermelonsuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(watermelonsuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(watermelonsuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(watermelonsuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(watermelonsuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(watermelonsuccess_img10,0,0,1900,900);
    break;
    case 11:
    image(watermelonsuccess_img11,0,0,1900,900);
    break;
    case 12:
    image(watermelonsuccess_img12,0,0,1900,900);
    break;
    case 13:
    image(watermelonsuccess_img13,0,0,1900,900);
    break;
    case 14:
    image(watermelonsuccess_img14,0,0,1900,900);
    break;
    case 15:
    image(watermelonsuccess_img15,0,0,1900,900);
    break;
    case 16:
    image(watermelonsuccess_img16,0,0,1900,900);
    break;

    default:
  }
  if(watermelonsuccess_count==16) {
    watermelonsuccess_bool=false;
    congratulations_bool=true;
  }
  watermelonsuccess_count++;
}

function watermelonnothing() {
  switch(watermelonnothing_count%12) {
        case 0:
    image(watermelonnothing_img0,0,0,1900,900);
    break;
    case 1:
    image(watermelonnothing_img1,0,0,1900,900);
    break;
    case 2:
    image(watermelonnothing_img2,0,0,1900,900);
    break;
    case 3:
    image(watermelonnothing_img3,0,0,1900,900);
    break;
    case 4:
    image(watermelonnothing_img4,0,0,1900,900);
    break;
    case 5:
    image(watermelonnothing_img5,0,0,1900,900);
    break;
    case 6:
    image(watermelonnothing_img6,0,0,1900,900);
    break;
    case 7:
    image(watermelonnothing_img7,0,0,1900,900);
    break;
    case 8:
    image(watermelonnothing_img8,0,0,1900,900);
    break;
    case 9:
    image(watermelonnothing_img9,0,0,1900,900);
    break;
    case 10:
    image(watermelonnothing_img10,0,0,1900,900);
    break;
    case 11:
    image(watermelonnothing_img11,0,0,1900,900);
    break;


    default:
  }
  if(watermelonnothing_count==11) {
    watermelonnothing_bool=false;
    layer_3_bool=true;
  }
  watermelonnothing_count++;
}

function shoefail() {
  switch(shoefail_count%13) {
    case 0:
    image(shoefail_img0,0,0,1900,900);
    break;
    case 1:
    image(shoefail_img1,0,0,1900,900);
    break;
    case 2:
    image(shoefail_img2,0,0,1900,900);
    break;
    case 3:
    image(shoefail_img3,0,0,1900,900);
    break;
    case 4:
    image(shoefail_img4,0,0,1900,900);
    break;
    case 5:
    image(shoefail_img5,0,0,1900,900);
    break;
    case 6:
    image(shoefail_img6,0,0,1900,900);
    break;
    case 7:
    image(shoefail_img7,0,0,1900,900);
    break;
    case 8:
    image(shoefail_img8,0,0,1900,900);
    break;
    case 9:
    image(shoefail_img9,0,0,1900,900);
    break;
    case 10:
    image(shoefail_img10,0,0,1900,900);
    break;
    case 11:
    image(shoefail_img11,0,0,1900,900);
    break;
    case 12:
    image(shoefail_img12,0,0,1900,900);
    break;
    default:
  }
  if(shoefail_count==12) {
    shoefail_bool=false;
    fail_bool=true;
  }
  shoefail_count++;
}
function shoesuccess() {
  switch(shoesuccess_count%12) {
    case 0:
    image(shoesuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(shoesuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(shoesuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(shoesuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(shoesuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(shoesuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(shoesuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(shoesuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(shoesuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(shoesuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(shoesuccess_img10,0,0,1900,900);
    break;
    case 11:
    image(shoesuccess_img11,0,0,1900,900);
    break;
    default:
  }
  if(shoesuccess_count==11) {
    shoesuccess_bool=false;
    congratulations_bool=true;
  }
  shoesuccess_count++;
}

function headsuccess() {
  switch(headsuccess_count%11) {
    case 0:
    image(headsuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(headsuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(headsuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(headsuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(headsuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(headsuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(headsuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(headsuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(headsuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(headsuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(headsuccess_img10,0,0,1900,900);
    break;


    default:
  }
  if(headsuccess_count==10) {
    headsuccess_bool=false;
    congratulations_bool=true;
  }
  headsuccess_count++;
}

function headfail() {
  switch(headfail_count%10) {
    case 0:
    image(headfail_img0,0,0,1900,900);
    break;
    case 1:
    image(headfail_img1,0,0,1900,900);
    break;
    case 2:
    image(headfail_img2,0,0,1900,900);
    break;
    case 3:
    image(headfail_img3,0,0,1900,900);
    break;
    case 4:
    image(headfail_img4,0,0,1900,900);
    break;
    case 5:
    image(headfail_img5,0,0,1900,900);
    break;
    case 6:
    image(headfail_img6,0,0,1900,900);
    break;
    case 7:
    image(headfail_img7,0,0,1900,900);
    break;
    case 8:
    image(headfail_img8,0,0,1900,900);
    break;
    case 9:
    image(headfail_img9,0,0,1900,900);
    break;

    default:
  }
  if(headfail_count==9) {
    headfail_bool=false;
    fail_bool=true;
  }
  headfail_count++;
}

function hammersuccess() {
  switch(hammersuccess_count%12) {
    case 0:
    image(hammersuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(hammersuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(hammersuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(hammersuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(hammersuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(hammersuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(hammersuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(hammersuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(hammersuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(hammersuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(hammersuccess_img10,0,0,1900,900);
    break;
    case 11:
    image(hammersuccess_img11,0,0,1900,900);
    break;
    default:
  }
  if(hammersuccess_count==11) {
    hammersuccess_bool=false;
    congratulations_bool=true;
  }
  hammersuccess_count++;
}

function hammerfail() {
  switch(hammerfail_count%9) {
        case 0:
    image(hammerfail_img0,0,0,1900,900);
    break;
    case 1:
    image(hammerfail_img1,0,0,1900,900);
    break;
    case 2:
    image(hammerfail_img2,0,0,1900,900);
    break;
    case 3:
    image(hammerfail_img3,0,0,1900,900);
    break;
    case 4:
    image(hammerfail_img4,0,0,1900,900);
    break;
    case 5:
    image(hammerfail_img5,0,0,1900,900);
    break;
    case 6:
    image(hammerfail_img6,0,0,1900,900);
    break;
    case 7:
    image(hammerfail_img7,0,0,1900,900);
    break;
    case 8:
    image(hammerfail_img8,0,0,1900,900);
    break;


    default:
  }
  if(hammerfail_count==8) {
    hammerfail_bool=false;
    fail_bool=true;
  }
  hammerfail_count++;
}

function lockpicksuccess() {
  switch(lockpicksuccess_count%14) {
        case 0:
    image(lockpicksuccess_img0,0,0,1900,900);
    break;
    case 1:
    image(lockpicksuccess_img1,0,0,1900,900);
    break;
    case 2:
    image(lockpicksuccess_img2,0,0,1900,900);
    break;
    case 3:
    image(lockpicksuccess_img3,0,0,1900,900);
    break;
    case 4:
    image(lockpicksuccess_img4,0,0,1900,900);
    break;
    case 5:
    image(lockpicksuccess_img5,0,0,1900,900);
    break;
    case 6:
    image(lockpicksuccess_img6,0,0,1900,900);
    break;
    case 7:
    image(lockpicksuccess_img7,0,0,1900,900);
    break;
    case 8:
    image(lockpicksuccess_img8,0,0,1900,900);
    break;
    case 9:
    image(lockpicksuccess_img9,0,0,1900,900);
    break;
    case 10:
    image(lockpicksuccess_img10,0,0,1900,900);
    break;
    case 11:
    image(lockpicksuccess_img11,0,0,1900,900);
    break;
    case 12:
    image(lockpicksuccess_img12,0,0,1900,900);
    break;
    case 13:
    image(lockpicksuccess_img13,0,0,1900,900);
    break;

    default:
  }
  if(lockpicksuccess_count==13) {
    lockpicksuccess_bool=false;
    congratulations_bool=true;
  }
  lockpicksuccess_count++;
}

function lockpickfail() {
  switch(lockpickfail_count%11) {
        case 0:
    image(lockpickfail_img0,0,0,1900,900);
    break;
    case 1:
    image(lockpickfail_img1,0,0,1900,900);
    break;
    case 2:
    image(lockpickfail_img2,0,0,1900,900);
    break;
    case 3:
    image(lockpickfail_img3,0,0,1900,900);
    break;
    case 4:
    image(lockpickfail_img4,0,0,1900,900);
    break;
    case 5:
    image(lockpickfail_img5,0,0,1900,900);
    break;
    case 6:
    image(lockpickfail_img6,0,0,1900,900);
    break;
    case 7:
    image(lockpickfail_img7,0,0,1900,900);
    break;
    case 8:
    image(lockpickfail_img8,0,0,1900,900);
    break;
    case 9:
    image(lockpickfail_img9,0,0,1900,900);
    break;
    case 10:
    image(lockpickfail_img10,0,0,1900,900);
    break;


    default:
  }
  if(lockpickfail_count==10) {
    lockpickfail_bool=false;
    layer_3=true;
  }
  lockpickfail_count++;
}

function layer_1() {
  switch(layer_1_count%5) {
    case 0:
    image(layer_1_img0,0,0,1900,900);
    break;
    case 1:
    image(layer_1_img1,0,0,1900,900);
    break;
    case 2:
    image(layer_1_img2,0,0,1900,900);
    break;
    case 3:
    image(layer_1_img3,0,0,1900,900);
    break;
    case 4:
    image(layer_1_img4,0,0,1900,900);
    break;
    default:
  }
  fill(200,0,0);
  rect(50,600,200,200);
  fill(39, 24, 153);
  rect(300,600,200,200);
  fill(102,53,20);
  rect(550,600,200,200);
  fill(255,255,255);
  text("Matches",75,700);
  text("Screwdriver",325,700);
  text("Hammer",575,700);
    if(mouseIsPressed && mouseX>50 && mouseX<250 && mouseY>600 && mouseY<800) {
      layer_1_bool=false;
      match_bool=true;
    }
    if(mouseIsPressed && mouseX>300 && mouseX<500 && mouseY>600 && mouseY<800) {
      layer_1_bool=false;
      screwdriver_chance=random();
      if(screwdriver_chance<0.1) {
        screwdriversuccess_bool=true;
      }
      if(screwdriver_chance>0.1) {
        screwdriverfail_bool=true;
      }
    }
    if(mouseIsPressed && mouseX>550 && mouseX<750 && mouseY>600 && mouseY<800) {
      layer_1_bool=false;
      hammer_chance=random();
      if(hammer_chance>0.7) {
        hammersuccess_bool=true;
      }
      else {
        hammerfail_bool=true;
      }
    }
  layer_1_count++;
}

function layer_2() {
    switch(layer_2_count%5) {
    case 0:
    image(layer_2_img0,0,0,1900,900);
    break;
    case 1:
    image(layer_2_img1,0,0,1900,900);
    break;
    case 2:
    image(layer_2_img2,0,0,1900,900);
    break;
    case 3:
    image(layer_2_img3,0,0,1900,900);
    break;
    case 4:
    image(layer_2_img4,0,0,1900,900);
    break;
    default:
  }
  fill(0,0,0);
  rect(50,600,200,200);
  fill(24,81,22);
  rect(300,600,200,200);
  fill(122,122,122);
  rect(550,600,200,200);
  fill(255,255,255);
  text("iphone",75,700);
  text("Watermelon",325,700);
  text("Lockpick",575,700);
    if(mouseIsPressed && mouseX>50 && mouseX<250 && mouseY>600 && mouseY<800) {
      layer_2_bool=false;
      iphone_chance=random();
      if(iphone_chance>0.8) {
        iphonesuccess_bool=true;
      }
      else if(iphone_chance>0.5) {
        iphonenothing_bool=true;
      }
      else {
        iphonefail_bool=true;
      }
    }
    if(mouseIsPressed && mouseX>300 && mouseX<500 && mouseY>600 && mouseY<800) {
      layer_2_bool=false;
      watermelon_chance=random();
      if(watermelon_chance>0.7) {
        watermelonfail_bool=true;
      }
      else if(watermelon_chance>0.4) {
        watermelonnothing_bool=true;
      }
      else {
        watermelonsuccess_bool=true;
      }
    }
    if(mouseIsPressed && mouseX>550 && mouseX<750 && mouseY>600 && mouseY<800) {
      layer_2_bool=false;
      lockpick_chance=random();
      if(lockpick_chance>0.2) {
        lockpicksuccess_bool=true;
      }
      else {
        lockpickfail_bool=true;
      }
    }
  layer_2_count++;
}
function layer_3() {
    switch(layer_3_count%5) {
    case 0:
    image(layer_3_img0,0,0,1900,900);
    break;
    case 1:
    image(layer_3_img1,0,0,1900,900);
    break;
    case 2:
    image(layer_3_img2,0,0,1900,900);
    break;
    case 3:
    image(layer_3_img3,0,0,1900,900);
    break;
    case 4:
    image(layer_3_img4,0,0,1900,900);
    break;
    default:
    }
    fill(0,0,0);
    rect(50,600,200,200);
    fill(24,81,22);
    rect(300,600,200,200);
    fill(255,255,255);
    text("Headslam",75,700);
    text("Shoethrow",325,700);
    if(mouseIsPressed && mouseX>50 && mouseX<250 && mouseY>600 && mouseY<800) {
      layer_3_bool=false;
      head_chance=random();
      if(head_chance<0.05) {
        headsuccess_bool=true;
      }
      else {
        headfail_bool=true;
      }
    }
    if(mouseIsPressed && mouseX>300 && mouseX<500 && mouseY>600 && mouseY<800) {
      layer_3_bool=false;
      shoe_chance=random();
      if(shoe_chance<0.05) {
        shoesuccess_bool=true;
      }
      else {
        shoefail_bool=true;
      }
    }
  layer_3_count++;
}

function draw() {
  if(title_bool) {
    title();
  }
  if(layer_1_bool) {
    layer_1();
  }
  else if(match_bool) {
    matches();
    if(fail_bool) {
      fail();
    }
  }
  else if(screwdriversuccess_bool) {
    screwdriversuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }
  else if(screwdriverfail_bool) {
    screwdriverfail();
  }
  if(layer_2_bool) {
    layer_2();
  }
  else if(hammerfail_bool) {
    hammerfail();
    if(fail_bool) {
      fail();
    }
  }
  else if(hammersuccess_bool) {
    hammersuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }

  else if(watermelonsuccess_bool) {
    watermelonsuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }
  else if(watermelonnothing_bool) {
    watermelonnothing();
  }
  else if(watermelonfail_bool) {
    watermelonfail();
    if(fail_bool) {
      fail();
    }
  }
  else if(iphonesuccess_bool) {
    iphonesuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }
  else if(iphonenothing_bool) {
    iphonenothing();
  }
  else if(iphonefail_bool) {
    iphonefail();
    if(fail_bool) {
      fail();
    }
  }
  else if(lockpickfail_bool) {
    lockpickfail();
    if(fail_bool) {
      fail();
    }
  }
  else if(lockpicksuccess_bool) {
    lockpicksuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }

  if(layer_3_bool) {
    layer_3();
  }
  else if(headsuccess_bool) {
    headsuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }
  else if(headfail_bool) {
    headfail();
    if(fail_bool) {
      fail();
    }
  }
  else if(shoesuccess_bool) {
    shoesuccess();
    if(congratulations_bool) {
      congratulations();
    }
  }
  else if(shoefail_bool) {
    shoefail();
    if(fail_bool) {
      fail();
    }
  }
}