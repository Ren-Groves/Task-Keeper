function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  fillGradient('linear', {
    from : [0, 5],
    to : [500, 35],
    steps : [
      color(148, 0, 0),
      color(255, 0, 0),
      color(255, 145, 0),
      color(255, 222, 0),
      color(196, 255, 0),
      color(84, 210, 0),
    ]
  });
  rect(10, 5, 80, 30);
  rect(110, 5, 80, 30);
  rect(10, 5, 80, 30);
  rect(210, 5, 80, 30);
  rect(310, 5, 80, 30);
  rect(410, 5, 80, 30);
}

function mouseClicked() {
  if (mouseX < 90 && mouseY < 35) {
    fill(0)
    textSize(15);
    text('5', 250, 250);
  }
  if (mouseX < 190 && mouseX > 90 && mouseY < 35) {
    fill(0)
    textSize(15);
    text('4', 250, 250);
  }
  if (mouseX < 290 && mouseX > 190 && mouseY < 35) {
    fill(0)
    textSize(15);
    text('3', 250, 250);
  }
  if (mouseX < 390 && mouseX > 290 && mouseY < 35) {
    fill(0)
    textSize(15);
    text('2', 250, 250);
  }
  if (mouseX < 490 && mouseX > 390 && mouseY < 35) {
    fill(0)
    textSize(15);
    text('1', 250, 250);
  }
}
