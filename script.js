// create the grid
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    document.querySelector(".grid-container").appendChild(gridItem);
  }
}

// Select the grid items
const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#F4CAE0";
  });
});

// Select the controls buttons
const clearGrid = document.querySelector("#clear-grid");
const setGridSize = document.querySelector("#set-grid");

clearGrid.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#FFF";
  });
});
