// create the grid
for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    document.querySelector(".grid-container").appendChild(gridItem);
  }
}
