const box = document.querySelector('.box');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  let node = document.createElement('div');
  let left = Math.floor(Math.random() * 100);
  let top = Math.floor(Math.random() * 100);
  node.style.left = `${left}%`;
  node.style.top = `${top}%`;
  
  let diameter = Math.floor(Math.random() * 50 + 10);
  node.style.width = `${diameter}px`;
  node.style.height = `${diameter}px`;

  node.classList.add(...['bubble', `bgc-${Math.floor(Math.random() * 10)}`]);
  fragment.appendChild(node);
}

box.appendChild(fragment);