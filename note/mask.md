# mask 属性

## 01. 作用
`mask` 属性允许使用者通过遮罩或者是剪裁特定区域的图片的方式来隐藏一个元素的部分或者是全部可见区域。



## 02. 使用
使用位图来做遮罩。
```css
mask: url(x.png)
```

使用 `SVG` 图形做遮罩。
```css
mask: url(x.svg)
```

使用渐变来做遮罩。
```css
mask: linear-gradient(#000, transparent)
```



## 03. mask-repeat
`mask-repeat` 用于设置遮罩区域的重复。可以取下面这些值。

- repeat-x
- repeat-y
- repeat
- no-repeat
- space
- round




## 04. mask-position
`mask-position` 用于设置遮罩区域的定位。可以取下面这些值。

- top
- bottom
- left
- right
- center
