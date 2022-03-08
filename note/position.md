# position 定位属性

- [position 属性的作用](#01-position属性的作用)
- [relative](#02-relative)
- [absolute](#03-absolute)
- [fixed](#04-fixed)
- [sticky](#05-sticky)


## 01 position 属性的作用
标签元素在网页中有三种排列方式：

- ### 普通流
  元素在网页上渲染的位置就是按照其在 `HTML` 文档中的位置来决定。块级元素按照从上到下的顺序排列，每个块级元素占据一整行。而内联元素则是在一行中水平排列。

- ### 浮动
  利用 `float` 属性，进行浮动排列。设置了 `float` 属性的标签元素会脱离文档流。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)

- ### 定位
  利用 `position` 属性，指定标签元素的定位方式，再结合 `top`，`right`、`bottom`、`left` 属性，来实现标签元素的定位。

`position` 属性可以设置下面这些定位方式：

- relative
- absolute
- fixed
- sticky


## 02 relative
`relative`，表示「相对定位」。即标签元素的移动是相对于其原来的位置而言的。

元素会依据未添加该属性时的位置进行改变，而且会在原来位置留下空白，所以可以在不影响元素布局的情况下调整元素的位置。移动元素会覆盖其他的元素。

![relative](https://img-blog.csdn.net/20141216154634968)


## 02 absolute
`absolute`，表示「绝对定位」。

标签元素会被移出正常的文档流，也不会再为其预留空间。标签元素会找到离它最近的一个祖先元素，同时该祖先元素也必须设置 `position` 属性，且取值不能是 `static`。按照这个祖先元素来进行移动。

如果找不到一个这样的祖先元素，那么会以 `<body>` 标签为依据进行移动。

绝对定位的元素可以设置 `margin` 属性，且不会与其他边距合并。

![absolute](https://img-blog.csdn.net/20141216154642515)


## 03 fixed
`fixed`，表示「固定定位」。

元素的位置相对于浏览器窗口是固定的。在页面滚动的情况下，标签元素的位置不会改变。


## 04 sticky
`sticky`，表示「粘性定位」。

是 `relative` 和 `fixed` 定位方式的混合，标签元素在跨越指定阈值前是 `relative` 定位，跨越指定阈值后是 `fixed` 定位。

通过设置下面四个属性来设置阈值，同时只有在设置了下面四个属性其中一个时，才可以使 `sticky` 属性生效。
- top
- left
- bottom
- right

例如，当标签元素 `top` 属性 大于 `100px` 阶段是 `relative` 定位，当 `top` 属性小于 `100px` 时是 `fixed` 定位。

```css
div {
  position: sticky;
  top: 100px;
}
```

