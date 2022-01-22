# border 边框属性

## 01. 用法
`border` 属性用于设置元素边框的样式，可以设置以下一些属性：

- border-width：边框宽度。
- border-style：边框样式。
- border-color: 边框颜色

简写形式如下:

```css
border: 边框宽度 | 边框样式 | 边框颜色
```

例如，设置宽度为 5px、颜色为红色、的实线边框。

```css
div {
    border: 5px solid red;
}
```

## 02. 边框样式
`border-style` 用来设置边框的样式，其可选的属性值有以下一些。

- solid：实线边框。
- dashed：虚线边框。
- dotted：点线边框。
- doubble：定义内外两个边框，两个边框之间的间距是`border-width`。
- groove：3D效果的沟槽边框。
- ridge：3D脊边框。
- inset：3D嵌入边框。
- outset：3D突出边框。

除了上面这些，还可以设置为如下这些特殊的情况。

- none:
  
  如果没有设定背景图片，border-width 计算后的值将是 0，即使先前已经指定过它的值。在单元格边框重叠情况下，none 值优先级最低，意味着如果存在其他的重叠边框，则会显示为那个边框。

- hidden

  如果没有设定背景图片，border-width 计算后的值将是 0，即使先前已经指定过它的值。在单元格边框重叠情况下，hidden 值优先级最高，意味着如果存在其他的重叠边框，边框不会显示。

## 03. 单独设置各边
下面这些属性用于单独设置某一边的边框样式，分别是上、右、下、左四个位置的边框。

- border-top
- border-right
- border-bottom
- border-left


[https://juejin.cn/post/6918921604160290830](https://juejin.cn/post/6918921604160290830)