const gridContainer = document.querySelector("#grid-container");
const changeSizeButton = document.querySelector("#change-size-button");
const resetButton = document.querySelector("#reset-button");
const blackAndWhiteButton = document.querySelector("#black-and-white-button");

let pixel = '';
let gridSize = 30;
let currentSize = gridSize;

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", reset);
changeSizeButton.addEventListener("click", changeSize);
blackAndWhiteButton.addEventListener("click", setDefaultBlackAndWhiteGrid);

function setDefaultGrid() {
    setGridSize(gridSize);
    fillGridWithColor(gridSize);
}

function setDefaultBlackAndWhiteGrid() {
    clearGrid();
    setGridSize(currentSize);
    fillGridWithBlack(currentSize);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGridWithColor(size) {
    for (let i = 0; i < size ** 2; i++) {
        pixel = document.createElement("div");
        pixel.classList = "grid-element";
        pixel.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(pixel);
    }
    currentSize = size;
}

function fillGridWithBlack(size) {
    for (let i = 0; i < size ** 2; i++) {
        pixel = document.createElement("div");
        pixel.classList = "grid-element";
        pixel.addEventListener("mouseover", blackAndWhite);
        gridContainer.appendChild(pixel);
    }
}

function blackAndWhite(e) {
    e.target.style.backgroundColor = "black";
}

function changeColor(e) {
    const randomR= Math.floor(Math.random() * 256);
    const randomG= Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function reset() {
    clearGrid();
    setGridSize(gridSize);
    fillGridWithColor(gridSize);
}

function changeSize() {
    let newSize = prompt("Enter a new size");

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64 range");
        changeSize();
        } else {
        clearGrid();
        setGridSize(newSize);
        fillGridWithColor(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    var p;
    for (p of gridArray) {
        gridContainer.removeChild(p);
    }
    
}
