const item = document.querySelector('.item');
const imgs = item.children;

item.addEventListener('click', () => {
  Array.from(imgs).forEach((imgNode, index) => {
    if (imgNode.classList.contains(`img-${index+1}`)) {
      imgNode.classList.remove(`img-${index+1}`);
      imgNode.classList.add(`img-${index+1}-move`);
    } else {
      imgNode.classList.remove(`img-${index+1}-move`);
      imgNode.classList.add(`img-${index+1}`);
    }
  })
})