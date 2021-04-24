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

function shadingListener() {

}

const resetButton = document.querySelector('#resetButton');
const newSizeButton = document.querySelector('#newSizeButton');
const gridContainer = document.getElementById('gridContainer');

let gridSqaures = document.querySelectorAll('.gridSquare');
let size = 4096;
document.documentElement.style.setProperty("--rowNum", 64);
document.documentElement.style.setProperty("--colNum", 64);

populateGrid(size);

gridSqaures.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("gridSquareEntered");
    });
});

gridSqaures.forEach((div) => {
    
});

resetButton.addEventListener('click', clearSketch);

newSizeButton.addEventListener('click', () => {
    let newSize = 0;
    while(newSize == 0 || newSize >= 100) {
        newSize = prompt("How many squares per side? (For performance reasons, no greater than 100 please)");
    }
    document.documentElement.style.setProperty("--rowNum", newSize);
    document.documentElement.style.setProperty("--colNum", newSize);
    size = newSize * newSize;
    console.log(size);
    removeOldGrid();
    populateGrid(size);
    addSketchListener();
});


