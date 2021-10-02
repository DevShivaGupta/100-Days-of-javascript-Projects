'use strict'
const count=document.querySelector(".count");
const subtract=document.querySelector(".subtract");
const reset=document.querySelector(".reset");
const add=document.querySelector('.add');

function subcounter(){
    count.innerHTML--;
    };
    function resetcounter(){
        count.innerHTML=0;
    };
    function addcounter(){
        count.innerHTML++;
    };
subtract.addEventListener('click',subcounter);
reset.addEventListener('click',resetcounter);
add.addEventListener('click',addcounter);

