// Select the grid container
const gridContainer = document.querySelector(".grid-container");

// Select the controls buttons
const clearGrid = document.querySelector("#clear-grid");
const setGridSize = document.querySelector("#set-grid");

function createGrid(width = 320, numOfSquares = 16) {
  gridContainer.innerHTML = "";

  for (let i = 1; i <= numOfSquares; i++) {
    for (let j = 1; j <= numOfSquares; j++) {
      const gridItem = document.createElement("div");

      gridItem.classList.add("grid-item");
      gridItem.style.width = `${width / numOfSquares}px`;
      gridItem.style.height = `${width / numOfSquares}px`;
      gridContainer.style.width = `${width}px`;
      gridContainer.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;

      gridContainer.appendChild(gridItem);
    }
  }

  const gridItems = document.querySelectorAll(".grid-item");
  hoverGrid(gridItems);
}

function hoverGrid(gridItems) {
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#F4CAE0";
    });
  });
}

createGrid();

clearGrid.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#FFF";
  });
});

setGridSize.addEventListener("click", () => {
  const width = window.prompt("Enter the grid width (in pixels)");
  const numOfSquares = window.prompt("Enter the number of squares on a row");

  createGrid(width, numOfSquares);
});
