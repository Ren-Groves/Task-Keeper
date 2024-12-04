function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
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
