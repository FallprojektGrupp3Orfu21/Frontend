import { login } from "./FetchHandler.js";

const LoadStyle = () => {
const head =document.getElementsByTagName("head")[0];
const link = document.createElement("link");
link.rel = "StyleSheet";
link.type = 'text/css';
link.href='LoginStyle.css';
head.appendChild(link);
}

const MakeLoginForm = () => {
let container = document.createElement("span");
container.className="formcontainer";
let div1 = document.createElement("div")
div1.className="background";
let div2 = document.createElement("div");
div2.className="shape"  
let div3 = document.createElement("div")
div3.className="shape";
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
let theForm = document.createElement("form");
let heading = document.createElement("h3");
heading.innerText = "Login Here";
let usernameLabel = document.createElement("label");
let usernameInput = document.createElement("input");
usernameInput.type="text";
usernameInput.placeholder="Username";
usernameInput.id="username";
usernameInput.required = true;
usernameLabel.appendChild(usernameInput);
let passwordLabel = document.createElement("label");
let passwordInput = document.createElement("input");
passwordInput.type="password";
passwordInput.required=true;
passwordInput.placeholder="Password";
passwordInput.id="password";
passwordLabel.appendChild(passwordInput);
let submitLogin = document.createElement("button");
submitLogin.onclick = async (event) => {
    event.StopDefault()
    const userName = document.getElementById("username");
    const password = document.getElementById("password");
    login(userName,password);
}
submitLogin.textContent="Login";
theForm.append(heading,usernameInput,passwordLabel,submitLogin);
container.appendChild(theForm);
return container;
}

export {LoadStyle, MakeLoginForm};
