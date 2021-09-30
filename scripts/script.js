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
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("coloredPixel");
    });
});
}

draw()