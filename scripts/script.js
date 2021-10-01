function createDivs() {
  for (let i = 0; i < 256; i++) {
    const boardContainer = document.querySelector("#boardContainer");
    const divs = document.createElement("div");
    divs.classList.add("pixels");
    divs.style.cssText = "width: 6.25%; height: 6.25%";
    boardContainer.appendChild(divs);
  }
}

createDivs();

function draw() {
  const pixels = document.querySelectorAll(".pixels");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("coloredPixel");
    });
  });
}

draw();
restartButton()

function drawNew() {
  const myNode = document.getElementById("boardContainer");
  const userInput = prompt(`How big of a rectangle do you need chief? \nEnter a number (max. 100)`);
  if (userInput >= 1 && userInput <= 100) {
    myNode.innerHTML = '';
  for (let i = 0; i < userInput * userInput; i++) {
    const boardContainer = document.querySelector("#boardContainer");
    const s = (100 / userInput);
    const divs = document.createElement("div");
    divs.classList.add("pixels");
    divs.style.cssText = "width: " + s + "%; height: " + s + "%";
    boardContainer.appendChild(divs);
  }} else if (userInput === null) {
    return;
  } else {
    alert("Please enter a number between 1 and 100");
    drawNew();
  }
  draw();
}

function restartButton() {
  const button = document.querySelector("#restartButton")
  button.addEventListener('click', () => {
    drawNew()
  } );
}

