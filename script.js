const quote1 = document.querySelector(".quote")
const button = document.querySelector(".img2")
const counter = document.querySelector(".counter")

let num1 = 0
button.addEventListener("click" ,async function(){
    
    num1++
    let response = await fetch("https://api.adviceslip.com/advice")
    let quote = await response.json()
    
    counter.textContent = `${num1}`
    quote1.textContent = quote.slip.advice
   
} )



