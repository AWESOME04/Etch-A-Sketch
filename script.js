const mainDiv = document.getElementById('container');

// create a 16 x 16 grid and add event listener
for(i = 0; i < 257; i++){
    const squareDiv = document.createElement('div');

    squareDiv.addEventListener('mouseover', changeColor);
    function changeColor(e){
        squareDiv.style.backgroundColor = 'black';
    }

    mainDiv.appendChild(squareDiv);
}

console.log(mainDiv);