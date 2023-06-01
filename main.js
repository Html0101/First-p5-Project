function preload() 
{ 

}

function setup() 
{ 
    

    canvas = createCanvas(1400, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() 
{ 
    ellipse(0, 0, 55, 55);
    ellipse(0, 400, 55, 55);
    ellipse(1400, 10, 55, 55);
    ellipse(1400, 390, 55, 55);
    rect(25, 5, 1350, 55);
    rect(25, 335, 1350, 55);
    rect(205, 35, 50, 50);
    rect(254, 135, 50, 50);
    rect(312, 2, 50, 50);
    rect(24, 13, 50, 50);
    rect(1205, 358, 50, 50);
    rect(1032, 297, 50, 50);
    rect(1312, 202, 50, 50);
    rect(1224, 130, 50, 50);
    rect(175, 195, 50, 50);
    rect(594, 324, 50, 50);
    rect(894, 329, 50, 50);
    rect(1224, 139, 50, 50);
    rect(1078, 238, 50, 50);
    rect(132, 197, 50, 50);
    rect(1112, 102, 50, 50);
    rect(402, 232, 50, 50);
    image(video, 500, 50, 400, 300);
    fill(12, 195, 203);
}