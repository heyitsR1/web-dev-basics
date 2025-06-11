// JS week 5, learning about event listeners
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

    // JS week 6, learning more about event listeners, creating an interactive UI 

    function changeBackgroundColor(color) {
        color_box.style.backgroundColor=color;
    }
    const color_box = document.querySelector('.color-section')

    const red_bttn = document.querySelector('#red_button')
    const blue_bttn = document.querySelector('#blue_button')
    const green_bttn = document.querySelector('#green_button')
    const yellow_bttn = document.querySelector('#yellow_button')
    const calculate_bttn = document.querySelector('#calculate_button')

    red_bttn.addEventListener ('click', () => {changeBackgroundColor('red')})
    blue_bttn.addEventListener ('click', () => {changeBackgroundColor('blue')})
    green_bttn.addEventListener ('click', () => {changeBackgroundColor('green')})
    yellow_bttn.addEventListener ('click', () => {changeBackgroundColor('yellow')})

    const box_height = color_box.clientHeight
    const box_width = color_box.clientWidth


    calculate_bttn.addEventListener ('click', () => {
        console.log('event fired')
        const newDiv = document.createElement('div');
        color_box.appendChild(newDiv)
        newDiv.innerHTML = `The height of container is ${box_height}px and width is ${box_width}px!`
    })

    console.log()
    let vid = document.getElementById("myVideo");
    const play_bttn = document.getElementById("play_button");
    const pause_bttn = document.getElementById("pause_button");

    play_bttn.addEventListener('click',()=> {
        vid.play();
    })

    pause_bttn.addEventListener('click',()=> {
        vid.pause();
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