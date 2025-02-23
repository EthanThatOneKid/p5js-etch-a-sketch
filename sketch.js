var alX, alY;

function setup() {
	var cnv = createCanvas(400, 400);
    	var x = (windowWidth - width) * 0.5;
    	var y = (windowHeight - height) * 0.5;
    	cnv.position(x, y);
	alX = width * 0.125;
	alY = height * 0.25;
	noStroke(); fill(255); rect(width/8, height/4, width*0.75, height*0.5);
	alert('Click and drag on the knobs to draw on the Etch-A-Sketch. Click the words on top to clear the screen. -EthanThatOneKid');
};


function aluminum() {
    if (mouseIsPressed) {
        if (mouseX>0 && mouseX<width*0.25 && mouseY>height*0.75 && mouseY<height) {
            if((mouseY > height*0.875 && pmouseX > mouseX) || (mouseY < height*0.875 && pmouseX < mouseX)) 
            {alX++;}
            if((mouseY > height*0.875 && pmouseX < mouseX) || (mouseY < height*0.875 && pmouseX > mouseX)) 
            {alX--;}
        }
        if (mouseX>width*0.625 && mouseX<width && mouseY>height*0.75 && mouseY<height) {
            if((mouseY > height*0.875 && pmouseX > mouseX) || (mouseY < height*0.875 && pmouseX < mouseX)) 
            {alY--;}
             if((mouseY > height*0.875 && pmouseX < mouseX) || (mouseY < height*0.875 && pmouseX > mouseX)) 
            {alY++;}
        }
    }
    
    if (alX > width * 349 / 400){alX=width*0.875;}
    if (alX < width * 51 / 400) {alX=width/8;}
    if (alY < height * 101 / 400){alY=height/4;}
    if (alY > height * 299 / 400){alY=height*0.75;}

    fill(0); noStroke(); 
    ellipse(alX, alY, width/200, height/200); //draw aluminum lines
}

function etchASketch() {
  noStroke(); fill(255,0,0); 
  rect(0, 0, width/8, height); rect(0, 0, width, height*0.25); 
  rect(width*7/8, 0, width/8, 400); 
  rect(0, height*0.75, width, height*0.25); //plastic, red case
  textSize((width+height)/40); 
  fill(255, 255, 0); textAlign(CENTER);
  text("magic   ETCH A SKETCH   screen", width*0.5, height*59/400);
  stroke(0); fill(255,255,255); 
  ellipse(width/8, height*7/8, width*75/400, height*75/400); 
  ellipse(width*7/8, height*7/8, width*75/400, height*75/400);
}

var draw = function() {
    aluminum();
    etchASketch();
    if (mouseIsPressed && mouseY < height*0.25) {
        noStroke(); fill(255); rect(width/8, height/4, width*0.75, height*0.5);
    }
};