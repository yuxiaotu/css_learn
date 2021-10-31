# position 定位属性

> **参考：**[position:sticky 粘性布局](https://www.cnblogs.com/coco1s/p/6402723.html) | [CSS定位属性](https://juejin.cn/post/6921600028821684237) | [CSS定位机制](https://www.cnblogs.com/linghu-java/p/8964488.html)

position 属性用于指定一个元素在文档中的定位方式，CSS 有三种定位机制，分别是「普通流」、「float（浮动）」、「position（定位）」。

**普通流：**元素的位置就是按照其在 HTML 文档中的位置来决定。块级元素按照从上到下的顺序排列，每个块级元素占据一整行。而行内元素在一行中水平分布。

**浮动：** 浮动的元素会脱离文档流，向父元素的左侧或右侧移动。

**定位：** 通过 top，left，right，bottom 属性来调整元素与四周的位置实现定位。

## 01.relative

`position:relative`，是「相对定位」。

元素会依据未添加该属性时的位置进行改变，而且会在原来位置留下空白，所以可以在不影响元素布局的情况下调整元素的位置。移动元素会覆盖其他的元素。

![relative](https://img-blog.csdn.net/20141216154634968)

## 02.absolute

`position:absolute`，是「绝对定位」。

元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。

![absolute](https://img-blog.csdn.net/20141216154642515)

## 03.sticky

`position:sticky`

元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

## 04.fixed

`position:fixed`，是「固定定位」。

元素的位置相对于浏览器窗口是固定的。