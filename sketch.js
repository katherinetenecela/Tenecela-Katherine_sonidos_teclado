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
  playSoundWithShape(r, mouseX, mouseY);
}

function mouseDragged() {
  let r = Math.floor(random(7));
  playSoundWithShape(r, mouseX, mouseY);
}

function keyPressed() {
  let r;

  switch (key) {
    case "a":
      r = 0;
      break;
    case "s":
      r = 1;
      break;
    case "d":
      r = 2;
      break;
    case "f":
      r = 3;
      break;
    case "g":
      r = 4;
      break;
    case "h":
      r = 5;
      break;
    case "j":
      r = 6;
      break;
  }
  playSoundWithShape(r, width / 2, height / 2);
}

function playSoundWithShape(r, x, y) {
  fill(random(255), random(255), random(255));

  noStroke();
  let scale_factor = random(0.5, 2.0);

  switch (r) {
    case 0:
      sonido[0].play();
      ellipse(x, y, 20 * scale_factor, 20 * scale_factor);
      break;
    case 1:
      sonido[1].play();
      rect(x, y, 20 * scale_factor, 20 * scale_factor);
      break;
    case 2:
      sonido[2].play();
      triangle(
        x,
        y - 10 * scale_factor,
        x - 10 * scale_factor,
        y + 10 * scale_factor,
        x + 10 * scale_factor,
        y + 10 * scale_factor
      );
      break;
    case 3:
      sonido[3].play();
      ellipse(x, y, 20 * scale_factor, 20 * scale_factor);
      break;
    case 4:
      sonido[4].play();
      rect(x, y, 20 * scale_factor, 20 * scale_factor);
      break;
    case 5:
      sonido[5].play();
      triangle(
        x,
        y - 10 * scale_factor,
        x - 10 * scale_factor,
        y + 10 * scale_factor,
        x + 10 * scale_factor,
        y + 10 * scale_factor
      );
      break;
    case 6:
      sonido[6].play();
      ellipse(x, y, 20 * scale_factor, 20 * scale_factor);
      break;
  }
}

function draw() {}

//if (variable + valor )

//switch varias preguntas de la misma variable
//switch (animal){
// case "gato"
//print(" si es gato")
// break
//}
