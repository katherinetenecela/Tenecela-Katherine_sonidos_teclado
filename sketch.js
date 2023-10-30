let sonido;

function preload() {
  soundFormats("wav", "mp3", "ogg");
  sonidoMeMeMe = loadSound("sonido/MeMeMe.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(presionado);
}

function presionado() {
  sonidoMeMeMe.play();
  circle(mouseX, mouseY, 20);
}

function draw() {}

function mouseDragged() {
  sonidoMeMeMe.play();
  circle(mouseX, mouseY, 20);
}
