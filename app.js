let userSeq = [];
let gameSeq = [];

let started = false;
let level =0;

let h2 = document.querySelector("h2");
// let btn = document.querySelector("button");
let btns = ["yellow","red","purple","green"];
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}` ;

    let randIndx = Math.floor(Math.random()*3);
    let randCol = btns[randIndx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randIndx);
    // console.log(randCol);
    // console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    // console.log("curr level = ",level);

    let indx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length - 1);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started.");
        started = true;
        levelUp();
    }
});

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
}

