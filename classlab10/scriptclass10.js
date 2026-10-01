console.log('\n ------ example 1')
//global variable
let msg = 'Thisis an outside message'

function displaymsg() {
    //local variable
    let msg = 'Hello World '
}
//calling function
displaymsg()

console.log(msg)

console.log('\n ------ example 2: constant variable')
//constant variable are variable whose value cannot be changed once assigned
const GRAVITY = 9.8
console.log(GRAVITY)
//GRAVITY = 9.9 --> the console will throw an error

console.log('\n ------ example 3: function in a variable')
const sum = function (num1, num2) {
    return num1 + num2
}
//calling the function
let s = sum(2, 7)
console.log(s)

console.log('\n ------ example 4: arrow function')
let greet = (n) => {
    console.log(`Welcome to functions ${n}`)
}

//calling the function
greet('Joseph Evans')

console.log('\n ------ example 5: function calling function')
//function that randomly generates a number between 1 and 6
function rollDice(){
    return Math.floor((Math.random()*6)+1)
}

function calltwice(){
    let dice1 = rollDice()
    let dice2 = rollDice()
    console.log(`${dice1} ${dice2}`)
}

//calling the function
calltwice()
calltwice()
calltwice()

console.log('\n ------ example 6: function returning function')
//function that checks if a number is greater than a main number
function makebetweenfunction(min, max){
    return function(num){
        return num >= min && num <= max
    }  
}

let child = makebetweenfunction(3, 7)

console.log(child(10))

console.log('\n ------ example 7: function returning function with arrow function')
//function that checks if a number is greater than a main number
function rollingdice(n){
    for(let i = 1; i <= n; i++){
        console.log(rollingdice())
    }
}

console.log('\n ------ example 8: spread syntax...')

nums = [3, 9, -6, 10, 1, 0]
let maxnum = Math.max(...nums)
console.log(maxnum)