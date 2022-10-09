"use strict"
let numbers = document.querySelectorAll('.num')
let display = document.getElementById('display')
let theNum = ""
let clear = document.getElementById('clear')
let multiple = document.getElementById('multiply')


let clearFunc = () => { 
   theNum = ""
    display.innerHTML = "0"
}   


numbers.forEach(button=> {
    button.addEventListener('click', ()=> {
        theNum+= button.getAttribute("value")
        display.innerText = theNum
    })
})

function backspace () {
    display.innerHTML = display.innerHTML.slice(0, -1)
    if (  display.innerHTML.length === 0 ){
        clearFunc()
    }
 }

let operator = ""
let currentNum = display.innerHTML

 function plus (){
    currentNum = display.innerHTML//6
    clearFunc()
operator = "plus"
 }


 function equal (){
if( operator === "plus") {
   display.innerHTML = parseFloat(currentNum)  + parseFloat(display.innerHTML) //63
} 
 }