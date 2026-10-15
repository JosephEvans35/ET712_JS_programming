//Select element to add event 
let btnPress = document.querySelector(".btnpress");
//Add a click event to the button
//when user clicks the button, it will open a dialog box
btnPress.onclick = function () {
    alert("ET712");
}

//collect the circle element
let circle = document.querySelector(".circle")
let counter = document.querySelector(".counter")
let btnreset = document.querySelector(".btnreset")
let setCounter = 0;
circle.onmouseover = function () {
    setCounter += 1;
    counter.textContent = setCounter
    circle.style.backgroundColor = changeColor();
}
btnreset.onclick = function () {
    setCounter = 0;
    counter.textContent = 0;
}

function changeColor() {
    let red =Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

//Event Listener

let btnchangecolor = document.querySelector(".btnchangecolor")
btnchangecolor.addEventListener("click", function (event) {
    event.target.style.backgroundColor = changeColor()
    if(event.target.textContent === "Change Color"){
        event.target.textContent ="Click Again"
    }
    else{
        event.target.textContent = "Change Color"
    }
});