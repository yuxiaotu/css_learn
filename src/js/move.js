var moveElem = document.querySelector(".box"); //待拖拽元素

var dragging; //是否激活拖拽状态
var tLeft, tTop; //鼠标按下时相对于选中元素的位移

//监听鼠标按下事件
document.addEventListener("mousedown", function (e) {
  e = e || window.event;
  if (e.target == moveElem) {
    dragging = true; //激活拖拽状态
    tLeft = e.clientX - e.target.offsetLeft;
    tTop = e.clientY - e.target.offsetTop;
  }
});

//监听鼠标放开事件
document.addEventListener("mouseup", function () {
  dragging = false;
});

// //监听鼠标移动事件
document.addEventListener("mousemove", function (e) {
  e = e || window.event;
  if (dragging) {
    var moveX = e.clientX - tLeft,
      moveY = e.clientY - tTop;

    moveElem.style.left = moveX + "px";
    moveElem.style.top = moveY + "px";
  }
});
