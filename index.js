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
let closeform = document.querySelector("#close_form")
let loginform = document.querySelector(".login_form")

formbtn.addEventListener("click", () => {
    loginform.classList.add("active");
    
});

closeform.addEventListener("click", () => {
    loginform.classList.remove("active");
});

