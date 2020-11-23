function setup() {
    createCanvas(400, 400, WEBGL);
    easycam = createEasyCam();
    document.oncontextmenu = () =>false;
}

function draw() {
    background(165, 209, 186);
    frameRate(30);
    stroke(255);
    pointLight(255, 255, 255, 0, 0, 400);
    ambientLight(173, 61, 63);
    ambientMaterial(250);
    angleMode(DEGREES);
    rotateX(frameCount * 1);
    rotateY(frameCount * 1);
    rotateZ(frameCount * 1);
    rotateX(30);
    cylinder(20, 75, 16, 1, false, false)
}