var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

for (const key in btnList) {
    if (btnList.hasOwnProperty(key)) {
        const element = btnList[key];
        switch(element.name){
            case 'increase':element.addEventListener('click',increaseValue);break;
              case 'decrease':element.addEventListener('click',decreaseValue);break;
            case 'addToCart':element.addEventListener('click',addToCart);break;
        }        
    }
}
// //抓取元素
// //获取购物车商品数量
// var totalQty=document.getElementsByName('totalQty')[0];

// // 获取所有加号按钮
// var increaseBtns=document.getElementsByName('increase');
// // 为所有加号注册单击事件
// for(let i=0;i<increaseBtns.length;i++){
//     increaseBtns[i].addEventListener('click',increaseValue);
// }
         
// var btnList=document.querySelectorAll('.btn-group.btn');
// console.log(btnList);

// for(let i=0;i<btnList.length;i++){
//     var element=btnList[i];
//     switch(element.name){
//         case'increase':element.addEventListener('click',increaseValue);
//         case'decrease':element.addEventListener('click',decreaseValue);
//         case'addToCart':element.addEventListener('click',addToCart);
//     }
// }

function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}
// 抓取元素

// // CSS
// var hh1=document.getElementsByClassName("badge badge-danger");
// console.log(hh1);
// // ID
// var hh2=document.getElementById("ee");
// console.log(hh2);
// // 标签
// var hh4=document.querySelector("span");
// console.log(hh4);
// // 名称
// var hh3=document.getElementsByName("totalQty");
// console.log(hh3);

// var totalQty=document.querySelector('.badge');
// var totalQty=document.querySelector('.nav-link.badge');
// var totalQty=document.querySelector('#totalQty');
// var totalQty=document.querySelector('span');
// console.log(totalQty);
// document.getElementById('totalQty')
// document.getElementsByClassName('badge badge-danger')
// document.getElementsByName('span')
// document.getElementsByName('totalQty')


// var shat=document.getElementsByName('increase');
// console.log(shat);

// var shan=document.getElementsByName('decrease');
// console.log(shan);

// var shae=document.getElementsByName('addTest');
// console.log(shae);