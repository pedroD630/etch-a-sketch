document.addEventListener("DOMContentLoaded", function () {

    function createGrid(n) {
        const container = document.getElementById("grid-container");

        container.innerHTML = "";

        const cellSize = 100 / n;

        for (let i = 0; i < n * n; i++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-item");

            cell.style.width = `${cellSize}vmin`;
            cell.style.height = `${cellSize}vmin`;

            container.appendChild(cell);
        }

        const gridItens = document.querySelectorAll(".grid-item");
        
        gridItens.forEach((item) => {
            item.addEventListener("mouseover", function() {
                item.style.backgroundColor = "lightgreen";
            }
            )
        });
    }

    createGrid(16);

    let btn = document.querySelector("#update");
    btn.addEventListener("click", function() {
        createGrid(prompt("Choose new grid size (Number of blocks)"));
    });

});