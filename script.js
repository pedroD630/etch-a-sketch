document.addEventListener("DOMContentLoaded", function () {

    function getRamdomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function createGrid(n, color) {
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

        changeColor(color);
    }
    
    function changeColor(color) {
        const gridItens = document.querySelectorAll(".grid-item");

        gridItens.forEach((item) => {
            if(color){
                item.addEventListener("mouseover", function() {
                    item.style.backgroundColor = color;
                });
            }
            else {
                item.addEventListener("mouseover", function() {
                    item.style.backgroundColor = getRamdomColor();
                });
            }
        });
    }

    createGrid(16);

    let btn = document.querySelector("#update");
    btn.addEventListener("click", function() {
        createGrid(prompt("Choose new grid size (Number of blocks)"));
    });

    let colorBtn = document.querySelector("#select-color");
    colorBtn.addEventListener("click", function() {
        changeColor(prompt("Choose a new color (name or hex - random for random)"));
    });

});