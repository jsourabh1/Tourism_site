// chagne the visitbility fucntion of password

function change_visibility()
{
    object=document.getElementById("password");

    if (object.type==="password"){
        object.type="text"
    
    }
    else{object.type="password"}
}

let formbtn = document.querySelector("#account_icon");
let closeform = document.querySelector("#close_form");
let loginform = document.querySelector(".login_form");

let menu_bar=document.querySelector("#menu-bar");
let nav_section=document.querySelector(".nav_section")

var count=0
menu_bar.addEventListener("click", () => {
    if (count%2===0){
    nav_section.classList.add("active");
    }
    
    else {
        nav_section.classList.remove("active");
    }
    count+=1
});

formbtn.addEventListener("click", () => {
    loginform.classList.add("active");
    
});

closeform.addEventListener("click", () => {
    loginform.classList.remove("active");
});

