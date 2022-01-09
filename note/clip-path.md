# clip-path

## 01. 作用
`clip-path` 属性可以对一个元素进行「裁剪」，区域内的显示，区域外的隐藏。

`clip-path` 通过指定的闭合路径或者是形状，甚至是 `SVG` 中的 `clipPath` 标签定义的形状，裁剪出部分需要保留的区域，这样网页中的布局实现可以是多种多样的。

## 02. 剪裁图形
`clip-path` 可以剪裁圆、椭圆、多边形。

### 02.1. 圆形
例如，半径为 40%，圆心（50%，50%）

```css
clip-path: circle(40% at 50% 50%);
```

### 02.2. 椭圆形
例如，X轴半径为 30%，Y轴半径为 20%，圆心在（50%， 50%）。

```css
clip-path: ellipse(30% 20% at 50% 50%);
```

### 02.3. 多边形
绘制多边形，由多个坐标点构成。

例如，绘制一个三角形。

```css
clip-path: polygon(50% 0px, 100% 100%, 0px 100%);
```

### 02.4. inset
`round` 前的数据表示距离，分别是上，右，下，左。`round` 后的数据表示角的弧度分别表示左上角，右上角，右下角，左下角。

例如，绘制一个距离上下都是 25%，右上角和左下角的角度为 25% 的区域。
```css
clip-path: inset(25% 0% 25% 0% round 0% 25% 0% 25%)
```

## 03. clipPath标签

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