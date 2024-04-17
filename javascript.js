function createBoard() {
    let container = document.getElementById("container");
    

    for (let y = 0; y < 8; y++) {
        var row = document.createElement("div");
        row.classList.add("row");
        
        for (let x = 0; x < 8; x++) {
            var squareRow = document.createElement("div");
            squareRow.classList.add("square");
            row.appendChild(squareRow);
        }
        container.appendChild(row);
    }
        
}