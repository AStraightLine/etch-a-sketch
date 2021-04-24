function populateGrid(size) {
    for (let i = 0; i < size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("id", "gridSquare"+i);
        gridContainer.appendChild(gridSquare);
        // Set background-color of each individual id so it isn't undefined later (replaces class declaration to avoid duplication, but still need class for adding listners)
        let currentSqaure = document.getElementById(gridSquare.id);
        currentSqaure.style.backgroundColor = "white";
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
        let currentSqaure = document.getElementById(div.id);
        currentSqaure.style.backgroundColor = "white";
    });
}

function addSketchListener() {
    gridSqaures.forEach((div) => {
        div.addEventListener('mouseover', () => {
            let currentSqaure = document.getElementById(div.id);
            if (currentSqaure.style.backgroundColor == "white") {
                currentSqaure.style.backgroundColor = 'rgb(' + 250 + ',' + 250 + ',' + 250 + ')';
            } else {
                currentColor = currentSqaure.style.backgroundColor;
                currentColor = currentColor.slice(4, 7);
                currentColor = parseInt(currentColor);
                if (currentColor > 0) {
                    nextColor = currentColor - 25;
                    currentSqaure.style.backgroundColor = 'rgb(' + nextColor + ',' + nextColor + ',' + nextColor + ')';
                } else {
                    return;
                } 
            }
        });
    });
}

function shadingListener(divID) {
    let currentSqaure = document.getElementById(divID);
    currentColor = currentSqaure.style.backgroundColor;
    if (currentColor == null) {
        currentColor.style.backgroundColor = "red";
    } else {
        return;
    }

}

const resetButton = document.querySelector('#resetButton');
const newSizeButton = document.querySelector('#newSizeButton');
const gridContainer = document.getElementById('gridContainer');

let gridSqaures = document.querySelectorAll('.gridSquare');
let size = 4096;
document.documentElement.style.setProperty("--rowNum", 64);
document.documentElement.style.setProperty("--colNum", 64);

populateGrid(size);
addSketchListener();

resetButton.addEventListener('click', clearSketch);

newSizeButton.addEventListener('click', () => {
    let newSize = 0;
    while(newSize < 4 || newSize > 100) {
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


