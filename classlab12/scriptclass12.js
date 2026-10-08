//get the element with class name "description"
//querySelector only selects the first element
let desc = document.querySelector(".description")

//querySelectorAll selects all elements 
let desc2 = document.querySelectorAll(".description")

//get the element with id 
let t = document.getElementById('title')

//get the element with tag name, 'li'

let list_item = document.getElementsByTagName('li')




let shape = document.querySelector(".shape")
let btnSquare = document.querySelector(".btnSquare")
let btnCircle = document.querySelector(".btnCircle")
let btnRectangle = document.querySelector(".btnRectangle")

btnCircle.addEventListener("click", function(){
    shape.textContent = "Circle".toUpperCase()
    shape.className = "circle"
})
btnRectangle.addEventListener("click", function(){
    shape.textContent = "Rectangle".toUpperCase()
    shape.className = "rectangle"
})
btnSquare.addEventListener("click", function(){
    shape.textContent = "Square".toUpperCase()
    shape.className = "square"
})