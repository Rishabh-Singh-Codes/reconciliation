const appElement = document.getElementById("app");

function render() {
  appElement.innerHTML = "";
  blocks.forEach((block) => {
    const square = document.createElement("div");
    square.className = "square";
    square.id = block.id;
    square.style.backgroundColor = block.color;
    appElement.appendChild(square);
  });
}

function addBlock() {
  const id = `block${blocks.length + 1}`;
  const color = getRandomColor();
  blocks.push({ id, color });
  render();
}

function removeBlock() {
  const id = prompt("Enter the ID of the block to remove:");
  blocks = blocks.filter((block) => block.id !== id);
  render();
}

function updateBlock() {
  const id = prompt("Enter the ID of the block to update:");
  const color = prompt("Enter the new color for the block:");
  const block = blocks.find((block) => block.id === id);
  if (block) {
    block.color = color;
    render();
  } else {
    alert("Block not found!");
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let blocks = [];
render();
