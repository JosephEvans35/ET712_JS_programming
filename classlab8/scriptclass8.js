console.log("-----example 1: for loops")
//for loop to print from 0 to 4 inclusive; 0. 1. 2 .3 4
for(let n = 0; n<=4; n++){ 
  console.log(`The current counter is ${n}`) 
} 

console.log("-----example 1: for loops")

let n = parseInt(prompt("Enter a number between 0 and 90")) 
for(n; n<100; n++){ 
   if(n%2===0){ 
      console.log(n)
   } 

}


console.log("-----example 3: for loops for decreasing counter")

for(let m = 9; m >= 1; m-=3){
    console.log(m)
}

console.log("-----example 4: for loops in array")
let cars =['Mazda','Tasla','Dodge','BMW','Porshe']
for(let n of cars){
    console.log(n)

    if(n.length === 5){
        console.log(n)
    }
}
console.log("-----example 5: While loops as a counter")
// while to print from 0 to 4

let i = 0
while(i<=4){
    console.log(i)
    i ++ 
}

console.log("-----example 6: While to guess the number")

const SECRET = 8 

let usernumber = parseInt(prompt("Enter a number between 0 to 10"))

while(SECRET !== usernumber){
    parseInt(prompt("Wrong number! Enter another number: "))
}
console.log('Great! the secret number is ${SECRET}')

console.log("-----example 7: While to validate a number")

while(true){
    let number = parseInt(prompt("Enter a number 1-9:"))
    if(number >=1 && number <=9)
    {
        break
    }
}

console.log("-----example 8: for loop with continue statement")

for(let n = 0; n <=10; n++){
    if(n%3 ===0){
        continue
    }
    console.log(n)
}

