const mainDiv = document.getElementById('container');
const totalWidth = 960;

// create a 16 x 16 grid and add event listener
// for(i = 0; i < 257; i++){
//     const squareDiv = document.createElement('div');

//     squareDiv.addEventListener('mouseover', changeColor);
//     function changeColor(e){
//         squareDiv.style.backgroundColor = 'black';
//     }

//     mainDiv.appendChild(squareDiv);
// }

// console.log(mainDiv);

// Function to create a grid based on user input
function createGrid(size) {
    // Clear the existing grid
    mainDiv.innerHTML = '';

    const squareSize = totalWidth / size;

    // Create grid boxes according to the user input
    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.width = squareSize + 'px';
        squareDiv.style.height = squareSize + 'px';
        squareDiv.style.border = '1px solid black';

        // Add hover effect to change the background color
        squareDiv.addEventListener('mouseover', function() {
            squareDiv.style.backgroundColor = 'blue';
        });

        mainDiv.appendChild(squareDiv);
    }
}

// Function to handle the button click and grid resizing
document.getElementById('resizeButton').addEventListener('click', function() {
    let gridSize = prompt('Enter the number of squares per side (max 100):');

    gridSize = parseInt(gridSize);
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

createGrid(16);