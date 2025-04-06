let h2=document.querySelector("h2")
let gameseq=[]
let userseq=[]
let level=0
let btns=["one","two","three","four"]
let number_of_clicks=0;
let buttons=document.querySelectorAll(".btn")
for(btn of buttons){
    btn.addEventListener("click",btnpress)
}
document.addEventListener("keypress",function(){
    if(h2.innerText=="press any key to start the game"){
        levelup()
    }
    
})
function randgen(){
    return Math.floor(Math.random()*4)
}
function flash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function btnpress(){
    let btn=this;
    flash(this)
    let id=btn.getAttribute("id")
    userseq.push(id)
    number_of_clicks++;
    if(number_of_clicks==level){
        checkans()
    }
}
function levelup(){
    number_of_clicks=0;
    level++;
    h2.innerText=`Level: ${level}`
    let num=randgen()
    let btn=document.querySelector(`#${btns[num]}`)
    flash(btn)
    userseq=[]
    gameseq.push(btns[num])
    
}
function checkans(){
    let i=0;
    for(i=0;i<level;i++){
        if(gameseq[i]!=userseq[i]){
            alert("game over")
            h2.innerText="press any key to start the game"
            break;
        }
    }
    if(i==level){
        setTimeout(levelup,1000)
    }
}