function populateGrid(size) {
    for (let i = 0; i < size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("id", "gridSquare"+size);
        gridContainer.appendChild(gridSquare);
    }
    gridSqaures = document.querySelectorAll('.gridSquare');
}

function removeOldGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function clearSketch() {
    gridSqaures.forEach((div) => {
        div.classList.remove('gridSquareEntered');
    });
}

function addSketchListener() {
    gridSqaures.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add("gridSquareEntered");
        });
    });
}

const resetButton = document.querySelector('#resetButton');
const newSizeButton = document.querySelector('#newSizeButton');
const gridContainer = document.getElementById('gridContainer');

let gridSqaures = document.querySelectorAll('.gridSquare');
let size = 256;

populateGrid(size);

gridSqaures.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("gridSquareEntered");
    });
});

resetButton.addEventListener('click', clearSketch);

newSizeButton.addEventListener('click', () => {
    let newSize = prompt("How many squares per side?");
    document.documentElement.style.setProperty("--rowNum", newSize);
    document.documentElement.style.setProperty("--colNum", newSize);
    size = newSize * newSize;
    console.log(size);
    removeOldGrid();
    populateGrid(size);
    addSketchListener();
});


