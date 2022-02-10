import {LoadStyle, MakeLoginForm} from "./LoginForm.js";
import {GetPassword,GetUserName} from "./CredentialsHandler.JS";
const userName = GetUserName();
console.log(userName);

if(userName){
    const para = document.createElement("P");
    para.innerText="User logged in";
    para.className="Centertext";
    document.getElementsByClassName("target")[0].appendChild(para);
}
else {
    const tmp = MakeLoginForm();
    const tmp2 = document.getElementsByClassName("target")[0];
    tmp2.parentElement.removeChild(tmp2);
    document.body.appendChild(tmp);
}