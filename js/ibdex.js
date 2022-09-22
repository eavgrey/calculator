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


