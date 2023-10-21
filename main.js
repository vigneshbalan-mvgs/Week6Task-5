const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('pwd')
const cpassword = document.getElementById('cpwd')
const form = document.getElementById('form')
const formcontainer = document.getElementById('formcontainer')
const logincontainer = document.getElementById('logincontainer')
let popup = document.getElementById("popup")
const btn = document.getElementById("sgbtn")
const message = document.getElementById('message')

btn.disabled = true;

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    formcontainer.classList.add('removecontainer')
    logincontainer.classList.add('showcontainer')

}

form.addEventListener("click",function(){
    checkPassword();
})

function checkPassword(){ 
    if(email.value==""){
        btn.disabled = true;

    }
    else{

        if(cpassword.value && password.value >=8 ){
            
            message.innerText = password.value == cpassword.value ? 'Matching' : 'Not matching';
            if(password.value==cpassword.value){
                btn.disabled= false;
            }
            else{
                btn.disabled= true;
            }
        }
    }
}
password.addEventListener("keyup",()=>{
    if(password.value.length !=0){
        checkPassword();
    }
}) 

cpassword.addEventListener("keyup",checkPassword);

const lgbtn =document.getElementById('lgbtn')
const lemail = document.getElementById('lemail')
const lpwd = document.getElementById('lpwd')
const form2 = document.getElementById('form2')
lgbtn.disabled = true;

form2.addEventListener('click',function(){
    lgpwd();
})


function lgpwd(){
    if(password.value==lpwd.value){
        lgbtn.disabled= false;
    }
}
lpwd.addEventListener("keyup",()=>{
    if(lpwd.value.length !=0){
        lgpwd();
    }
}) 