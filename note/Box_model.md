# 盒模型

> **参考**：[MDN 盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)

网页中每个一个元素都像是一个个的盒子，而元素之间的排列和布局就像是大盒子中放入了小盒子。而我们所看到的整个网页就像是俯视这些放在一起的盒子。

## 01.盒模型的各个部分

一个完整的盒子模型由 4 个部分组成，分别是 conent，padding、border、margin。这四个部分也可以看出是四个套在一起的盒子。最大的那个盒子是 margin box 然后套着 border box，再里面套着 padding box ，最小的那个是 content box。

而每个元素最终呈现的效果就是我们俯视这些盒子的效果。

<br>

<img src="https://uploadfiles.nowcoder.com/images/20191016/138549510_1571192703575_F65244E03F1CC2B16471E8ADC4821E42" alt="box-model" style="zoom: 40%;" />

需要注意的是完整的盒模型只作用于块级元素，而内联元素只使用了盒模型中定义的部分内容。

## 02.盒模型种类

盒模型有两种，分别称为 「边框盒模型」和 「内容盒模型」。

在内容盒模型中，元素的宽度和高度仅仅是 content box 的宽度和高度，所以整个元素的宽度和高度还要再包括 padding box、border box 、以及 margin box 的间距。所以内容盒模型下，元素的真是高度盒宽度要大于所设置的宽度盒高度。

边框盒模型，则是把 border box、padding box，content box，这三个盒子的高度和宽度都包裹在一起了。我们所设置的宽度和高度，实际上是 border box 的宽度和高度。

内容盒模型也叫做标准盒模型，是 W3C 的一种标准。也是浏览器默认的一种盒模型。可以通过 box-size 属性来切换元素使用哪种盒模型。



