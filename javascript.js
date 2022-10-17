const gridContainer = document.querySelector('#container');
const gridDimensionButton = document.querySelector('#griddimensions');

let gridDimensions = 16

function makeRow (n) {
    for (let i = 0; i < n; i++) {
    const divRow = document.createElement('div');
    divRow.classList.add('divRow','gridDiv');
    gridContainer.appendChild(divRow);
}
}

function makeBox (n) {
    const divRows = document.querySelectorAll(".divRow");
    divRows.forEach((row) => {
        for (let i = 0; i < n; i++) {
    const divBox = document.createElement('div');
    divBox.classList.add('divBox', 'gridDiv');
    row.appendChild(divBox);
}})}

function makeGrid (n) {
    makeRow(n);
    makeBox(n);
    touchBoxes();
}

makeGrid(gridDimensions);

gridDimensionButton.addEventListener('click', () => {
    rawDimensions = Number(prompt("Set dimensions, 1 - 100 boxes"));
    if (rawDimensions > 100 || rawDimensions < 0 || Number.isInteger(rawDimensions) !== true) {
        alert('Invalid input');
    } else {
        gridDimensions = rawDimensions;
        removeGrid();
        makeGrid(gridDimensions);
    };
})

function removeGrid () {
    const divRows = document.querySelectorAll(".divRow");
    divRows.forEach((row) => {
    gridContainer.removeChild(row)
    }
)}

function touchBoxes () {
    const divBoxes = document.querySelectorAll(".divBox");
divBoxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('touched', 'touching')
    });
    box.addEventListener('mouseleave', () => {
        box.classList.remove('touching')
    })
})}