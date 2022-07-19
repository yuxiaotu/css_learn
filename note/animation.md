# animation 属性

## 1. animation 属性的作用
`animation` 属性用于实现动画效果，结合 `@keyframes` 设置不同时段的元素状态，以此来定义一个动画。简单的讲就是从一个 CSS 配置样式转换到另一个 CSS 配置样式。

动画包括两个部分：

- 描述动画的样式规则
- 用于指定动画开始、结束以及中间点样式的关键帧



## 2. 使用
`animation` 可以设置下面这些属性：

- **animation-name：** 使用 `@keyframes` 定义的动画名称。
- **animation-duration：**  设置动画的持续时间。
- **animation-timing-function：** 设置动画过渡的类型。
- **animation-delay：** 设置动画开始的延迟时间。
- **animation-iteration-count：**设置动画循环次数。
- **animation-direction：**  设置对象动画是否在循环中反向运动。
- **animation-play-state：**设置动画的状态。



例如，设置一个宽度和高度逐渐增加的动画，动画持续时间是 2s。
```css
@keyframes a {
  0% {
    width: 50px;
    height: 50px;
  }

  100% {
    width: 100px;
    height: 100px;
  }
}
```

```css
div {
  animation-name: a;
  animation-duration: 2s;
}
```



## 3. 过渡状态

`animation-timing-function` 可以设置下面这些值。

- linear
- ease
- ease-in
- ease-out
- ease-in-out
- cubic-bezier()



## 4. 是否反向运动
`animation-direction` 可以取下面这些值。

- normal
- reverse
- alternate ：动画在奇数次时正向播放，在偶数次方向播放。
- alternate-reverse ：动画在奇数次方向播放，在偶数次正向播放。
- inherit
- initial



## 5. 动画的状态
`animation-play-state` 用于控制动画的状态，即「运动」或者是「停止」。

- running
- pause

通过 js 来控制动画的运动或者是停止。

```js
function pause() {
  document.querySelector('div').style.animationPlayState = "paused";
}

function run() {
  document.querySeletor('div').style.animationPlayState = "running"
}
```



## 6. 简写形式

例如，动画 a 三秒钟后开始，以两秒一个循环慢-快-慢方式，进行动画的展示，并且每次动画过后都会向相反方向执行动画。

```css
div {
  animation: a 2s ease-in-out 3s infinite alternate running;
}
```