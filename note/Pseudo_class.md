# 伪类

> 伪类（pseudo class）被用来表示一个元素的特殊状态。不仅可以根据文档 DOM 树中的内容对元素应用样式，而且还允许根据诸如像导航历史这样的外部因素来应用样式，根据内容的状态，鼠标位置来应用样式。

> 参考资料：[标准伪类索引](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

<br>



### 语法

使用 冒号「 : 」来表示一个伪类

```css
selector:pseudo-class {
    property: value;
}
```

<br>



### 节点状态

**:hover **

当鼠标悬浮时的状态

```css
p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}
```

<br>



### 节点选择

**:first-child**

第一个子节点

```css
p i:first-child {
    color: red;
}
```

 <br>

**:nth-child(2n+b)**

当前元素的兄弟元素，按照位置顺序从 1 进行排列



