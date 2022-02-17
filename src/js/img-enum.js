const box = document.querySelector('.item');
const fragment = document.createDocumentFragment();

for(let i = 0; i < 3; i++) {
  let node = document.createElement('div');
  node.classList.add('img-item');
  node.style.background = `url(../assets/0${i+1}.jpg)`;
  fragment.appendChild(node);
}

box.appendChild(fragment);