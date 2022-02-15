import { getRecipients } from "./FetchHandler.js";
import {isUserLoggedIn, GetUserName } from "./CredentialsHandler.JS";
import { CreateMessageP } from "./CreateMessageP.js";
import { CreateHeading } from "./CreateHeading.js";
export const render = (root) => {
    const divToReturn = document.createElement("div");
    if(isUserLoggedIn()){
    divToReturn.appendChild(CreateHeading(`Registered recipients for ${GetUserName()}`));
    const theList = document.createElement("table");
    const tr = document.createElement("tr");
    const NameHeader = document.createElement("th");
    NameHeader.textContent = "Name";
    const CityHeader = document.createElement("th");
    CityHeader.textContent = "City";
    tr.append(NameHeader,CityHeader);
    theList.append(tr);
    getRecipients().then( res => {
        res.forEach(rec => {
            const tmptr = document.createElement("tr");
            const nameTD = document.createElement("td");
            nameTD.textContent = rec.Name;
            const cityTD = document.createElement("td");
            cityTD.textContent = rec.City;
            tmptr.append(nameTD,cityTD);
            theList.appendChild(tmptr);
        })
    })
    divToReturn.appendChild(theList);
    }
    else {
        divToReturn.appendChild(CreateMessageP("Please login to view registered recipients"))

    }
    root.appendChild(divToReturn);
}