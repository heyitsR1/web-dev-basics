// ____________________________________________________________
// Week 1: 
//     Learnt about console log 
//     variable declaration 
// ____________________________________________________________

console.log ("This is external file")
let x = "Rita Rimal";
console.log(x)

let a =5
let b =10

let sum = a+b
let difference = a-b
let product = a*b

console.log ("Sum is ", sum)
console.log ("Difference is ", difference)
console.log ("Product is ", product)

// ____________________________________________________________
// Week 2: 
//     Learnt about if conditions, control statements (switch)
//     Learnt about loops like for, while, 
// ____________________________________________________________


let year = 2080

if (year == 2082){
    console.log (year +" is current")
} else if (year >2082){
    console.log (year + " is upcoming")
} else {
    console.log (year + " has already passed")
}

let num = prompt ("Table of which number : ")
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} =  ${num*i}`);
}
let j = 0
while (j < 20) {
    if (j % 2 == 0) {
        j+=1
        continue
    }
    console.log("Odd Number is ", j)
    j+=1
}

// ____________________________________________________________
// Week 3: 
//     Learnt about functions, hoisting
//     Learnt about arguments, default parameters, 
//     Learnt about arrow functions, arrays, array operations
// ____________________________________________________________


let z = prompt ("Enter number")
function table_function (x = 0){
    for (let i = 1; i <= 10; i++) {
        console.log (`${z} x ${i} = ${z*i}`)
        
    }
}
table_function(a)

// hoisting, js engine keeps all var and functions at top of block (code) for execution 

const diff = (j,k) => j-k;
console.log (diff(10,5))

let arrr = ['gita', 'rita', 'sita','pizza']
console.table (arrr)

arrr.push('druke')
console.table (arrr)

arrr.pop()
console.table (arrr)

arrr.shift()
console.table (arrr)

arrr.unshift("DakuDasKaranxa")
console.table (arrr)


// ____________________________________________________________
// Week 4: 
//     Learnt about DOM and DOM Manipulation
//     Learnt about getELement
//     Learnt about Query Selector
// ____________________________________________________________

const main = document.getElementById("hello")
main.innerText = "Rajesh dai is a gunda!"
console.log (main)

const dain = document.getElementsByClassName("main-class")[0]
dain.innerText = "Yo ho ho ho, merry christmas"
console.log (dain.innerText)


const my_class = document.getElementsByClassName("new-class")

my_class[0].innerText = " Hello First"
my_class[1].innerText = " Hello Second"
my_class[2].innerHTML = " <i>Hello Third</i>"

const jkjk = document.querySelector(".new-class")
jkjk.innerText = "Hello from Query Selector"

const divElement = document.querySelector('div.abc')
const anchor = document.querySelector('div .abc')

divElement.innerHTML = "<b>divElement</b>"
anchor.style.color ="red";

// ____________________________________________________________
// Week 5: 
//     Learnt about Querty Selector All
//     Learnt about .style to change style of HTML elements from JS
//     Learnt about Event Listners
// ____________________________________________________________
console.log ("Debugs")
const text_elements = document.querySelectorAll('.wrapper .text')
const text_elements_length = text_elements.length

console.log('yyhyhyyh',text_elements_length)

for (let i = 0; i < text_elements_length; i++)
{   console.log(text_elements[i])
    if (i==0) {
        text_elements[i].style.backgroundColor = 'red'
    }
}

text_elements.forEach((text_element,index) => { 
    console.log (text_element,index)
    if (index == 0) {
        text_element.style.backgroundColor = "teal";
    } else if ( index == 1) { 
        text_element.style.backgroundColor = "blue";
    }
    
})



