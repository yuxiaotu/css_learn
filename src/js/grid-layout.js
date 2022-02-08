let box = document.querySelector('.item');
let fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  let divNode = document.createElement('div');
  divNode.classList.add(`bgc-${i+1}`);
  fragment.appendChild(divNode);
}
box.appendChild(fragment);