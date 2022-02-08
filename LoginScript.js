import {login} from "./UserHandler.js";
window.onload = () => {
    let form = document.getElementsByTagName("form")[0];
    form.onsubmit = submitLogin;
}

const submitLogin = async (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const result = await login(username,password);
    console.log(result);
    if(result.status == 200){
        document.getElementsByTagName("form")[0].className="form-animated";
        document.getElementById("status").className="status-animated";
    }
    else {
        alert("Something went wrong");
    }
}