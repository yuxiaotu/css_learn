# transform 形变属性

- [transform 属性的作用](#01-作用)
- 2D 变化
    - [平移](#21-平移)
    - [旋转](#22-旋转)
    - [倾斜](#23-倾斜)
    - [缩放](#24-缩放)
- 3D 变化
    - [向屏幕内旋转](#31-向屏幕内旋转)
    - [向屏幕内移动](#32-向屏幕内移动)


# 1. 作用
`transform` 可以对元素进行「旋转」，「缩放」，「倾斜」，「平移」等操作。这些变化可以分为 `2D` 和 `3D` 的变换。


# 2. 实现 2D 变化
## 2.1 平移
`translate(x, y)` ，根据元素原始位置，设置元素在 X 轴或者是 Y 轴上的移动。

例如，让元素沿着 x轴和 y轴的正方向都移动 50px;
```css
div {
    transform: translate(50px, 50px); 
}
```

也可以单独设置：
- `translateX()` 表示在 x轴上的移动。
- `translateY()` 表示在 y轴上的移动。

## 2.2 旋转
`rotate(deg)`，按照元素的原点旋转指定角度。

例如，让元素顺时针旋转 45° 。
```css
div {
    transform: rotate(45deg);
}
```

## 2.3 倾斜
`skew(x, y)`，沿着 x轴和 y轴倾斜指定的角度。

例如，让元素沿着x轴倾斜 30°，沿着y轴倾斜 30°。
```css
div {
    transform: skew(30deg, 30deg);
}
```
单独设置：
- `skewX()` 表示沿着 x轴倾斜。
- `skewY()` 表示沿着 y轴倾斜。


## 2.4 缩放
`scale(x, y)` ，设置元素在 x轴或者是 y轴上的缩放。

例如，让元素在 x轴上拉伸一倍，在 y轴上缩小一倍。
```css
div {
    transform: scale(2, 0.5);
}
```

单独设置：
- `scaleX()` 表示沿着 x轴缩放。
- `scaleY()` 表示沿着 y轴缩放。


# 3. 实现 3D 变化
`3D` 变化可以让元素在三维空间内呈现变化的效果，这些方法需要配合 `perspective` 属性来使用，不然这些 3D 变化也只是呈现「宽度」和「高度」的变化。

三维空间中，z轴是垂直于屏幕的。

<img src="https://upload-images.jianshu.io/upload_images/6288846-da1fd04c9a9d9be3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/860/format/webp" alt="perspective" style="zoom:70%;" />

## 3.1 向屏幕内旋转
为父元素设置 `perspective` 属性，那么三维视觉内元素可以沿着 x轴，y轴进行旋转，从而呈现出向屏幕内旋转的效果。

`rotateX(deg)`，沿着 x轴旋转指定角度。

```css
div {
  transform: rotateX(30deg);
}
```

`rotateY(deg)`，沿着 y轴旋转指定的角度。

```css
div {
    transform: rotateY(30deg)
}
```

## 3.2 向屏幕内移动
在三维视觉内，`translateZ()` 可以使元素沿着z轴移动。移动值小于 0 呈现出向屏幕内移动的效果，移动值大于 0 呈现出向屏幕外移动。

```css
div {
    transform: translateZ(-100px)
}
```


