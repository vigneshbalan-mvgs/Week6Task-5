const name = document.getElementById('name')
const email = document.getElementById('email').value
const password = document.getElementById('pwd').value
const cpassword = document.getElementById('cpwd').value
const form = document.getElementById('form')
let popup = document.getElementById("popup")
const btn = document.getElementById("sgbtn");




function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

