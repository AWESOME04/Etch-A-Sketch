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


// funtion to create a custom grid based on user input
function createGrid(size){
    // Clear the existing grid
    mainDiv.innerHTML = '';

    const squareSize = totalWidth / size;

    // create grid boxes according to the user input
    for (let i = 0; i < size * size; i++){
        const squareDiv = document.createElement('div');
        squareDiv.style.width = squareSize + 'px';
        squareDiv.style.height = squareSize + 'px';
        squareDiv.style.border = '1px solid black';

        // Add hover effect to bg color
        squareDiv.addEventListener('mouseover', function(){
            squareDiv.style.backgroundColor = 'blue';
        });

        mainDiv.appendChild(squareDiv);
    }

}
