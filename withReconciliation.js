const appElement = document.getElementById("app");
let blocks = [];

function renderBlock(block) {
  const { id, color } = block;
  const existingBlock = document.getElementById(id);

  if (existingBlock) {
    existingBlock.style.backgroundColor = color;
  } else {
    const square = document.createElement("div");
    square.className = "square";
    square.id = id;
    square.style.backgroundColor = color;
    appElement.appendChild(square);
  }
}

function render() {
  blocks.forEach(renderBlock);
}

function addBlock() {
  const id = `block${blocks.length + 1}`;
  const color = getRandomColor();
  blocks.push({ id, color });
  renderBlock(blocks[blocks.length - 1]);
}

function removeBlock() {
  const id = prompt("Enter the ID of the block to remove:");
  blocks = blocks.filter((block) => block.id !== id);
  const blockElement = document.getElementById(id);
  if (blockElement) {
    blockElement.remove();
  } else {
    alert("Block not found!");
  }
}

function updateBlock() {
  const id = prompt("Enter the ID of the block to update (E.g. block1):");
  const color = prompt(
    "Enter the new color for the block (E.g. red, #FF5733):"
  );
  const block = blocks.find((block) => block.id === id);
  if (block) {
    block.color = color;
    renderBlock(block);
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

render();
