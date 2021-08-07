# @media

> 可用于基于一个或者是多个「媒体查询」的结果来应用样式表的一部分。当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 快才会被应用于该文档。

> 参考资料：

<br>

### 1，语法

以下是使用 @media 的一般语法，@media 规则可以置于顶部或者是放在其他 @ 修饰的条件规则内部。

```css
@media mediatype and|not|only (media feature) {
    CSS-Code
}
```

以下例子，当设备屏幕的最大宽度是 300 px 的时候，背景将变成 lightblue。

```css

@medial screen and (max-width: 300px) {
    body {
        background-color: lightblue;
    }
}
```

<br>

### 2，媒体类型

- **all**	用于所有设备
- **print**    用于打印机设备预览
- **screen**   用于电脑屏幕，手机屏幕、以及平板
- **speech**   用于屏幕阅读设备

<br>

### 3，媒体特征

媒体特征描述了输出设备、浏览器环境的具体特性。以下是一些常用的特性。

- **max|min-width**
- **max|min-height**
- **device-width|height**    定义输出设备的屏幕可见宽度|高度

