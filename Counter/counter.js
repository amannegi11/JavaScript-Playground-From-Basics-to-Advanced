const btns=document.querySelectorAll("button");
let value=0;
let updated=document.querySelector(".count")
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerText==="+"){
            value++
            updated.innerText=value;
        }else{
            value--;
            updated.innerHTML=value;
        }
    })
})