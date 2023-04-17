let color = 'black';
let gridSize = 16;

const gridContainer = document.getElementById('grid-container');
const sizeBtn = document.getElementById('size-button');

sizeBtn.addEventListener('click', () => changeSize());

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

// Generates 16x16 Grid 
const generateGrid = () => {
    for(let i=0; i<gridSize; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for(let i=0; i<gridSize; i++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square')
            gridSquare.addEventListener('mouseover', paintSquare);
            gridSquare.addEventListener('mousedown', paintSquare);
            gridRow.appendChild(gridSquare);
        };
        gridContainer.appendChild(gridRow);
    };
};

// Paint Square
const paintSquare = (e) => {
    if(e.type === 'mouseover' && mouseDown) {
        e.target.style.cssText = `background-color: ${color}`;
    };
    return;
};

const clearGrid = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const changeSize = () => {
    let size = parseInt(prompt("Please enter a grid size between 1 and 100"));
    if(size > 0 && size < 101) {
        gridSize = parseInt(size);
        clearGrid(gridContainer);
        generateGrid();
    }
    else {
        alert('Please enter a number between 1 and 100');
    }
};

window.onload = () => {
    generateGrid();
};