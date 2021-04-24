function populateGrid(x) {
    for (let i = 0; i < x; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("id", "gridSquare"+i);
        gridContainer.appendChild(gridSquare);
    }
}

const resetButton = document.querySelector("#resetButton");
const gridContainer = document.querySelector("#gridContainer");

populateGrid(256);

const gridSqaures = document.querySelectorAll('.gridSquare');

gridSqaures.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("gridSquareEntered");
    });
});

resetButton.addEventListener("click", () => {
    gridSqaures.forEach((div) => {
        div.classList.remove("gridSquareEntered");
    });
});

