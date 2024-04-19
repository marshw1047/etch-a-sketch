const container = document.getElementById("container"); 
container.classList.add("container");

function createBoard() {
    let size = prompt("Please enter a number 1-100 for grid size!");
    while (isNaN(size) || size < 1 || size > 100) {
        size = prompt("Invalid. Please enter a number 1-100 for grid size!");
    }

    newBoard();
    let squareSize = Math.floor((600 / size) - 2);

    for (let y = 0; y < size; y++) {
        var row = document.createElement("div");
        row.classList.add("row");
        
        for (let x = 0; x < size; x++) {
            var squareRow = document.createElement("div");
            squareRow.classList.add("square");
            squareRow.style.width = squareSize + "px";
            squareRow.style.height = squareSize + "px";
            row.appendChild(squareRow);
        }
        
        container.appendChild(row);
    }
    
    var squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        })
    })

}

function newBoard() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}