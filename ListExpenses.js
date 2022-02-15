import { GetUserName } from "./CredentialsHandler.JS";
import { getExpenses } from "./FetchHandler.js";
import { isUserLoggedIn } from "./CredentialsHandler.JS";
import { CreateMessageP  } from "./CreateMessageP.js";
import { CreateHeading } from "./CreateHeading.js";
export const render = (root) => {
const divToReturn = document.createElement("div");
    if(!isUserLoggedIn()){
        divToReturn.appendChild(CreateMessageP("Please login to be able to view registered expenses"));
    }
    else {

        divToReturn.appendChild(CreateHeading(`Registered Expenses for ${GetUserName()} `))
        const theList = document.createElement("table");
        const tr = document.createElement("tr");
        const th1 = document.createElement("th");
        th1.textContent="Name";
        const th2 = document.createElement("th");
        th2.textContent="Price";
        const th3 = document.createElement("th");
        th3.textContent="Category";
        const th4 = document.createElement("th");
        th4.textContent="Date";
        const th5 = document.createElement("th");
        th5.textContent="Recipient";
        [th1,th2,th3,th5,th4].forEach(te => tr.appendChild(te));
        theList.appendChild(tr);
        getExpenses().then((exp) => { 
            exp.forEach(res =>  {
                let tmp = document.createElement("tr");
                let td1=document.createElement("td");
                td1.textContent = res.Name;
                let td2=document.createElement("td");
                td2.textContent=res.Price;
                let td3 = document.createElement("td");
                td3.textContent = res.Category;
                let td4 = document.createElement("td");
                td4.textContent = res.Date;
                let td5 = document.createElement("td");
                td5.textContent=res.Recipient;
                [td1,td2,td3,td5,td4].forEach(td => tmp.appendChild(td));
                theList.appendChild(tmp);
            })
        /*   
            //
            //let td1 = document.createElement("td").textContent=exp.Name;
            td1.textContent = exp.Name;
            let td2 = document.createElement("td").textContent=exp.Price;
            //td2.textContent=exp.Price;
            let td3 = document.createElement("td").textContent=exp.Category;
            //td3.textContent = exp.Category;
            let td4 = document.createElement("td").textContent=exp.Date;
            //td4.textContent = exp.Date;
            [td1,td2,td3,td4].forEach(td => tr2.appendChild(td));
            console.log(tmp2);
            theList.appendChild(tmp2) */;
        }
        );
        divToReturn.appendChild(theList);
    }    
    root.appendChild(divToReturn);
}