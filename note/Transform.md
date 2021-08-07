# transform 属性

> 变换属性，可以对元素进行选择，缩放，倾斜，平移操作。

> 参考操作：[w3c school](https://www.w3schools.com/css/css3_2dtransforms.asp)

<br>

### 2D 变化方法

以下的这些方法将呈现 2D 变化的效果，

- translate()
- rotate()
- scaleX()
- scaleY()
- scale()
- skewX()
- skewY()
- skew()
- matrix()

**平移**

```css
div {
    transform: translate(50px, 100px);
}
```

**旋转**

```js
div {
    transform: rotate(20deg);
}
```

**缩放**

```js
div {
    transform: scale(0.5, 0.5);
}
```

**倾斜**

```css
div {
    transform: skew(20deg);
}
```



### 3D 变化方法

以下这些方法将呈现 3D 变化的效果，这些方法需要配合 perspective 属性来使用，不然这些属性也只是宽度和高度的变化。

- rotateX()

- rotateY()

- rotateZ()

  

