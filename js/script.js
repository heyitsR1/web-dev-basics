// Week 1: 
//     Learnt about console log 
//     variable declaration 
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

// Week 2: 
//     Learnt about if conditions
//     Learnt about loops

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
alert("Product is " + product_function(a));


// Week 3: 
//     Learnt about functions, hoisting
//     Learnt about arguments, default parameters, 


let z = prompt ("Enter number")
function table_function (x = 0){
    for (let i = 1; i <= 10; i++) {
        console.log (`${z} x ${i} = ${z*i}`)
        
    }
}
table_function(a)
// hoisting, js engine keeps all var and functions at top of block (code) for execution 
