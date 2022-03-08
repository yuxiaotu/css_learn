# clip-path

## 01 作用
`clip-path` 属性的作用是对一个元素进行「裁剪」，区域内的显示，区域外的隐藏。

`clip-path` 通过指定的「闭合路径」或者「形状」，以及 `SVG`  图像中的 `<clipPath>` 定义的形状，裁剪出部分需要保留的区域，这样网页中的布局实现可以是多种多样的。


## 02 剪裁图形
`clip-path` 可以剪裁「圆」、「椭圆」、「多边形」。

### 02.1. 圆形
`circle(半径 at 圆心)` 方法可以设置所需要的圆的「大小」和「位置」。

- 半径，是元素宽度的百分比。
- 圆心，是距离圆心左上角的距离。

例如，剪裁一个半径为 `40%`，圆心在 `(50%，50%)` 的圆。
```css
clip-path: circle(40% at 50% 50%);
```

### 02.2. 椭圆形
`ellipse(x轴半径，y轴半径 at 圆心)` 方法可以设置所需要的圆的「大小」和「位置」。方法可以设置所需要的椭圆的「形状」和「位置」。

例如，X轴半径为 30%，Y轴半径为 20%，圆心在（50%， 50%）。
```css
clip-path: ellipse(30% 20% at 50% 50%);
```

### 02.3. 多边形
绘制多边形，由多个坐标点构成。

例如，绘制一个三角形，三个顶点分别在 `(50%, 0)`、`(100%, 100%)`、`(0, 100%)`。
```css
clip-path: polygon(50% 0px, 100% 100%, 0px 100%);
```

### 02.4. inset
`round` 前的数据表示距离，分别是上，右，下，左。`round` 后的数据表示角的弧度分别表示左上角，右上角，右下角，左下角。

例如，绘制一个距离上下都是 `25%`，「右上角」和「左下角」的角度为 `25%` 的区域。
```css
clip-path: inset(25% 0% 25% 0% round 0% 25% 0% 25%)
```


## 03 clipPath 标签
通过 `SVG` 来绘制剪裁的区域。需要用到 `<clipPath>` 标签。

```html
<section class="container">
  <img src="img01.jpg" class="contract">
  <img src="img02.jpg">
</section>
<svg height="0" width="0">
  <clipPath id="clip02">
    <circle cx="400" cy="210" r="0">
      <animate
        attributeType="CSS"
        attributeName="r"
        values="0;480;0"
        dur="9s"
        repeatCount="2"
      />
    </circle>
  </clipPath>
</svg>
```

```css
.contract {
  clip-path: url(#clip02);
  z-index:1;
}
```