const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","_","-","+","=","{","[","}","]",",",":",";","<",">",".","?",
"/"];


let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let generateBtn = document.getElementById("generate-btn")


//Getting a random character
function randomChar(){
    let randomNumber = Math.floor(Math.random()*characters.length)
    return characters[randomNumber]
}

//Generating two new passwords
generateBtn.addEventListener("click", function(){
    password1El.textContent = ``
    password2El.textContent = ``
    for(let i=0; i<8; i++){
        password1El.textContent += randomChar()
        password2El.textContent += randomChar()
    }

}) 
    
// Copy password one to clipboard
password1El.addEventListener("click", function(){
    let copyText = document.getElementById("password1-el")
    navigator.clipboard.writeText(copyText.textContent)
})

// Copy password two to clipboard
password2El.addEventListener("click", function(){
    let copyText = document.getElementById("password2-el")
    navigator.clipboard.writeText(copyText.textContent)
})


