# Flex 布局

> flex 布局也叫做弹性盒子（flexibke box）。是一种一维布局模型，因为一个 fkexbox 一次只能处理一个维度上的元素布局，一行或者是一列。它给 flexbox 的子元素提供了强大的空间分布和对齐能力。

> 参考资料：[codepen - Flexbox playground](https://codepen.io/enxaneta/pen/adLPwv)

<br>



### 轴线

使用 flex 进行布局的时候会引入一个新的概念——轴线，分别是主轴和交叉轴。我们使用flexbox 的属性都根这两根轴线有关。

通过 flex-direction 属性来定义主轴的方向，而于主轴垂直的就是交叉轴的方向。

flex-direction 可以设置 4 个值：

- row
- row-reverse
- column
- column-reverse

<br>



### 容器

采用了 flexbox 的区域就叫做 flex 容器。为了创建一个 flex 容器，需要把容器的 display 属性设置为 flex 。如此，flex 容器中的所有子元素都变成了 flex 元素。这些子元素的 CSS 属性都会有一个初始值。所以所有的属性都会有以下一些行为。

- 元素排列在一行
- 元素从主轴的起始线开始
- 元素不会在主维度方向上拉伸，但是可以缩小
- 会被拉伸来填充交叉轴
- flex-basis 属性为 auto
- flex-wrap 属性为 nowrap

除了上面提到的  flex-direction，flex-wrap 是作用在容器上的属性，还有一些元素同样也作用在容器上的可以修改容器内元素的一些表现行为。

- align-items 

  修改元素在交叉轴上的位置

- justify-content

  修改元素在主轴上的位置

<br>



### 元素

为了更好的控制 flex 元素，有 3 个属性可以作用元素上。

- flex-grow
- flex-shrink
- flex-basis

