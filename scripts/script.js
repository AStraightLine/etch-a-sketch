function populateGrid(x) {
    for (let i = 0; i < x; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute("id", "gridSquare"+i);
        gridContainer.appendChild(gridSquare);
        
        console.log(gridSquare);
    }
}

const gridContainer = document.querySelector("#gridContainer");

populateGrid(256);

const gridSqaures = document.querySelectorAll('.gridSquare');
console.log(gridSqaures);

gridSqaures.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("gridSquareEntered");
    });
});