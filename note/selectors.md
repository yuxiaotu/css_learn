# 选择器

> **参考：**[CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

通过 CSS 选择器规定那些元素将会应用 CSS 规则。

## 01.基本选择器

在基础选择器中除了常用的 「类选择器」、「ID 选择器」、「元素选择器」还有以下两种选择器。

### 属性选择器

按照给定的元素，选择所有匹配的元素

- **a[title]：**存在 title 属性的 a 标签。
- **a[href="url"]：** href 属性等于 url 的 a 标签。
- **a[class~=logo]：** class 属性中包含 「logo」 的 a 标签。
- **a[class|=logo]：** class 属性中包含 「logo」或者是「logo-」为前缀的 a 标签。
- **a[class^=logo]：**class 属性中属性值是以 「logo」开头的 a 标签。
- **a[class$=logo]：** class 属性中属性值是 「logo」结尾的 a 标签。
- **a[class*=logo]：** class 属性中属性值至少包含一个 「logo」的 a 标签。

### 通用选择器

一个星号（`*`）就是一个通用选择器， .它可以匹配任意类型的HTML元素.在配合其他简单选择器的时候,省略掉通配选择器会有同样的效果.比如,`*.warning` 和`.warning` 的效果完全相同。

- ***[lang^=en]：** 选择所有带有 「leng」属性，且含有 en 开头的属性值的元素。
- ***.warning：** 选择所有 class 属性中含有 watning 的元素。等同于 `.warning`。
- ***#maincontent：** 选择所有 id 为 maincontent 的元素。

## 02.分组选择器

使用 逗号（`,`） 把 不同的选择器组合在一起。

```css
h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
```

## 03.组合器

### 后代组合器

空格组合器选择前一个元素的后代节点

```css
div span {
    
}
```

div 元素内的所有 span 元素

### 直接子元素

「 > 」组合器选择一个元素的直接子元素

```css
ul > li {
    
}
```

ul 元素中的直接子元素 li

### 一般兄弟元素

「 ~ 」后一个节点在前一个节点后面的任意位置，共享同一个父元素

```css
p ~ span {
    
}
```

于 p 元素同一级，又在同一个父元素内的 span 元素

### 紧邻的兄弟元素

「 + 」后一个节点紧跟在前一个之后，并且共享同一个父元素

```css
p + span {
    
}
```

紧邻 p 元素的 span 元素

### 列组合

「 || 」选择属于某个表格行的节点

```css
col || td {
    
}
```

所有 col 作用域中的 td 元素

