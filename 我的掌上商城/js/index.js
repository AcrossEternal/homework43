//页面加载完成之后执行
window.onload=function(){
    //搜索区块的颜色变化
    search();
};
//搜索区块的颜色变化
function search(){
   /*
    * 1.颜色随着页面的滚动逐渐加深
    * 2.当我们超过轮播图的时候颜色保持不变
    * */

    //获取搜索盒子
    var searchBox=document.querySelector('.hm_header_box');
    //获取banner盒子
    var bannerBox=document.querySelector('.hm_banner');
    //获取高度
    var h=bannerBox.offsetHeight;

    //监听window的滚动事件
    window.onscroll=function(){
        //不断的获取离顶部的距离
        var top=document.body.scrollTop;
        var opacity=0;
        if(top<h){
            //1.颜色随着页面的滚动逐渐加深
            opacity=top/h * 0.85
        }else{
            //2.当超过轮播图的时候，颜色保持不变
            opacity=0.85
        }
        //包透明度设置上去
        searchBox.style.background="rgba(201,21,35,"+opacity+")";
    }
}
// 轮播
var imagesA=document.getElementById('images').children;
var currentNo=0;
function changeImg(){
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
    imagesA[currentNo].className="displayImg";
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
}

var img=document.getElementById('images')
images.addEventListener('mouseover',stopChange);
images.addEventListener('mouseout',startChange);
var timer=window.setInterval(changeImg,1000)
function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
     timer=window.setInterval(changeImg,1000)
}