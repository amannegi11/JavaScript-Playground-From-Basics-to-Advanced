const buttons=document.querySelectorAll("li");
let Output=document.querySelector("input")
let currentVal="";
const operators="+/*%="
const allOperators="+-/*%"
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerText==="="){
            if(allOperators.includes(currentVal[currentVal.length-1])){
                currentVal=eval(currentVal.slice(0,currentVal.length-1))
                Output.value=currentVal;
            }else{
                currentVal=eval(currentVal)
                Output.value=currentVal}
            
        }else if((currentVal==="" || currentVal==="-") && operators.includes(e.target.innerText)){
            Output.value=currentVal
        }else if(e.target.innerText=="AC"){
            currentVal="";
            Output.value=currentVal;
        }else if(allOperators.includes(currentVal[currentVal.length-1]) &&
        allOperators.includes(e.target.innerText)){
            currentVal=currentVal.slice(0,currentVal.length-1)+e.target.innerText;
            Output.value=currentVal;

        }
        else{
            currentVal+=e.target.innerText;
            Output.value=currentVal
        }
    })
})
// let 