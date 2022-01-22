# Grid 布局

## 01. 作用
也叫网格布局，相对于 Flex 布局，这种方式可以在二维上进行布局，可以将一个页面划分为几个主要区域。可以像表格一样按照行或者是列来对齐元素。

## 02. 行和列
使用 `display:grid` 将容器设置为 grid 布局，容器内的水平区域称为「行」，垂直区域称为「列」，将容器分为了若干个单元格。

### 02.1. grid-template-columns | grid-template-rows
`grid-template-colums` 用于设置列数和列宽。`grid-template-rows` 用于设置行数和行高。

其可以设置的方式如下：

- 使用固定数值，或百分比。
- fr 关键字：表示比例关系
- auto-fill 关键字：单元格大小固定时，在一行（列）中容纳尽可能多的单元格。
- auto 关键字：由浏览器自己决定长度。
- repeat(重复次数，重复的值)：便于表示重复的值。
- minmax(最小值，最大值)：表示长度在指定范围内。
- 网格命名，还可以使用方括号，指定每行（列）的名字，方便以后的引用。

例如，将容器分为三列，每列宽为100px。
```css
grid-template-columns: 100px 100px 100px  
```

例如，将容器分为三列，分别占据父容器宽度的20% 30% 50%。
```css
grid-template-columns: 20% 30% 50% 
```

例如，将分为两列，第一列占据宽度的1/3，第二列占据宽度的2/3 。
```css
grid-template-columns: 1fr 2fr 
```

例如，将容器尽可能多的划分为 100px 宽的列。
```css
grid-template-columns: repeat(auto-fill, 100px) 
```

例如，将容器分为三列，让最后一列不小于100px、不大于1fr。
```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr)
```

例如，将第一列命名为 c1， 第二列命名为 c2。
```css
grid-template-column: [c1] 100px [c2] 100px
```

### 02.2. grid-template-area
使用单元格命名的方式来指定区域。

例如，将容器被划为 9 个单元格，顶部三个 header 组成为一个区域，中间区域分为了 main 和 sider 两个区域，最下面的三个单元格合并为 footer。
```css
grid-template-area: "header header header"
					"main main sider"
                    "footer footer footer";
```

当有不需要用的区域时用 `.` 代替。

### 02.3. justify-content | align-content

内容区域在容器内的水平位置以及垂直位置。

- start
- end
- center
- stretch
- space-around
- space-between

## 03.单元格
### 03.1. grid-auto-flow
设置单元格的放置顺序。

- **row（默认）：** 先行后列，沿着水平方向放置，如果超过容器宽度就会换到下一行开始。
- **column：** 先列后行，沿着垂直方向放置，超过了容器高度就会换到下一列。
- **row dense：** 当按照顺序放置的单元格无法放置时，就换一个可以放下的，其后的单元格仍然按照顺序排列，尽可能紧密填充。
- **column dense：** 同理，只是改为垂直方向。

### 03.2. justify-items | align-items
`justify-items` 设置单元格内容在主线上的排列方式，`align-items` 设置单元格内容在交叉线上的排列方式。

- **start：** 沿着开始方向排列。
- **end：** 沿着结束方向排列。
- **center：** 居中排列。
- **stretch（默认）：** 填充整个单元格。

### 03.3. grid-column-start | grid-column-end 
设置单元格左右边框开始和终止位置。

由下图可知通过设置边框的位置可以得到几个小的单元格，得到一个大的单元格。同样可以由 `grid-rows-start` 和 `grid-column-end` 来设置上下边框的位置。也可以使用 `grid-column` 和 `grid-row`  两个简写属性。

<img src="https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png" alt="单元格" style="zoom:70%;" />

### 03.4. justify-self | align-self
设置单个单元格内容在水平或垂直方向上的位置。

- start
- end
- center
- stretch