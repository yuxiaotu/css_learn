# 伪元素

> **参考**：[标准伪元素索引](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements) | [伪元素是怎么回事儿](https://juejin.cn/post/6997217183738626084) | [巧用伪元素before和after](https://juejin.cn/post/6854573204011221000)

 「伪元素」代表了某个元素的子元素，而这个子元素只是在逻辑上存在，并不存在于文档树中。伪元素同样可以为其添加样式。

## 01.常用伪元素

### :before

可以在元素的内容前面插入新的内容。

在元素前面插入一副图画。

```css
h1:before {
    content: url(...);
}
```

### :after

可以在元素的内容之后插入新的内容。

在元素之后插入一幅图画。

```css
h1:after {
    content: url(...);
}
```

### :first-line

用于向文本的首行设置特殊样式。

对 p 元素的第一行文本进行设置。

```css
p:first-line {
    color: #ff0000;
    font-variant: small-caps;
}
```

### :first-letter

用于向文本的首字母设置特殊样式。

```css
p:first-letter {
    color: #ff0000;
    font-size: xx-large;
}
```

## 02.分割线

使用 `:before` 和 `:after` 实现带文字的分割线。

```css
.first-title {
    position: relative;
    color: #a98661;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
}

.first-title:before,
.first-title:after {
    position: absolute;
    content: "";
    width: 110px;
    border-botttom: 1px solid #a98661;
    top: 50%;
    transform: translate(-50%);
}

.first-title:before {
    left: 100px;
}

.first-title:after {
    right: 100px;
}
```

```html
<div class="first-title">分割线</div>
```











