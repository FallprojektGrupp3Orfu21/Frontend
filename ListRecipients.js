import { GetUserName } from "./CredentialsHandler.JS";
import { getRecipients } from "./FetchHandler.js";
import { isUserLoggedIn } from "./CredentialsHandler.JS";
import { CreateMessageP  } from "./CreateMessageP.js";
import { CreateHeading } from "./CreateHeading.js";
export const render = (root) => {
const divToReturn = document.createElement("div");
    if(!isUserLoggedIn()){
        divToReturn.appendChild(CreateMessageP("Please login to be able to view your recipients"));
    }
    else {
        
        divToReturn.appendChild(CreateHeading(`Recipients for ${GetUserName()} `))
        const theList = document.createElement("table");
        const tr = document.createElement("tr");
        const th1 = document.createElement("th");
        th1.textContent="Name";
        const th2 = document.createElement("th");
        th2.textContent="City";
        
        [th1,th2].forEach(te => tr.appendChild(te));
        theList.appendChild(tr);
        getRecipients().then((exp) => { 
            for (const recipient of exp) {
                let tmp = document.createElement("tr");
                let td1=document.createElement("td");
                td1.textContent = recipient.name;
                let td2=document.createElement("td");
                td2.textContent=recipient.city;
               
                [td1,td2].forEach(td => tmp.appendChild(td));
                theList.appendChild(tmp);
            }
        }
        );
        divToReturn.appendChild(theList);
    }    
    root.appendChild(divToReturn);
}