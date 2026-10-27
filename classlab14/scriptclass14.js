//collect the right and left buttons
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

//Define a function to move scroll the image gallery by the number of pixels
function scrollGallery(pixels){
    document.querySelector('div.gallerycontainer').scrollBy(
        {
            left: pixels,
            behavior: "smooth"
        }
    )
}

//add event to each button when clicked
btnright.addEventListener("click", function(){
    scrollGallery(500)
})

btnleft.addEventListener("click", function(){
    scrollGallery(-500)
})


//form event
//get the elements
const myForm = document.querySelector("#myForm")
const msg = document.querySelector(".msg")
const passwordInput = document.querySelector("#password")
const passwordError = document.querySelector("#passwordError")
const submitbtn = document.querySelector("#submitbtn")
const passwordmsg = document.querySelector(".passwordmsg")

window.addEventListener("load", function(){
    submitbtn.disable = true
    submitbtn.classList = "disablebtn"
})


//add event lisstener for the submit form
myForm.addEventListener("submit", function(event){
    //prevent the default reset of the data
    event.preventDefault()
})
//perform form validation
const usernameInput = document.querySelector("#username")
const username = usernameInput.Value

if(username.trim()===""){
    msg.textContent = "Please enter a username"
    return
}
msg.textContent = 'Welcome to JS Form ${username}'
//clear the username input field
usernameInput.Value =""



passwordInput.addEventListener('input', function(){
    const password = passwordInput.Value
    if(password.length < 8){
        passwordError.textContent = 'Password must be 8+ characters'
        submitbtn.disable = false
        submitbtn.classList = "disablebtn"
        passwordmsg.style.display = "block"
    }
    else{
        passwordError.textContent = ""
        submitbtn.disable = false
        submitbtn.classList = "disablebtn"
        passwordmsg.style.display = "block"
    }
})





