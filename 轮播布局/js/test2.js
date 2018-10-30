// // CSS选择器--document.querySelector()
// var img4=document.querySelector('#images a:nth-child(4)');
// //ID--document.getElementById()
// var img4=document.getElementById('images').children[4];
// //类名--document.getElementByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByTagName()
// var img4=document.getElementsByTagName('a')[4];


// console.log(img4);

// img4.style.display="block";
// img0.style.display="none";


// 获取一组带超链接的图像

var imagesA=document.getElementById("images").children;
// console.log(imagesA);
// imagesA[0].style.display="none";//隐藏
// imagesA[5].style.display="block"; //显示

//通过更换类名来实现更换样式

// //26行元素隐藏
// imagesA[0].className="hiddenImg";
// //30行元素显示
// imagesA[4].className="displayImg";


//利用该计时器间隔1s，显示1张图像，其余图像隐藏。
var currentNo=0;
function changeImg(){
    //排他原理，先去掉同类，再突出自己
    for(var i=0;i<imagesA.length;i++){
        imagesA.className="hiddenImg";
        console.log(imagesA[i]);
    }   
    //在突出自己
    imagesA[currentNo].className="displayImg";

    //换个元素，为笑一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}

// var timer=window.setInterval(changeImg,1000);
var img=document.getElementById("images");

function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
     timer=window.setInterval(changeImg,1000);
}

var images=document.getElementById('#images')
// console.log(imagesDiv);
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);
