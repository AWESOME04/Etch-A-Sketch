const mainDiv = document.getElementById('container');
const colorPicker = document.getElementById('colorPicker');
const eraserButton = document.getElementById('eraserButton');
const clearButton = document.getElementById('clearButton');
const resizeButton = document.getElementById('resizeButton');

let currentColor = '#000000';
let isErasing = false;

function createGrid(size) {
    mainDiv.innerHTML = '';
    const squareSize = 600 / size;
    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        squareDiv.addEventListener('mouseover', changeColor);
        squareDiv.addEventListener('mousedown', changeColor);
        mainDiv.appendChild(squareDiv);
    }
}

function changeColor(e) {
    if (e.buttons > 0) {
        if (isErasing) {
            e.target.style.backgroundColor = '';
        } else {
            e.target.style.backgroundColor = currentColor;
        }
    }
}

colorPicker.addEventListener('input', function() {
    currentColor = this.value;
    isErasing = false;
});

eraserButton.addEventListener('click', function() {
    isErasing = !isErasing;
    this.classList.toggle('active');
});

clearButton.addEventListener('click', function() {
    const squares = mainDiv.querySelectorAll('div');
    squares.forEach(square => square.style.backgroundColor = '');
});

resizeButton.addEventListener('click', function() {
    let newSize = prompt("Enter new grid size (up to 100):");
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});

// Prevent dragging
mainDiv.addEventListener('dragstart', (e) => e.preventDefault());

// Initialize the default grid size
createGrid(16);