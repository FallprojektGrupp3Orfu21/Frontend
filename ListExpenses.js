import { GetUserName } from "./CredentialsHandler.JS";
import { getExpenses } from "./FetchHandler.js";
import { isUserLoggedIn } from "./CredentialsHandler.JS";
import { CreateMessageP  } from "./CreateMessageP.js";
import { CreateHeading } from "./CreateHeading.js";
import { getFilterExpenses } from "./FetchHandler.js";
export const render = (root) => {
const divToReturn = document.createElement("div");
    if(!isUserLoggedIn()){
        divToReturn.appendChild(CreateMessageP("Please login to be able to view registered expenses"));
    }
    else {

        
        divToReturn.appendChild(CreateHeading(`Registered Expenses for ${GetUserName()} `))
       
        

        function mySelectFunction() {
            
            var selectButton = document.createElement("SELECT");
            selectButton.setAttribute("id", "mySelect");
          
            var n = document.createElement("option");
            n.setAttribute("value", "RecieverName");
            
            var n2 = document.createTextNode("Alphabetical");
            n.appendChild(n2);
            

            var d = document.createElement("option");
            d.setAttribute("value", "Newest");
            
            var d2 = document.createTextNode("By date, newest");
            d.appendChild(d2);

            var d3 = document.createElement("option");
            d3.setAttribute("value", "Oldest");
            
            var d4 = document.createTextNode("By date, oldest");
            d3.appendChild(d4);
            

            var e = document.createElement("option");
            e.setAttribute("value", "HighestPrice");
            
            var e2 = document.createTextNode("Amount, highest");
            e.appendChild(e2);


            var e3 = document.createElement("option");
            e3.setAttribute("value", "LowestPrice");
            
            var e4 = document.createTextNode("Amount, highest");
            e3.appendChild(e4);
            
            

             
             selectButton.appendChild(n);
             selectButton.appendChild(d);
             selectButton.appendChild(d3);
             selectButton.appendChild(e);
             selectButton.appendChild(e3);


             selectButton.addEventListener( "change", (e) => {
                 e.preventDefault();
                const sortOption =  e.target[e.target.selectedIndex].value;
                const data = {
                    'FilteredBy' : sortOption  //kunna populera DTOn
             }
             document.querySelectorAll("tr").forEach(elem => {if(elem.firstChild.tagName != "TH"){console.log(elem.parentElement.removeChild(elem))}})
             const theTable = document.querySelector("table");
             getFilterExpenses(data).then(resp => 
                resp.forEach(tmp => {
                    const row = document.createElement("tr");
                    const td1 = document.createElement("td");
                    const td2 = document.createElement("td");
                    const td3 = document.createElement("td");
                    const td4 = document.createElement("td");
                    const td5 = document.createElement("td");
                    td1.innerHTML = tmp.title;
                    td2.innerHTML = tmp.amount;
                    td3.innerHTML = tmp.categoryName;
                    td4.innerHTML = tmp.expenseDate;
                    td5.innerHTML = tmp.recipientName;
                    [td1,td2,td3, td5, td4].forEach(elem => row.appendChild(elem))
                    theTable.appendChild(row);
                })
                
                )
            
            })
               

             
             return selectButton;

        }

       
    
        
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


            for (const expense of exp) {
                let tmp = document.createElement("tr");
                let td1=document.createElement("td");
                td1.textContent = expense.title;
                let td2=document.createElement("td");
                td2.textContent=expense.amount;
                let td3 = document.createElement("td");
                td3.textContent = expense.categoryName;
                let td4 = document.createElement("td");
                td4.textContent = expense.expenseDate;
                let td5 = document.createElement("td");
                td5.textContent=expense.recipientName;
                [td1,td2,td3,td5,td4].forEach(td => tmp.appendChild(td));
                theList.appendChild(tmp);
            }
        }
        );

        
        

        divToReturn.appendChild(mySelectFunction());
        divToReturn.appendChild(theList);
        
        
        
        console.log(divToReturn)

    }    
    root.appendChild(divToReturn);
}
