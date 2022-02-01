const pageNames = [
  "渐变背景",
  "阴影效果",
  "网格布局",
  "毛玻璃效果",
  "",
  "",
  "",
  "",
  "",
  "",
]

const fragment = document.createDocumentFragment();

pageNames.forEach((name, index) => {
  let div = document.createElement('div');
  div.classList.add(...['item', `bgc-${index % 9 + 1}`]);
  div.innerHTML = `<a href="./html/${name}.html">${name}</a>`;
  fragment.appendChild(div);
});

document.body.appendChild(fragment);