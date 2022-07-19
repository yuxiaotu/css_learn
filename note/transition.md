# transition 过渡属性

## 1. transition 属性的作用
`transtion` 属性可以在不使用 `Js` 的情况下实现简单的动画交互效果。给一个元素添加 `transition` 属性后，可以让元素的某个属性从状态 A 变成状态 B 时，不在是非常直接突兀的改变，而是带一个补间动画。  

这种效果可以在鼠标点击、鼠标悬浮、获得焦点等对元素的任何改变中触发。



## 2. transition 属性的语法
使用 `transition` 时，可以设置 4 个属性分别是：

- **transition-property**
  设置需要过渡效果的 CSS 属性，默认值为 all，即元素的所有属性都将产生过渡变化。

- **transition-delay**
  设置过渡效果延迟开始的时间。

- **transition-duration**
  设置持续时间，整个过渡动画效果将在指定时间内完成，默认值是 0 。

- **transition-timing-function**
  设置过渡时间函数，设定整个过渡运动在不同时间段的快慢情况，默认值是 ease（慢速开始，然后变快，最后慢速结束的过渡效果）。

例如要实现鼠标悬浮在元素上时，宽度变成 200px，整个变化过程在 2s 内完成。
```css
div {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    transition: width 2s ease;
}
div:hover {
    width: 200PX;
}
```



## 3. 时间函数
`transition-timing-function` 属性描述了动画随着时间运动的速度，可以使用几种常见的速率，也可以使用贝塞尔曲线来自定义动画的变换速度。

几种常见的速率：

- **ease：**慢速开始，然后变快，然后慢速结束。相对于
- **ease-in：**慢速开始，相对于匀速，开始的时候慢，之后快。
- **ease-out：**慢速结束，相对于匀速，开始时快，结束时慢。
- **ease-in-out：**慢速开始和结束，相对于匀速，开始和结束都慢。
- **linear：**以相同速度开始至结束。

![曲线模型](https://i.stack.imgur.com/cxJuW.png)

自定义贝塞尔曲线设置变化速度：

使用 `cubic-bezier(x1, y1, x2, y2)` 函数来自定义运动曲线。

借助 [cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)，可以帮助设置自定义曲线。



## 4. 多个 transition 属性组合

当一个元素的多个属性具有各自的过渡效果时，可以将不同属性的过渡效果用逗号（`,`） 进行拼接。

例如，某个元素的高度在 1s 内线性变化，`transform` 属性在 0.5s 中以 `ease-in` 模式变化，而颜色属性在 2s 内以 `ease-in-out` 模式变化。

```css
div {
    transition: height 1s liner, transform .5s ease-in, color 2s ease-in-out;
}
```





