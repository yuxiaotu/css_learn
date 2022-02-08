# 盒模型

## 01. 含义
网页中每个一个元素都像是一个个的盒子，而元素之间的排列和布局就像盒子之间的排列布局，像是大盒子中放入了小盒子。而我们所看到的整个网页就像是俯视这些放在一起的盒子。



## 02. 盒模型的四个部分
一个完整的盒子模型由四个部分组成，分别是 `conent`、`padding`、`border`、`margin`。这四个部分也可以看成是四个套在一起的盒子。最大的那个盒子是 `margin box` 然后套着 `border box`，再里面套着 `padding box` ，最小的那个是 `content box`。

而每个元素最终呈现的效果就是我们俯视这些盒子的效果。

需要注意的是完整的盒模型只作用于块级元素，而内联元素只使用了盒模型中定义的部分内容。

**盒模型立体示意图：**

<img src="https://uploadfiles.nowcoder.com/images/20191016/138549510_1571192703575_F65244E03F1CC2B16471E8ADC4821E42" alt="box-model" style="zoom: 40%;" />

**盒模型示意图：**

![](https://camo.githubusercontent.com/af03985775ee854009316aa398ca01cecbc90355dce7106cc2a74ebfd2530314/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f62323534386230302d386639622d313165622d616239302d6439616538313462323430642e706e67)




## 02. 盒模型种类
盒模型有两种，分别为 「边框盒模型」和 「内容盒模型」。默认情况下都是内容盒模型，使用 `box-sizing:border-box` 可以将元素设置为边框盒模型。

<img src="https://connorshea.gitlab.io/images/posts/css-that-doesnt-suck/content-box-vs-border-box.png" alt="box-size" style="zoom:70%;" />


### 02.1. 内容盒模型
在内容盒模型中，为元素设置的 `width` 和 `height` 仅仅表示`content box` 这部分的宽度和高度，所以整个元素所占据的空间大小还要再包括 `padding box`、`border box` 、以及 `margin box` 的大小。在内容盒模型下，元素的实际高度和宽度要大于所设置的宽度和高度。

内容盒模型也叫做标准盒模型，是 W3C 的一种标准。也是浏览器默认的一种盒模型。可以通过 `box-size` 属性来切换到边框盒模型。


### 02.2. 边框盒模型
边框盒模型，则是把 `border box`、`padding box`，`content box`，这三个盒子的高度和宽度也包含在了 `width` 和 `height` 中。

**实际高/宽 = height/width + margin（上下）/ margin（左右）**





