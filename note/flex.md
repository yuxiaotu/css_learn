# Flex 布局

- [flex 布局的特点](#01-flex-布局的特点)
- [轴线的概念](#02-轴线)
- [容器的概念](#02-容器)
  - [flew-wrap](#02.1-flex-wrap)
  - [justify-content](#02.2-justify-content)
  - [align-items](#02.3-align-items)
  - [align-content](#02.4-align-content)
  - [flew-flow](#02.5-flew-flow) 
- [子元素的概念](#03-子元素)
  - [order](#03-order)
  - [flew-grow](#03-flew-grow)
  - [flew-shrink](#03.3-flew-shrink)
  - [flew-basis](#03-flew-basis)
  - [align-self](#03-align-self)


## 01 flex 布局的特点
`flex` 布局也叫做「弹性盒子（flexibke box）」。是一种一维布局方式，一个 `flexbox` 一次只能处理一个维度上的元素布局，一行或者是一列。它给 `flexbox` 的子元素提供了强大的空间分布和对齐能力。

## 02 轴线
使用 `flex` 进行布局的时有一个新的概念 —— 就是「轴线」，在一个容器中有两条轴线，分别是「主轴」和「交叉轴」。容器中的子元素会依据主轴和交叉轴交的位置和方向进行排列。

![flex布局](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

通过 `flex-direction` 属性来设置主轴的方向，与主轴垂直的就是交叉轴的方向。

`flex-direction` 可以设置 4 个属性值：

- **row（默认值）：** 主轴为水平方向，起点在左端。
- **row-reverse：** 主轴为水平方向，起点在右端。
- **column：** 主轴为垂直方向，起点在上沿。
- **column-reverse：** 主轴为垂直方向，起点在下沿。

## 02 容器
使用 `display:flex` 属性把一个容器设置为 `flex` 布局，此时容器内子元素的 `float`，`clear`，`vertical-align` 属性将会失效。

容器可以设置下面这些属性，用来控制容器中的子元素在轴线上的排列。

### 02.1 flex-wrap
定义子元素在轴线上排列是否换行。

其可以设置的属性值如下：

- **nowrap（默认）：** 不换行。
- **wrap：** 子元素会换行，换行后的元素排在第一行的下方。
- **wrap-reverse：** 子元素会换行，但是换行后的元素排在第一行的上方。

### 02.2 justify-content
定义子元素在主轴上的排列方式。

其可以设置的属性值如下：

- **center：** 居中。
- **flex-start（默认）：** 从起点开始沿着轴线排列。
- **flex-end：** 从终点开始沿着轴线排列。
- **space-around：** 元素之间的间距相等。
- **space-between：** 起点和终点处的元素紧贴容器壁，其余元素之间距离相等。

### 02.3 align-items
定义子元素在交叉轴上的排列方式。

其可设置的属性如下：

- **center：** 居中。
- **flex-start：** 从交叉轴起点开始。
- **flen-end：** 从交叉轴的终点开始。
- **baseline：** 第一行文字的基线。
- **stretch（默认）：** 元素会占满整个容器的高度。

### 02.4 align-content
当有多根主轴时定义多根主轴与交叉轴相交的位置。

其可设置的属性如下：

- **center：** 居中。
- **flex-start：** 从交叉轴起点开始。
- **flex-end：** 从交叉轴的终点开始。
- **space-between：** 起点和终点处的元素紧贴容器壁，其余元素之间距离相等。
- **space-around：** 元素之间的间距相等。
- **stretch（默认）：** 元素会占满整个容器的高度。

### 02.5 flex-flow
是 `flow-direstion` 和 `flex-wrap` 这两个属性的简写形式。

书写方式如下：
```css
flex-flow: row wrap;
```

## 03 子元素
`flex` 布局的容器中，子元素也可以通过以下一些属性单独设置其排列方式。

### 03.1 order
通过设置数值来控制元素的排列顺序，数值越小的元素越靠前。

书写方式如下：
```css
order: 1
```

### 03.2 flex-grow
定义元素的放大比例，例如所有项目的 `flex-grow` 属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的 `flex-grow` 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

### 03.3 flex-shrink
定义元素的缩小比例，如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

### 03.4 flex-basis
属性定义了在分配多余空间之前，项目占据的主轴空间。

### 03.5 align-self
设置单个元素的对齐方式。

其可设置的属性如下：

- auto
- flex-start
- flex-end
- center
- baseline
- stretch（默认）

