

const datas=[
    {
        question:"Which player has the record of most sixes in ODI's ?",
        options:["Rohit","Gayle","Afridi","Dhoni"],
        correct:"Afridi"
    },
    {
        question:"Who has the most goals in international football ?",
        options:["chhetri","Ronaldo","Messi","Neymar"],
        correct:"Ronaldo"
    },
    {
        question:"Who is often referred to as `The King of Football` and widely regarded as one of the greatest footballers of all time?",
        options:["Pelé","Ronaldo","Messi","Diego Maradona"],
        correct:"Pelé"
    },
    {
        question:"The player with the most Ballon d'Or awards, recognizing the world's best player ?",
        options:["chhetri","Ronaldo","Messi","Neymar"],
        correct:"Messi"
    },
    {
        question:"Who has the most IPL wickets ?",
        options:["Malinga","Piyush Chawla","YS Chahal","DJ Bravo"],
        correct:"YS Chahal"
    },
    {
        question:"What does 'RWD' stand for in the context of web development ?",
        options:["Really Wide Display","Responsive Web Design","Rapid Web Development","Relative Web Dimensions"],
        correct:"Responsive Web Design"
    },
    {
        question:"Which of the following is a server-side programming language often used in full-stack development?",
        options:["HTML","Python","JavaScript","CSS"],
        correct:"Python"
    },
    {
        question:" What phenomenon in quantum mechanics describes the ability of particles, such as electrons, to be in multiple quantum states at once until observed or measured ?",
        options:["Superposition","Entanglement","Wave-particle duality","Quantum tunneling"],
        correct:"Superposition"
    },
    {
        question:"Which of the following is an example of a NoSQL database ?",
        options:["MySQL","MongoDB","Oracle","PostgreSQL"],
        correct:"MongoDB"
    },
    {
        question:"What is the name of the star system closest to our solar system ?",
        options:["Alpha Centauri","Proxima Centauri","Vega","Betelgeuse"],
        correct:"Proxima Centauri"
    },
    {
        question:"Which Indian state is known as the `Land of Five Rivers` ?",
        options:["Gujarat","Maharashtra","Punjab","Kerala"],
        correct:"Punjab"
    },
    {
        question:"Which word is a synonym for `ubiquitous`? ",
        options:["Scarce","Peculiar","Common","Unique"],
        correct:"Common"
    },
    {
        question:`Which Middle Eastern country is known as the "Land of the Pharaohs" ?`,
        options:["Jordan","Egypt","Morocco","Mai nhi hun bhai"],
        correct:"Egypt"
    },
    {
        question:"Which African country is famous for its ancient pyramids, similar to those in Egypt? ",
        options:["Ethiopia","Sudan","Morocco","Ethiopia"],
        correct:"Sudan"
    },
    {
        question:"In the context of AI, what does the acronym `AGI` stand for? ",
        options:["Artificial General Intelligence","Automated General Inference","Artificial Genetic Information","Advanced Graphical Interface"],
        correct:"Artificial General Intelligence"
    },

];
const titles=["NOOB","LACKLUSTER","PRO","SUPER STAR","NEGI SPECIAL"]
const que=document.querySelector(".question");
const opts=document.querySelectorAll(".opt");
const btn=document.querySelector(".btn");
let allOpt;
let currentVal=0;
let score=0;

function display(){
    // console.log(currentVal,datas[currentVal].question);
    que.innerHTML=`Q: ${datas[currentVal].question}`

    let index=0;
    opts.forEach((opt)=>{
        opt.innerHTML=datas[currentVal].options[index];
        index++;
    })
}

opts.forEach((opt)=>{
    opt.addEventListener("click",checkIt);
})

function checkIt(e){
    if(e.target.innerHTML===datas[currentVal].correct){
        e.target.classList.add("right");
        score++;
    }else{
        e.target.classList.add("wrong");
    }
    move();
    
}
function move(){
    opts.forEach(opt=>{
        if(opt.innerHTML===datas[currentVal].correct){
            opt.classList.add("right");
        }
        opt.disabled=true;
    })
    btn.classList.add("active");

}
const sco=document.querySelector("p");
const title=document.querySelector(".title");
const msg=document.querySelector(".special");
function RESET(e=""){
        currentVal++
        if(datas.length===currentVal){
            stopWatch();
            btn.innerHTML="Reset";
            
            sco.classList.add("active");
            sco.children[0].innerText=`${score} Out Of ${datas.length}`;

            if(score<5){
                title.innerHTML=`"${titles[0]}"`
            }else if(score<8){
                title.innerHTML=`"${titles[1]}"`
            }else if(score<12){
                title.innerHTML=`"${titles[2]}"`
            }else if(score<15){
                title.innerHTML=`"${titles[3]}"`
            }else{
                title.innerText=`"${titles[4]}"`
            }
            
            msg.classList.add("active");
        }else if(e.target.innerHTML=="Reset"){
            currentVal=0;
            score=0;
            btn.innerHTML="Next";
            sco.classList.remove("active");
            msg.classList.remove("active");
            frontPage.classList.remove("close");
            quizPage.classList.add("close");
        }
        
        else{
            btn.classList.remove("active");
            opts.forEach((opt)=>{
                opt.classList.remove("right");
                opt.classList.remove("wrong");
                opt.disabled=false;
            })
            display();
        }
    }

btn.addEventListener("click",RESET);




//starting
const frontPage=document.querySelector(".Hello");
const quizPage=document.querySelector(".container");
const start=document.querySelector(".newBtn");

start.addEventListener("click",()=>{
    frontPage.classList.add("close");
    quizPage.classList.remove("close");
    opts.forEach((opt)=>{
        opt.classList.remove("right");
        opt.classList.remove("wrong");
        opt.disabled=false;
    })
    startWatch();
    display();
})

// stopwatch

const seconds=document.querySelector(".seconds");
const minutes=document.querySelector(".minutes");
let Watch=null;
let [mint,sec]=[5,0];

function startWatch(){
    minutes.innerHTML="05";
    seconds.innerHTML="00";
    [mint,sec]=[5,0];
    if(Watch!=null){
        clearInterval(Watch)
    };
    Watch=setInterval(clock, 1000);
}
function stopWatch(){
    clearInterval(Watch);
}
function clock(){
    if(mint===0 && sec===0){
        clearInterval(Watch);
        currentVal=datas.length-1;
        opts.forEach(opt=>{
            opt.disabled=true;
        })
        btn.classList.add("active")
        RESET();
    }else if(sec===0){
        sec=59;
        mint--;
    }else{
        sec--;
    }
    minutes.innerHTML="0"+mint;
    seconds.innerHTML=sec<10? "0"+sec : sec;

}

