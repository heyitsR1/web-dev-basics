// learning event listeners
window.addEventListener('DOMContentLoaded', () => { 
    console.log ("DOM loaded")
    let count = 0; 
    const increase_bttn = document.querySelector('.increase_button'); 
    const decrease_bttn = document.querySelector('.decrease_button'); 
    const counter = document.querySelector ("#counter")

    increase_bttn.addEventListener ('click', () => {
        if (count >= 10) {
            alert ("Error")
        } else { 
            count++
            counter.innerHTML = count;
        }
    })
    decrease_bttn.addEventListener ('click', () => {
        if (count <= 0) {
            alert ("Error")
        } else { 
            count--
            counter.innerHTML = count;
        }
    })



})



// let x = 0

// const button = document.querySelector('button'); 
// button.style.backgroundColor = "yellow"

// button.addEventListener('mouseenter', () => { 
//    button.style.backgroundColor = "aquamarine"
// })
// button.addEventListener('click', () => { 
//    button.style.backgroundColor = "blueviolet"
// })



window.addEventListener("load", () => {
    console.log ("Resources laoded")
})