let hour=document.querySelector(".hour");
let mint=document.querySelector(".minutes");
let sec=document.querySelector(".seconds");



setInterval(()=>{
    let time=new Date();
    hour.innerText=time.getHours()>9 ? time.getHours():"0"+time.getHours();
    mint.innerHTML=time.getMinutes()>9 ? time.getMinutes():"0"+time.getMinutes();
    sec.innerText=time.getSeconds()>9 ? time.getSeconds() :"0"+time.getSeconds();}
    ,1000)
