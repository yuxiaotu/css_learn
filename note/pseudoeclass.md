# 伪类

> **参考**：[标准伪类索引](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

有时候一个元素在不同动作下有不同的样式，比如链接在没有点击的时候有一个样式，在鼠标放上去的时候有另外的样式。链接的标签并没有变化，有变化的只是它的状态，伪类就是来实现这样的功能。

## 01.标记状态

### :hover 

当鼠标悬浮在元素上时，元素的状态将会改变。      

```css
p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}
```

### :link

选取未访问过的超链接元素。

未点击的超链接将呈现蓝色。

```css
:link {
    color: blue;
}
```

### :visited

选取已经访问过的超链接元素。

```css
:visited {
    color: red;
}
```

### :active

选取点中的元素。

### :focus

选取获得焦点的元素。

## 02.筛选功能

### :first-child

选取当前元素下的第一个子元素

```css
p i:first-child {
    color: red;
}
```

### :last-child

选取当前元素下的最后一个子元素。

 ### :nth-child(an+b)

选取指定位置的元素，参数 `an+b` 中的 a 和 b 是可变的。

选取 li 元素中序号是 2 的整数倍 +1 。也就是选取序号为 1，3，5，7... 的元素。

```css
li:nth-child(2n+1) {
    color: red;
}
```

### :nth-last-child(an+b)

和 `:nth-child` 一样，只是从后往前计数。

### :checked

选取勾选状态的 input 元素，只对 radio 和 checkbox 生效。



