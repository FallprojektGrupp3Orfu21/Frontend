import { logout } from "./UserHandler.js";
window.onload = () => {
    let form = document.getElementsByTagName("form")[0];
    form.onsubmit = submitLogin;
}

const submitLogin = async (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const result = await logout(username,password);
    if(result.status == 200){
     alert("User logged out");
    }
    else {
        alert("Something went wrong");
    }
}