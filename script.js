let color = 'black';

const gridContainer = document.getElementById('grid-container');

// Create 16x16 Grid 
const createGrid = () => {
    for(let i=0; i<16; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for(let i=0; i<16; i++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square')
            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }
}

createGrid();


// addEventListener to all grid squares
const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(square => {
    square.addEventListener('mousemove', (e) => {
    // console.log(e);
    square.style.cssText = `background-color: ${color}`;
    });
});

