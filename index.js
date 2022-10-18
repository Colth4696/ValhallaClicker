let welcomeEl= document.getElementById("welcome-el")
let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
};


function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
};


    let userName = "You Son of a Bitch "
    let message = "Welcome Back "
    welcomeEl.innerText = message + userName