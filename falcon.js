// Mouse to draw!
let img;

function preload() {
  // Load the image
  img = loadImage("two.jpg");
}

function setup() {
    let cnv = createCanvas(5000, 5000);
    cnv.position(0, 0);
    cnv. style('z-index', 'absolute')


  // Set the background black

  
  // Image mode center will center the image on the mouse, comment out to see the difference
  imageMode(CENTER);
  
 
  
  // Set width of the lines
  strokeWeight(30);
}



function draw() {
  background(11500);
  
}
function draw() {

  // Draw an image at your mouse position
  image(img, mouseX, mouseY, 100,100);

}

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
