# BFC

> **参考**：[BFC in CSS](https://wangyeux.medium.com/bfc-block-formatting-context-in-css-d3eb384317e2) | [创建BFC](https://www.jianshu.com/p/88a11ff90794) | [10分钟理解BFC原理](https://zhuanlan.zhihu.com/p/25321647)

BFC 是 Block Formating Context 的缩写，中文叫做「块级格式化上下文」，是 CSS 布局中的一个概念。可以理解为让某个区域成为一个独立的区域而不被其他的元素影响，决定了其中的子元素如何排列，以及和其他元素的关系。

## 01.触发 BFC

只要元素满足下面任一条件就可以触发 BFC 特性：

- body 根元素
- 浮动元素，float 除 none 以外的值
- 决定定位，position
- display 为 inline-block，table-cells，flex
- overflow 除了 visible 以外的值 

## 02.BFC 特性

### 外边距崩塌

同一个 BFC 中当两个元素上下或者是左右排列的时候，在两者相邻的外边距一样的情况下，那么两者之间的实际间隔只有一倍的外边距，而不是两者的外边距之和。

```css
div {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
```

```html
<body>
    <div id="1"></div>
    <div id="2"></div>
</body>
```
div1 和 div2 虽然都有 100px 的外边距，但是两者之间的间距只有 100px，而不是 200px。

如果把这两个元素放入不同的 BFC 就可以防止边距崩塌，从而然两者的间距保持 200px。使用 `overflow` 属性触发 BFC。

```css
.container {
	overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
```

```html
<div id="1" class="container">
    <p></p>
</div>
<div id="2" class="container">
    <p></p>
</div>
```

### 清除浮动

浮动的元素会脱离文档流

```css
.father {
    border: 1px solid #000;
}
.son {
    width: 100px;
    height: 100px;
    background: #eee;
    float: left;
}
```

```html
<div class="father">
    <div class="son"></div>
</div>
```

由于子元素设置了浮动，此时父元素的高度只剩下了 2px 的边框距离，就不能包裹子元素了。使用触发 BFC 的容器就可以包裹浮动的子元素了。

```css
.father {
    border: 1px solid #000;
    overflow: hidden
}
```

### 浮动元素覆盖

```css
.a {
    height: 100px;
    width: 100px;
    float: left;
    background: lightblue;
}
.b {
    height: 200px;
    width: 200px;
    background: #eee;
}
```

```html
<div class="a"></div>
<div class="b"></div>
```

虽然两个容器是 “兄弟” 关系，但是会出现叠加的效果。第二个元素触发 BFC 就可以避免元素覆盖。

```css
.b {
    height: 200px;
    width: 200px;
    background: #eee;
    overflow: hidden;
}
```



