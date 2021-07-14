# Grid 布局

> 也叫网格布局，相对于 Flex 布局，这种方式可以在二维上进行布局，可以将一个页面划分为几个主要区域。可以像表格一样按照行或者是列来对齐元素。

> 参考资料：[codepen - Grid Layput](https://codepen.io/stacy/pen/rLyErg)

<br>



### 行和列

和 Flex 布局一样，采用 Grid 布局的区域也叫做容器，那么容器的水平区域称为行，水平区域称为列。而行和列的交叉区域称为单元格。

正常情况下 n 行 和 m 列会产生 n × m 个单元格。

通过在容器上设置以下两个属性来定义行高和列宽：

- grid-template-rows
- grid-template-columns

```css
.container {
    display: grid;
    grid-template-column: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```

上面的代码会把区域分为 3 行，3 列 ，9 个单元格。而每个单元格的行高是和列宽都是 100px。



### 设置间距

可以用下面 3 个属性来设置元素之间的间距：

- row-gap
- column-gap
- gap



### 区域属性

可以指定区域来来完成布局，一个区域由单个或者是多个单元格组成。

由此属性来定义区域。

- grid-template-area

```sql
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
```

