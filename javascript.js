const gridContainer = document.querySelector('#container');

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
}

makeGrid(8)
