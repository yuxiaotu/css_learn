# border 边框属性

> **参考：**[CSS3之边框border](https://juejin.cn/post/6844904101382357000) | [奇思妙想边框动画](https://juejin.cn/post/6918921604160290830)

border 属性可以设置元素边框的样式。

## 01.用法

`border` 可以设置以下一些属性：

- border-width：边框宽度。
- border-style：边框样式。
- border-color: 边框颜色

```css
border: 边框宽度 | 边框样式 | 边框颜色
```

例如设置宽度为 5px ，颜色为红色，的实线边框。

```css
div {
    border: 5px solid red;
}
```

## 02.边框样式

`border-style` ，用来决定边框的样式。

- solid：实线边框。
- dashed：虚线边框。
- dotted：点线边框。
- doubble：定义内外两个边框，两个边框之间的间距和 border-width 一样。
- groove：3D效果的沟槽边框。
- ridge：3D脊边框。
- inset：3D嵌入边框。
- outset：3D突出边框。

## 03.单独设置各边

下面这些属性用于单独设置某一边的边框样式，分别是上、右、小、左四个位置的边框。

- border-top
- border-right
- border-bottom
- border-left

