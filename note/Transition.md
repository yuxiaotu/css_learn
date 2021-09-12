# transition 属性

在元素的状态发生改变时添加一个过渡的效果。

## 01.语法

transition 属性有三个属性值，分别定义了需要过渡效果的 CSS 属性名，过渡持续时间，转速曲线，延迟。

property 还有一个关键字 ：all ，可以作用于全部属性。

transition 属性可以指定为一个或者是多个 CSS 属性的过渡效果，多个属性之间用逗号分隔。

```css
{
	transition: property | duration | timing-function | delay;
}
```

```css
div {
    transition: background-color 0.5s ease;
    background-color: red;
}
```

