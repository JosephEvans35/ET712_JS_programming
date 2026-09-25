console.log('\n ----Class Example 1: Arrays----' )
let travel =["Bus", "Train", "Plane"]
console.log(travel)
console.log("First travel:",travel [0])

console.log('\n ----Class Example 2: Using loop Through Array----' )
let icecream =["Vanilla", "Chocolate", "Strawberry", "Mit"]
for(let i = 0; i < icecream.length; i++){
    console.log(icecream[i])
}

console.log("\n------ Class Example 3: Functions -----")

function addNumbers(number1, number2) {
    return number1 + number2
}

let sum = addNumbers(5, 3)
console.log("The sum is:", sum)

console.log("\n----Lab Exercise Student Score Analyzer with AI")

let scores = []
for (let i = 0; i < 5; i++) {
    scores.push(Number(prompt("Enter Joseph score:")))
    
}

function gradeAverage() {
    return scores.reduce((total, score) => total + score, 0) / scores.length
}

let average = gradeAverage()
console.log("Scores:", scores)
console.log("Average:", average)

if (average >= 65) {
    console.log("You Pass!!!")
} else {
    console.log("Study More!!!")
}

