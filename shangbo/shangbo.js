//创建需要的变量
const btn = document.querySelector('.thumb-bar');//小圆点
const ban = document.querySelector('.banner');//banner div块
const banimg = document.createElement("img")//banner
//创建四个小圆点，添加其点击效果


window.onload=function(){
   
    for(i=1;i<5;i++){
        banimg.setAttribute("src","images/datu"+i+".jpg")
        ban.appendChild(banimg)
    }
    

}

