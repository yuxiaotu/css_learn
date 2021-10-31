# transform 形变属性

> **参考**：[w3cschool transform](https://www.w3schools.com/css/css3_2dtransforms.asp)  

transform 可以对元素进行旋转，缩放，倾斜，平移等操作。这些变化可以分为 2D 和 3D 的变换。

## 01.2D 变化

实现元素在二维平面内的变化。

### 平移

`translate(x, y)` ，根据元素原始位置，设置元素在 X 轴或者是 Y z轴上的运动。

沿着 x轴和 y轴的正方向移动 50px;

```css
div {
    transform: translate(50px, 50px); 
}
```

<div style="width:100px; height:100px; background-color: skyblue; transform:translate(50px, 0)"></div>

`translateX()` 表示在 x轴上的移动。

`translateY()`  表示在 y轴上的移动。

### 旋转

`rotate(deg)`，按照元素的原点旋转指定角度。

顺时针旋转 45° 。

```css
div {
    transform: rotate(45deg);
}
```

<div style="width:100px; height:100px; background-color: skyblue; transform: rotate(45deg) translate(50px, 0)"></div>





### 倾斜

`skew(x, y)`，沿着 x轴和 y轴倾斜指定的角度。

```css
div {
    transform: skew(30deg, 30deg);
}
```

<div style="width:100px; height:100px; background-color: skyblue; transform:skew(20deg, 20deg) translateX(50px)"></div>



`skewX()` 表示沿着 x轴倾斜。

`skewY()` 表示沿着 y轴倾斜。

 ### 缩放

`scale(x, y)` ，设置元素在 x轴或者是 y轴上的缩放。

元素在 x轴上拉伸一倍，在 y轴上缩小一倍。

```css
div {
    transform: scale(2, 0.5);
}
```

<div style="width:100px; height:100px; background-color: skyblue; transform: scale(2, 0.5) translateX(50px)"></div>

`scaleX()` 表示沿着 x轴缩放。

`scaleY()` 表示沿着 y轴缩放。

## 02.3D 变化

3D 变化可以让元素在三维空间内呈现变化的效果，这些方法需要配合 perspective 属性来使用，不然这些 3D 变化也只是宽度和高度的变化。

三维空间中，z轴是垂直于屏幕的。

<img src="https://upload-images.jianshu.io/upload_images/6288846-da1fd04c9a9d9be3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/860/format/webp" alt="perspective" style="zoom:70%;" />

### 旋转

在三维空间内元素可以沿着 x轴，y轴进行旋转，从而呈现出向屏幕内翻转的效果。

`rotateX(deg)`，沿着 x轴旋转指定角度。

```css
div {
    transform: rotateX(30deg);
}
```

<div style="-webkit-perspective:150;">
	<img src="https://p0.ssl.img.360kuai.com/t0123307ce9e2693f97.webp" width="150" style="transform: rotateX(20deg) translateX(50px)"/>
</div>



`rotateY(deg)`，沿着 y轴旋转指定的角度。

```css
div {
    transform: rotateY(30deg)
}
```

<div style="-webkit-perspective:150;">
	<img src="https://p0.ssl.img.360kuai.com/t0123307ce9e2693f97.webp" width="150" style="transform: rotateY(20deg) translateX(50px)"/>
</div>

