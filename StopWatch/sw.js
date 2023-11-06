const stopSec=document.querySelector(".seconds");
const stopMin=document.querySelector(".minutes");
let [minutes,seconds]=[5,0]

function stopWatch(){
    
    if(seconds==0 && minutes==0){
        clearInterval(Watch);
    }else if(seconds==0){
        seconds=59;
        minutes--;
    }else{
        seconds--;
    }
    stopSec.innerHTML=seconds<10 ? "0"+seconds:seconds ;
    stopMin.innerHTML=minutes<10 ?"0"+minutes:minutes;
}

(function start(){
    const watch=setInterval(stopWatch,1000);
})();
// start();