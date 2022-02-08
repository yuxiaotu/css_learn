const pageNames = [
  "渐变背景",
  "阴影效果",
  "网格布局",
  "磨砂玻璃背景",
  "三栏布局",
  "两栏布局",
  "卡片翻转",
  "事件委托",
  "元素移动",
  "卡片展开",
]

const fragment = document.createDocumentFragment();

pageNames.forEach((name, index) => {
  let div = document.createElement('div');
  div.classList.add(...['item', `bgc-${index % 9 + 1}`]);
  div.innerHTML = `<a href="./html/${name}.html">${name}</a>`;
  fragment.appendChild(div);
});

document.body.appendChild(fragment);