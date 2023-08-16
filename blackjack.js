
let player={
    name:"Venisha",
    credit: 100
}
let round=0;
let sum=0;
let cardEl=document.getElementById("cards");
let sumEl=document.getElementById("sumDisplay");
let msgEl=document.querySelector("#msg");
let creditEl=document.querySelector("#credits");
let roundEl = document.querySelector("#rounds");
let message="";
let max=13;
let min=1;

function randomCard(max,min){
  let x= Math.floor(Math.random()*(max-min+1))+min;  //x-> random number
  if(x>10){
    x=10;
  }
  if(x === 1){
    x=11;
  }
  return x;
}


let start=false;
function startGame(){
    win=false;
    isAlive=true;
    start=true;
    round++;
    roundEl.textContent="Round : "+round;
    if(player.credit>0){
        cardEl.textContent="Cards : ";
        sumEl.textContent = "Sum : ";
        let num1 = randomCard(max,min);
        let num2 = randomCard(max,min);
        sum=num1+num2;
        cardEl.textContent+=num1+" , "+num2;
        sumEl.textContent+=sum;
        msgEl.textContent= check();
    }
    
}

function drawCard(){
    if(isAlive=== true && win=== false && start=== true){
        sumEl.textContent = "Sum : ";
        let num3=randomCard(max,min);
        sum+=num3;
        cardEl.textContent+=" , "+num3;
        sumEl.textContent+=sum;
        msgEl.textContent=check();
    }
   
}

let win=false;
let isAlive=true;

function check(){
    if(sum<21){
        message="Try drawing a new card ? 😐";
    }
    else if(sum===21){
        win=true;
        player.credit+=20;
        message="Wohoo! You've got Blackjack! 🥳 (+20 credit)";
    }
    else{
        isAlive=false;
        player.credit-=10;
        message="You're out of the game 😭! Try a new game (-10 credit)";
    }
    creditEl.textContent=player.name +" : $"+player.credit;
    return message;  
}
