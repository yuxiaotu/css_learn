# transition 过渡属性

## 01. 作用
CSS 的 transtion 属性可以在不使用 JavaScript 的情况下实现简单的动画交互效果。给一个元素添加 transition 后，让其某个属性从状态 A 变成状态 B 时，不在是非常直接突兀，而是带一个补间动画。    

## 02. 使用
使用 transition 时，可以设置 4 个属性分别是：

- #### transition-property：
  需要过渡效果的 CSS 属性，默认值为 all，即元素的所有属性都将产生过渡变化。

- #### transition-delay：
  延迟时间，默认值是 0。

- #### transition-duration：
  持续时间，整个过渡动画效果将在指定时间内完成，默认值是 0 。

- #### transition-timing-function：
  过渡时间函数，设定整个过渡运动在不同时间段的快慢情况，默认值是 ease。

`transition` 效果需要由某些行为进行触发，经常会使用 `:hover`  也就是当鼠标悬浮在元素上时进行触发。

当鼠标悬浮在元素上时，宽度将变成 200px，变化过程会在 2s 内完成。

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

## 02. 时间函数
`transition-timing-function` 属性描述了动画随着时间运动的速度，可以使用几种常见的速率，也可以使用贝塞尔曲线来自定义动画的变换速度。

几种常见的速率：

- ease：慢速开始，然后变快，然后慢速结束。相对于
- ease-in：慢速开始，相对于匀速，开始的时候慢，之后快。
- ease-out：慢速结束，相对于匀速，开始时快，结束时慢。
- ease-in-out：慢速开始和结束，相对于匀速，开始和结束都慢。
- linear：以相同速度开始至结束。

![timing-function](https://i.stack.imgur.com/qT6BD.png)

自定义贝塞尔曲线：

`cubic-bezier(x1, y1, x2, y2)` 函数用来自定义运动曲线。

此网站：[cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)，可以帮助设置自定义曲线。

## 03. 复合效果
可以分别控制每一个属性。

```css
div {
    transition: height 1s liner, transform .5s ease-in, color 2s ease-in-out;
}
```








