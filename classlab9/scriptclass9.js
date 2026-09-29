console.log("Joseph Evans")
console.log("\n-----example 1: intro to functions")
//define a function that print from 3 to 1
function printcount(){
    for(let num = 3; num>=1 ; num--){
        console.log(num)
    }

}

console.log("\n-----example 2: function with parameter")
function greeting(name){
    console.log(`Good Afternoon ${name.toUpperCase()}`)
}

//function that print a name. The name is passed to the function

console.log("\n-----example 3: function with parameter")
//function that prints a message that starts with number 1 all the way up to stopnumber
//the stopnumber and the message are passed to the function
function greetcount(msg, stopnumber){
    for(let n = 1; n<=stopnumber ; n++){
        console.log(`${msg} ${n}`)
    }
}

console.log("\n-----example 4: function with parameter")
//function that prints 'snake's eyes if two number are 1
function snake(n1, n2){
    if(n1===1 && n2 ===1){
        console.log("snake's eyes")
    } else{
        console.log("not snake 's eyes")
    }
}

console.log("\n-----example 5: function that returns value")
//function tat calculates the area of the square and return the calculate area.
function areasquare(side){
    console.log("Calculate area of square with side,", side)
    const area = side * side
    console.log("The area is ", area)
    return area
}

console.log("\n-----example 6: function that returns a Boolean value")
//function that return 'true' if the temperature is greater than 75
//otherwise return 'false'
//The temperature is passed on to the function

function checktemperature(t){
    if(t>75)
        return true
    else
        return false
}

console.log("\n-----example 7: JS Built-in math Functions ")
const PI = Math.PI
console.log(PI)
console.log(`Round PI = ${Math.round(PI)}`)
console.log(`ceil PI = ${Math.ceil(PI)}`)
console.log(`Floor PI = ${Math.floor(PI)}`)
console.log('power 2^5 = ${Math.pow(2,5)}')
console.log(`square root of 81 = ${Math.sqrt(81)}`)
console.log(`random number = ${Math.random()}`)
console.log(`Return a random number between 1 and 9 ${Math.round(Math.random() * 9)}`)

console.log("\n-----example 8: Built-in Math function ")
//function that will randomly pick a color fro an array
let color =['blue', 'red', 'yellow', 'pink', 'green']

function pickindex(lastindex){
    let random_index = Math.floor(Math.random()*lastindex)
    return random_index
}
let index = pickindex(color.length)
let pickedcolor = color[index]
console.log(`Random picked color = ${pickedcolor}`)