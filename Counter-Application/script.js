//Count Value
let count=0;

//Select elements
const counterEl=document.getElementById("counter");
// counterEl.textContent=count;

//Event Listeners
//increase by 1
document.getElementById("increaseBtn")
.addEventListener('click',function(){
 count++;
 counterEl.textContent=count;
});

//decrease by 1
document.getElementById("decreaseBtn")
.addEventListener('click',function(){
 count--;
 counterEl.textContent=count;
});

//increase by 10
document.getElementById("increaseByTenBtn")
.addEventListener('click',function(){
 count+=10;
 counterEl.textContent=count;
});

//reset
document.getElementById("resetBtn")
.addEventListener('click',function(){
 count=0;
 counterEl.textContent=count;
});