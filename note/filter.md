# filter

> **参考**：[浏览器支持](https://www.caniuse.com/?search=filter)，
>
> ​			[filter 的神奇用处](https://juejin.cn/post/6966036468619804679)

css 中的滤镜属性，将模糊、颜色偏差等图形效果用在元素上。用于调整图像、背景和边框的渲染。

## 01.语法

```css
div {
    filter: filter-function
}
```

## 02.滤镜函数

通过 filter 属性的滤镜函数来使元素产生相应的效果，每一函数都需要一个参数，如果参数无效，那么滤镜也不会生效了。常用的一些滤镜函数如下:

- **blur()**    图像模糊
- **drop-shadow()**     图像后面投影
- **opacity()**   图像透明度
- **brightness()**   让图片变亮或者是变暗
- **contrast()**   增加或者是减少对比度
- **grayscale()**   图像转为灰度图像
- **invert()**   翻转图像颜色
- **url()**  接收一个 XML 文件，该文件设置了 一个[SVG滤镜](https://www.cnblogs.com/coco1s/p/14577507.html)

## 03.drop-shadow()

一般会实用 box-shadow 给元素添加阴影，但是实用 box-shadow 只能把阴影添加到盒模型上，简单的理解就是 box-shadow 只能添加一种矩形边框的阴影效果。但是 drop-shadow 可以提供更加智能的一种阴影效果，可以沿着元素不规则的边框添加阴影效果。就像下图的效果。

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57c8d1f120724ccca62ca7a66da7c0eb~tplv-k3u1fbpfcp-watermark.awebp" alt="drop-shadow" style="zoom:50%;" />

```css
.drop-shadow {
    filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.5))
}
```

## 04.grayscale()

通过这个属性将网页或者是图像置为灰色。

```
.grayscale {
	filter: grayscale(100%);
}
```

## 05.brightness()

可以让元素出现高亮的效果，达到突出签到元素的作用，和 :hover 一起实用。也可以同时使用 saturate() 来提高元素的对比度。 

```css
button:hover {
    filter: brightness(140%) saturate(140%);
}
```

## 06.backdrop-filter

backdrop-filter 属性和 filter 属性一样都是添加滤镜效果的属性，backdrop-filter 同样具有 filter 属性的滤镜方法，只是 backdrop-filter 属性可以为元素后面的区域添加属性，适用于元素背后的所有元素，同时为了看到效果，必须让元素部分透明。

