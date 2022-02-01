let contentBox = document.querySelector('.content-box');
let fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  let divNode = document.createElement('div');
  divNode.classList.add(`bgc-${i+1}`);
  fragment.appendChild(divNode);
}
contentBox.appendChild(fragment);