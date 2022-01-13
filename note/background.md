# background属性

## 01. 作用
`background` 是背景相关的属性的简写形式。背景相关的属性有如下一些：
- background-color
- background-image
- background-size
- background-repeat
- background-attachment
- background-origin
- background-position
- background-clip


## 02. background-color
`background-color` 设置颜色作为元素背景。

```css
background-color: skyblue;
background-color: #7bd5f5;
background-color: rgba(0, 128, 0, 0.3);
```


## 03. background-image
`background-image` 把图片作为元素背景。

```css
background-image: url(xxx.png);
```


## 04. background-size
`background-size` 用于设置充当背景的图片的大小。

可取的值如下：
- cover ：缩放图片，使图片可以完全覆盖元素区域。
- contain ：缩放图片，使得图片可以完全装入元素区域。
- 使用像素值设置。
- 使用比例值设置。

```css
background-size: cover;
background-size: contain;
background-size: 100px 100px;
background-size: 30% 30%;
```


## 05. background-repeat
`background-repeat`用于设置图片的重复方式。当背景图片不填充整个元素区域时，让图片进行重复填充。

可取的值如下：
- repeat-x ：沿着 x 轴重复。
- repeat-y ：沿着 y 轴重复。
- repeat ：同时沿着两个方向重复。
- space ：尽可能重复图片，不会裁剪图片，剩余区域会留空，留空会均匀分布。
- round ：于 `repeat` 相似，但是会产生图片拉伸。
- no-repeat ： 不重复。

```css
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
```


## 06. background-attachment
`background-attachment` 用于固定背景图片。

可取的值如下：
- scroll ：图片相对于内容是固定的，当内容移动，背景不会移动。
- fixed ：即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
- local ：果一个元素拥有滚动机制，背景将会随着元素的内容滚动。

```css
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
```


## 07. background-origin
`background-origin` 用于设置背景图片的定位区域。

- border-box ：背景图片覆盖到边框。
- padding-box ：背景图片覆盖到内边距。
- content-box ：背景覆盖到内容区域。

```css
background-origin: padding-box;
background-origin: border-box;
background-origin: content-box;
```


## 08. background-position
`background-position` 为每一个背景设置初始位置。 这个位置是相对于由 `background-origin` 定义的位置图层的。

可取的值如下：
- top
- bottom
- left
- right
- center
- 使用百分比定位

```css
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;
background-position: 20% 20%;
```

## 09. background-clip
`background-clip` 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

与 `background-origin` 相比 `background-clip` 会对背景图片进行裁剪。

可取值如下：
- content-box
- padding-box
- border-box

```css
background-clip: content-box;
backgeound-clip: padding-box;
background-clip: border-box;
```