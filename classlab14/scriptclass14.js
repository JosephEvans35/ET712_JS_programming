
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")


function scrollGallery(pixels){
    document.querySelector('div.gallerycontainer').scrollBy(
        {
            left: pixels,
            behavior: "smooth"
        }
    )
}


btnright.addEventListener("click", function(){
    scrollGallery(500)
})

btnleft.addEventListener("click", function(){
    scrollGallery(-500)
})


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

myForm.addEventListener("submit", function(event){
    event.preventDefault()
})

const usernameInput = document.querySelector("#username")
const username = usernameInput.Value
if(username.trim()===""){
    msg.textContent = "Please enter a username"
    return
}
msg.textContent = 'Welcome to JS Form ${username}'


