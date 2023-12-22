let sonido = [];

function preload() {
  for (let i = 0; i < 7; i++) {
    sonido[i] = loadSound("sonido/" + i + ".mp3");
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(presionado);
}

function presionado() {
  let r = Math.floor(random(7));
  circle(mouseX, mouseY, 20);

  switch (r) {
    case 0:
      sonido[0].play();
      break;
    case 1:
      sonido[1].play();
      break;
    case 2:
      sonido[2].play();
      break;
    case 3:
      sonido[3].play();
      break;
    case 4:
      sonido[4].play();
      break;
    case 5:
      sonido[5].play();
      break;
    case 6:
      sonido[6].play();
      break;
  }
}

function draw() {}
function mouseDragged() {
  let r = Math.floor(random(7));
  circle(mouseX, mouseY, 20);

  switch (r) {
    case 0:
      sonido[0].play();
      break;
    case 1:
      sonido[1].play();
      break;
    case 2:
      sonido[2].play();
      break;
    case 3:
      sonido[3].play();
      break;
    case 4:
      sonido[4].play();
      break;
    case 5:
      sonido[5].play();
      break;
    case 6:
      sonido[6].play();
      break;
  }
}

function keyPressed() {
  switch (key) {
    case "a":
      sonido[0].play();
      break;
    case "s":
      sonido[1].play();
      break;
    case "d":
      sonido[2].play();
      break;
    case "f":
      sonido[3].play();
      break;
    case "g":
      sonido[4].play();
      break;
    case "h":
      sonido[5].play();
      break;
    case "j":
      sonido[6].play();
      break;
  }
}

//if (variable + valor )

//switch varias preguntas de la misma variable
//switch (animal){
// case "gato"
//print(" si es gato")
// break
//}
