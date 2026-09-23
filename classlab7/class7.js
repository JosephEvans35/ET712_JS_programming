console.log("Joseph Evans");
console.log("\nExample 7: Array");
let mixedarray = ['cars', 10, true, 'apple', -3.5]
console.log('The 4th value is ${mixedarray[3]}')
console.log('origin array = ${mixedarray}')
console.log("\nExample 2: array methods")
// remove the first value (left-most) in array mixedarray
mixedarray.shift()
console.log('Array after shift method =${mixedarray}')

//add a value to the left-most in array mixedarray
mixedarray.unshift('NY, 280')
console.log('Array after unshift method = ${mixedarry]')

//add value to the right-most in array mixedrry
mixedarray.push(-360, 'QCC')
console.log('Array after push method = ${mixedrry}')

//METHOD THAT RETURN VALUE
//find the index number of 'cherries'
indexcherries = mixedarray.indexOf("cherries")
console.log('what is the index for cherries ${indexcherries}')
// it return -1 if the value doesn't exits 

indexqcc = mixedarray.indexOf("QCC")
console.log('what is the index of QCC? ${indexqcc}')

console.log("\n ...example 3: if statements")
//check for one condition.
//it will run code wrap in between curly braces if the stateent is true
//otherwise, if the statement is false, it will skip the code wrap in between the curly braces
let goodmood = true
let gotsleep = true

/*
if (gotsleep ==true && goodmood == true){
    console.log('Today is a good day!')
}
*/
if (goodmood && gotsleep){
    console.log('Today is a good day!')
}
console.log('Good Bye!')

console.log("\n ...example 4: if-else statements")
//has two branches
let n1 = 16
let n2 = 16

if (n1==n2){
    console.log('The numbers are equal')
}
else{
    console.log('The numbers are not equal')
}

console.log("\n ...example 5: if-else statements with isNaN function")
let userinput = prompt('Ehter a number')
let checkinput = isNaN(parseInt(userinput))

if(checkinput){
    console.log('${userinput} is a string')
}
else{
    console.log('${userinput} is a number')
}

console.log("\n ...example 6: multiway conditional statement ")
//check if the number is zero, negative or positive
let inputnumber = parseInt(userinput)
if(inputnumber ==0){
    console.log('The number is zero')
}
else if(inputnumber >0){
    console.log('The number is positive')
}
else if(inputnumber <0){
    console.log('The number is negative')
}
else{
    console.log('The input is not a number')
}
console.log("\n ...example 7: AND operator ")
//AND operator && return a true if all statement are true
// check if the useername is 6+ characters and has no space
let username = prompt("Enter a username")
if(username.length >=6 && username.indexOf(" ") == -1){
    console.log('Valid username')
}

else{
    console.log('invalid username')
}

console.log("\n ...example 8: OR operator ")
//OR operator || return a true if one of the statement is true
//rate a book if is excellent, good, average, invaild
let rate = parseInt(prompt('How do you like the book?\n3 for excellent, 2 for good, for average'))
if (rate === 3 || rate === 2){
    console.log('Thank you for choosing the book')
}
else if (rate === 1 || rate === 0){
    console.log('We are sorry that you find the book boring')
}
else{
    console.log('INVALID RATE')
}