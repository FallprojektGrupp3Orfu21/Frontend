import {isUserLoggedIn, GetUserName} from "./CredentialsHandler.JS";
import { CreateMessageP } from "./CreateMessageP.js";
export const render = (root) => {
    const divToReturn = document.createElement("div");
    if(!isUserLoggedIn()){
       const message = CreateMessageP("Please login to be able to add recipient");
       divToReturn.appendChild(message);
    }
    else {
        const message = CreateMessageP("ChangeMe");
        divToReturn.appendChild(message);
    }
  root.appendChild(divToReturn);
} 