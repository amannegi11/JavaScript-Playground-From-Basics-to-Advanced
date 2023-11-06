const notes=document.querySelector(".notes-container");
const btn=document.querySelector(".hello");
const html=`<p contenteditable="true" class="input-box"></p>
<button class="del">D</button>`;

btn.addEventListener("click",()=>{
  let note=document.createElement("div");
  note.className="note";
  note.innerHTML=html;
  notes.appendChild(note);  

})


notes.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }
})

