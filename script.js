let passwordDisplay = document.getElementById("password-display")
let passwordDisplayTwo = document.getElementById("password-display-two")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordLength = 13

function randomCharacters() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
   let passwordDisplay = ""
   let passwordDisplayTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordDisplay += randomCharacters()
        passwordDisplayTwo += randomCharacters()
    }
    
    document.getElementById("password-display").value = passwordDisplay
    document.getElementById("password-display-two").value = passwordDisplayTwo

}