import { logout } from "./FetchHandler.js";
import { GetUserName, GetPassword, isUserLoggedIn } from "./CredentialsHandler.JS";
import { changePage } from "./router.js";
export const render = (root) => {
    const divToReturn = document.createElement("div");
    if(isUserLoggedIn()){
        const LogoutButton = document.createElement("button");
        LogoutButton.textContent = "Logout";
        LogoutButton.onclick = (event) => {
            logout(GetUserName(), GetPassword()).then( (resp)=> {
            if(resp.status === 200){
                alert("User logged out")
                changePage("login");
            }
            else {
                alert("Something went wrong");
            }
            })}
        divToReturn.appendChild(LogoutButton);
    }
    else {
        const ErrorP = document.createElement("p");
        ErrorP.textContent = "User not logged in";
        divToReturn.appendChild(ErrorP);
    }
    root.appendChild(divToReturn);
}