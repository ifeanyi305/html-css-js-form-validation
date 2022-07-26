let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let conpwd=document.getElementById("conpwd");
let form=document.querySelector("form");

function validateInput (){
    if(username.value.trim()===""){
        incorrect(username,"username cannot be empty")
    }else{
        correct(username)
    }
    if(email.value.trim()===""){
        incorrect(email,"email cannot be empty")
    }else{
        if(!validEmail(email.value.trim())){
            incorrect(email,"email is not valid");
        }else{
            correct(email)
        }
    }

    if(password.value.trim()===""){
        incorrect(password,"password cannot be empty")
    }else{
        correct(password)
    }
    if(conpwd.value.trim()===""){
        incorrect(conpwd,"password can not be empty");
    }else{
        if(password.value.trim()!==conpwd.value.trim()){
             incorrect(conpwd,"password do not match");
        }else{
            correct(conpwd)
        }
        
    }

}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault()
   validateInput()
});

function correct(input){
    let parent=input.parentElement;
        let messageEle=parent.querySelector("small")
        messageEle.style.visibility="hidden";
        messageEle.innerText="";
        parent.classList.add("correct");
        parent.classList.remove("incorrect")
}

function incorrect(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small")
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.remove("correct");
    parent.classList.add("incorrect")
}

function validEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
