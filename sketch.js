function setup() {
  createCanvas(500, 500);
  background(255);

  input = createInput('');
  input.position(0, 475);
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
  stroke(0);
  rect(10, 5, 80, 30);
  rect(110, 5, 80, 30);
  rect(10, 5, 80, 30);
  rect(210, 5, 80, 30);
  rect(310, 5, 80, 30);
  rect(410, 5, 80, 30);

  fill(0);
  textSize(15);
  stroke(255);
  text('5- Most Important', 5, 50);
  text('4- Highly Important', 5, 65);
  text('3- Important', 5, 80);
  text('2- Slightly Important', 5, 95);
  text('1- Less Important', 5, 110);
}

function keyPressed() {
  if (keyCode === ENTER) {
    let msg = str(input.value);
    taskList.push(msg);
  }
}

function mouseClicked() {
  if (mouseX < 90 && mouseY < 35) {
    fillGradient('radial', {
    from : [250, 250, 180],
    to : [400, 400, 150],
    steps : [
      color(148, 0, 0),
      color(255, 0, 0),
      ]
    });
    stroke(255);
    circle(250, 250, 250);
    fill(0);
    textSize(15);
    text(taskList[1], 250, 250);
  }
  if (mouseX < 190 && mouseX > 90 && mouseY < 35) {
    fillGradient('radial', {
    from : [250, 250, 180],
    to : [400, 400, 150],
    steps : [
      color(255, 0, 0),
      color(255, 145, 0),
      ]
    });
    stroke(255);
    circle(250, 250, 250);
    fill(0);
    textSize(15);
    text('4', 250, 250);
  }
  if (mouseX < 290 && mouseX > 190 && mouseY < 35) {
    fillGradient('radial', {
    from : [250, 250, 180],
    to : [400, 400, 150],
    steps : [
      color(255, 145, 0),
      color(255, 222, 0),
      ]
    });
    stroke(255);
    circle(250, 250, 250);
    fill(0);
    textSize(15);
    text('3', 250, 250);
  }
  if (mouseX < 390 && mouseX > 290 && mouseY < 35) {
    fillGradient('radial', {
    from : [250, 250, 180],
    to : [400, 400, 150],
    steps : [
      color(255, 222, 0),
      color(196, 255, 0),
      ]
    });
    stroke(255);
    circle(250, 250, 250);
    fill(0);
    textSize(15);
    text('2', 250, 250);
  }
  if (mouseX < 490 && mouseX > 390 && mouseY < 35) {
    fillGradient('radial', {
    from : [250, 250, 180],
    to : [400, 400, 150],
    steps : [
      color(196, 255, 0),
      color(84, 210, 0),
      ]
    });
    stroke(255);
    circle(250, 250, 250);
    fill(0);
    textSize(15);
    text('1', 250, 250);
  }
}
