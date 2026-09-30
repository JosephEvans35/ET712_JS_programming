console.log("-----example 1: for loops")
//for loop to print from 0 to 4 inclusive; 0. 1. 2 .3 4
for(let n = 0; n<=4; n++){ 
  console.log(`The current counter is ${n}`) 
} 

console.log("-----example 2: for loops")
//For loop to print even numbers between initial value up to 100, exclusive
//The initial value is collected from the dialog box using promot()
let initial = parseInt(prompt("Enter a number less than 90")) 
for(initial; initial <100; initial++){

   if(initial % 2 === 0){ 
      console.log(initial)
   } 

}


console.log("-----example 3: for loops for decreasing counter")
//for loop to print from 9 to 1, inclusive, 9 6 3 
for(let m = 9; m >= 1; m-=3){
    console.log(m)
}

console.log("-----example 4: for loops in array")
let cars =['Mazda','Tasla','Dodge','BMW','Porshe']
for(let n of cars){
    //check and print car's name with 5 characters
    if(n.length === 5){
        console.log(n)
    }
}
console.log("-----example 5: While loops as a counter")
// while to print from 0 to 4, 0 1 2 3 4
//initial value
let i = 0
while(i<=4){
    console.log(i)
    i ++ //update of i = increase i by 1
}

console.log("-----example 6: While to guess the number")
//The value of a constant number CAN'T BE CHANGE
const SECRET = 8
//collect user number
let usernumber = parseInt(prompt("Enter a number between 0 to 10"))
//use a while to recollect usernumber if the collect number is not equal to SECRET
while(SECRET !== usernumber){
    usernumber = parseInt(prompt("Wrong number! Enter another number: "))
}
console.log(`Great! the secret number is ${SECRET}`)

console.log("-----example 7: While to validate a number")
//Validate if the input number is between 1 and 9
while(true){
    let number = parseInt(prompt("Enter a number 1-9:"))
    if(number >=1 && number <=9)
    {
        break
    }
}

console.log("-----example 8: for loop with continue statement")
//Skip numbers that are multipled of 3 between 0 and 10
for(let n = 0; n <=10; n++){
    if(n%3 ===0){
        continue
    }
    console.log(n)
}

