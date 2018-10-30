
var timer;//定时器设计的变量

//启动定时器函数定义--若在启动定时器时有很多附加操作可以一并写入该函数。
//若启动定时器动作单一，可以直接调用window定时器
// function startTimer(speed){
//     timer=window.setInterval(changeNum,speed);
// }
// // 调用定时器，时程序从一开始就执行变化
// startTimer(100);

timer=window.setInterval(changeNum,1000);

// 获取div元素
var images1=document.querySelector('#images');
var images2=document.getElementById('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);
images2.children[4].style.

// 设置当前变化的号码变量以及初值
var currentNo=1;

// 定义变化数字函数，0-->9，到达9时后变化到0
function changeNum(){
    if(currentNo<8) currentNo++;
    else currentNo=1;
    // h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg"alt=""></img>';
    // console.log(currentNo);
}
// console.log(timer);

// 获取控制按钮
var btnObj=document.getElementById('btnObj')
// console.log(btnObj);

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的值
function startChange(){
    startTimer(500);
    btnObj.textContent="停止"
}

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.setInterval(changeNum,100);
    btnObj.textContent="启动"
}
// 为按钮添加水白哦移入移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);