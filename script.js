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

function createGrid(size) {
    // Clear the existing grid
    mainDiv.innerHTML = '';

    const squareSize = totalWidth / size;

    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.width = squareSize + 'px';
        squareDiv.style.height = squareSize + 'px';
        squareDiv.style.border = '1px solid black';
        squareDiv.style.opacity = 0.1;
        squareDiv.setAttribute('data-opacity', '0.1');

        squareDiv.addEventListener('mouseover', function () {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                    ${Math.floor(Math.random() * 256)}, 
                                    ${Math.floor(Math.random() * 256)})`;

            squareDiv.style.backgroundColor = randomColor;

            // Increase opacity by 10% for each hover
            let currentOpacity = parseFloat(squareDiv.getAttribute('data-opacity'));
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                squareDiv.setAttribute('data-opacity', currentOpacity.toFixed(1));
                squareDiv.style.opacity = currentOpacity;
            }
        });

        mainDiv.appendChild(squareDiv);
    }
}

// Add the event listener for grid resizing
const resizeButton = document.getElementById('resizeButton');
resizeButton.addEventListener('click', function () {
    let newSize = prompt("Enter new grid size (up to 100):");
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});

// Initialize the default grid size
createGrid(16);
