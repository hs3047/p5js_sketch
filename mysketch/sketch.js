let osc;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator();
  osc.start();
  // sets color values to HSB - Hue, Saturation, Brightness
  // range of value from 0 to 255
  // Hue = Color - 0 to 360
  // Saturation = Intensity(amount of white) - 0 to 100
  // Brightness = Brightness(amount of black) - 0 to 100
  colorMode(HSB);
}

function draw() {
  let pitch = map(mouseX, 0, width, 200, 1000);
  let volume = map(mouseY, 0, height, 1, 0);
  // maps X axis to full range of color hue
  let hue = map(mouseX, 0, width, 0, 360);
  // maps Y axis to full range of color brightness
  let bright = map(mouseY, 0, height, 100, 0);
  // background takes 3 values for HSB colorMode
  // hue will change when mouse moves along X axis
  // brightness will change when mouse moves along Y axis
  background(hue, 255, bright);
  osc.freq(pitch);
  osc.amp(volume);
}
