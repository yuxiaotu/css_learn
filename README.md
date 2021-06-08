![css](https://cdn.lynda.com/course/5038219/5038219-637514184557920747-16x9.jpg)

# CSS 学习笔记

## 1，布局

:link: [Grid布局](https://juejin.cn/post/6854573220306255880)   [Flex布局](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)  

> 常用的布局方式有 flex 和 grid 两种。flex 是弹性盒子布局方式，定义了一种针对用户界面设计而优化的CSS盒子模型。弹性容器的子元素，可以在任何方向上排布，也可以伸缩尺寸。grid 是网格布局，可以将一个页面划分为几个区域。

### Flex  方式

flex 布局的属性可以分为容器属性和项目属性，不管作用在容器上还是项目上都是为了控制项目的呈现效果。前者是控制整体，后者是控制个体。

| 容器属性        | 作用                               | 项目属性    | 作用             |
| --------------- | ---------------------------------- | ----------- | ---------------- |
| flex-direction  | 排列方式                           | order       | 排序位置         |
| flex-wrap       | 是否换行                           | flex-grow   | 分配剩余空间     |
| flex-flow       | 简写形式                           | flex-shrink | 项目的收缩比例   |
| justify-content | 子项在主轴上的对齐和分布方式       | flex-basis  | 元素的默认大小   |
| align-items     | 子项在交叉轴上的对齐和分布方式     | flex        | 简写形式         |
| align-content   | 多根轴线在交叉轴上的对齐和分布方式 | align-self  | 单独控制某个元素 |

**容器属性**

- **flex-direction  :  row | row-reverse | column | column-reverse**

- **flex-wrap: nowrap | wrap | wrap-reverse **

- **flex-flow:  flex-direction  ||  flex-wrap**

- **justify-content: flex-start | flex-end | center | space-between | space-around**

  ```css
  space-between  两端对齐
  space-around   环绕
  ```

- **align-items: stretch | flex-start | flex-end | center | baseline**

  ```css
  stretch  高度拉伸
  baseline 基线对齐
  ```

- **align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;**

  ```css
  stretch  每一行项目等比例拉伸
  space-evenly 每一行元素都上下等分
  ```

**项目属性**

- **order: integer**
- **flex-grow: integer**
- **flex-shrink: integer**
- **flex-basis: length | auto**
- **flex: flex-grow | flex-shrink | flex-basis**
- **align-self : auto | flex-start | flex-end | center | baseline**



### Grid 方式

相比于Flex，Grid是一种二维布局方式。Grid 布局将容器分为了行和列，产生了网格，将元素放在这些网格中实现布局。

| 容器属性              | 作用               | 项目属性              | 作用               |
| --------------------- | ------------------ | --------------------- | ------------------ |
| grid-template-columns | 设置列宽           | grid-column-start/end | 网格线的开始和结束 |
| grid-template-rows    | 设置行高           | grid-area             | 网格区域           |
| grid-template-areas   | 划分网格区域       |                       |                    |
| justify-items         | 项目的水平呈现方式 |                       |                    |
| align-items           | 项目的垂直呈现方式 |                       |                    |







