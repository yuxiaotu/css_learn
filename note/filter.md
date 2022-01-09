# filter 滤镜属性

## 01. 作用
滤镜属性，可以将「模糊」、「颜色偏差」等图形效果用在元素上。用于调整图像、背景和边框的渲染。

## 02. 滤镜函数
通过 `filter` 属性的「滤镜函数」来使元素产生相应的效果，如果参数无效，那么滤镜也不会生效了。常用的一些滤镜函数如下:

- **blur()：** 图像模糊
- **drop-shadow()：** 图像后面投影
- **opacity()：** 图像透明度
- **brightness()：** 让图片变亮或者是变暗
- **contrast()：** 增加或者是减少对比度
- **grayscale()：** 图像转为灰度图像
- **invert()：**  翻转图像颜色
- **url()：** 接收一个 XML 文件，该文件设置了 一个[SVG滤镜](https://www.cnblogs.com/coco1s/p/14577507.html)

### 02.1. drop-shadow()
使用 `box-shadow` 添加阴影时，只能把阴影添加到「盒模型」上，简单的理解就是 `box-shadow` 只能添加一种矩形边框的阴影效果。但是 `drop-shadow` 可以提供更加智能的一种阴影效果，可以沿着元素不规则的边框添加阴影效果，就像下图的效果。

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57c8d1f120724ccca62ca7a66da7c0eb~tplv-k3u1fbpfcp-watermark.awebp" alt="drop-shadow" style="zoom:50%;" />

书写方式如下：
```css
filter: drop-shadow(X轴偏移量，Y轴偏移量，模糊半径，扩散半径、颜色)
```

```css
.drop-shadow {
    filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.5))
}
```

### 02.3. grayscale()
灰度设置，通过这个属性将网页或者是图像置为灰色。

例如，将灰度值调到 100%。
```css
.grayscale {
	filter: grayscale(100%);
}
```

### 02.4. brightness()
亮度设置，可以让元素出现高亮的效果，达到突出元素的作用，可以和 `:hover` 一起使用。也可以同时使用 `saturate()` 来提高元素的对比度。 

例如，同时把亮度和对比度提升 40%。
```css
button:hover {
    filter: brightness(140%) saturate(140%);
}
```



