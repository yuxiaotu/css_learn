# float 浮动属性

- [浮动元素的特性](#1-浮动元素的特性)
- [清除浮动的方法](#2-清除浮动)
- [利用浮动，实现文字环绕图片](#3-实现文字环绕图片)
- [利用浮动，实现首字母下沉](#4-实现首字下沉)


# 1. 浮动元素的特性

- 浮动元素会向父元素的左侧或右侧移动。
- 浮动元素会脱离文档流，但是默认不会从父元素中移出。
- 浮动元素向左或向右移动时，不会超过它前面的其他浮动元素。
- 浮动元素不会超过它上边浮动的兄弟元素。
- 块级元素会无视浮动元素，而行内元素像流水一样环绕浮动元素。
- 浮动元素的主要作用是让页面中的元素可以水平排列，浮动元素不会盖住文字，文字会自动环绕在浮动元素周围，所以可以利用浮动来设置文字环绕图片的效果。


# 2. 清除浮动
由于浮动元素会脱离文档流，导致父元素塌陷；举个例子：一个橡皮筋绑了10根筷子，此时橡皮筋就被撑开；当把筷子从橡皮筋中拿出来时，橡皮筋就变回原样。这样当话，父元素中如果有背景图片或是其他样式，就会受到影响。 

清除浮动的方法：
- 给父元素设置固定宽度。
- 给父元素添加 `absolute` 定位。
- 给父元素设置 `overflow: hidden`。
- 给父元素设置高度。
- 末尾元素添加 `clear: both`。
- 父元素添加伪元素。


# 3. 实现文字环绕图片
将图片设置为左浮动，其后的文字不会被覆盖而是会环绕在图片周围。

```css
img {
  float: left;
}
```

```html
<div>
  <img src="..."/>
  <p> 文字内容... </p>
</div>
```


# 4. 实现首字下沉
同样可以使用浮动的属性来实现段楼首字母下沉。

将段落第一行，第一个字设置为左浮动，同时增大字体。
```css
p:first-child::first-letter {
    front-size: 2em;
    float: left;
    margin: 0 .2em 0; 
}
```

## 参考
- https://juejin.cn/post/6982179919597928485#heading-10