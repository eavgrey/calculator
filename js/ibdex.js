"use strict"
let numbers = document.querySelectorAll('.key')
let display = document.getElementById('display')
let theNum = ""
let clear = document.getElementById('clear')

clear () =>{ 

}

numbers.forEach(button=> {
    button.addEventListener('click', ()=> {
        theNum+= button.getAttribute("value")
        display.innerText = theNum
    })
})


