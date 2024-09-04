function setup() {
  createCanvas(400, 400);
  background("purple");
}

function draw() {
  if (mouseIsPressed) {
  stroke("black");// cor da linha 
  fill("blue"); // cor da linha 
  rect(mouseX,mouseY,10,10); // criando o retangulo
  }
}
