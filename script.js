const mainDiv = document.getElementById('container');

for(i = 0; i < 256; i++){
    mainDiv.appendChild(document.createElement('div'))
}

console.log(mainDiv);