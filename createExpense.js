import { createExpense, getRecipients } from "./FetchHandler.js";
import { GetUserName } from "./CredentialsHandler.JS";
import { CreateMessageP } from "./CreateMessageP.js";
export const render = async (root) => {    
    const divToReturn = document.createElement('div');
    if(!GetUserName()){
        divToReturn.appendChild(CreateMessageP("Please login to be able to create an expense"));
    }
        else 
    {
        const form = document.createElement('form');
        const header = document.createElement('h3');
        header.innerText = 'Enter information below to create an Expense';
        let expenseTitleLabel = document.createElement('label');
        expenseTitleLabel.textContent = `Enter expense name`
        let expenseTitleInput = document.createElement('input');
        expenseTitleInput.type = 'text';
        expenseTitleInput.placeholder = 'Expense Name';
        expenseTitleInput.id = 'expenseTitle';
        expenseTitleInput.required = true;
        expenseTitleLabel.append(document.createElement("br"),expenseTitleInput);
        let expenseAmountLabel = document.createElement('label');
        expenseAmountLabel.innerText = "Enter amount expended";
        let expenseAmountInput = document.createElement('input');
        expenseAmountInput.type = 'number';
        expenseAmountInput.id = 'expenseAmount';
        expenseAmountInput.placeholder = 'Expense Amount';
        expenseAmountInput.required = true;
        expenseAmountLabel.append(document.createElement("br"),expenseAmountInput);
        let expenseCategoryNameLabel = document.createElement('label');
        expenseCategoryNameLabel.innerText ="Enter expense category";
        let expenseCategoryNameInput = document.createElement('input');
        expenseCategoryNameInput.type = 'text';
        expenseCategoryNameInput.id = 'expenseCategoryName';
        expenseCategoryNameInput.placeholder = 'Expense Category';
        expenseCategoryNameInput.required = true;
        expenseCategoryNameLabel.append(document.createElement("br"),expenseCategoryNameInput);
        let expenseDateLabel = document.createElement('label');
        expenseDateLabel.innerText ="Pick date for expense";
        let expenseDateInput = document.createElement('input');
        expenseDateInput.type = "date";
        expenseDateInput.id = 'expenseDate';
        expenseDateInput.required = true;
        expenseDateInput.value = new Date().toISOString().slice(0, 10);
        expenseDateLabel.append(document.createElement("br"),expenseDateInput); 
        let br7 = document.createElement('br');
        let br8 = document.createElement('br');
        const recipientSelectLabel = document.createElement("label");
        recipientSelectLabel.textContent ="Pick recipient of expense";
        const recipientInput = document.createElement("input");
        const recipientList = document.createElement("datalist");
        recipientInput.setAttribute("autocomplete","off");
        recipientList.id = "recipient-list";
        recipientInput.setAttribute("list","recipient-list");
        recipientInput.placeholder="Pick recipient";
        recipientInput.addEventListener("input",async (event)=>{
            recipientInput.disabled = true;
            recipientInput.placeholder="Loading options";
            while(recipientList.lastChild){
                recipientList.removeChild(recipientList.lastChild);
            }
            let queryString = recipientInput.value;
            recipientInput.value ="Loading Recipients";
            let recipents = await getRecipients(queryString);
            for(const recipient of recipents){
                const option = document.createElement("option");
                option.value = recipient.name;
                option.innerHTML = recipient.name;
                recipientList.appendChild(option);
            }
            recipientInput.placeholder="Pick recipent";
            recipientInput.disabled = false;
            recipientInput.value=queryString;
            recipientInput.focus();
        })
        let recipents = await getRecipients();
    for(const recipient of recipents){
        const option = document.createElement("option");
        option.value = recipient.name;
        recipientList.appendChild(option);
    }
        /*var observer = new MutationObserver(async (mutations) =>{
            if (document.contains(recipientInput)) {
                let x = await getRecipients();
                 for(const recipient of x){
                     const option = document.createElement("option");
                     option.value= recipient.name;
                     option.innerText = recipient.name
                     recipientList.appendChild(option);
                 }
                 recipientInput.placeholder="Chose recipient";
                 recipientInput.addEventListener("keyup", async (event)=>{
                    if((String.fromCharCode(event.keyCode).match(/(\w|\s)/g)) ||event.key === "Backspace"){
                        event.preventDefault();
                        const queryString = event.target.value;
                        recipientInput.disabled = true;
                        recipientInput.placeholder = "Loading";
                        recipientInput.autocomplete="off" 
                        let x = await getRecipients(queryString);
                        while(recipientList.lastChild){
                            recipientList.removeChild(recipientList.lastChild);
                        }
                        for(const recipient of x){
                            const option = document.createElement("option");
                            option.value = recipient.name;
                            option.innerText = recipient.name;
                            recipientList.appendChild(option);
                        }
                        recipientInput.disabled=false;
                        recipientInput.placeholder="Chose recipient";
                        recipientInput.focus();
                        recipientInput.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
                        //recipientInput.dispatchEvent(new KeyboardEvent('keyup', {'key': 'arrowUp'}));
                    }
        
                })
                 observer.disconnect();
             }
         });
         observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
    //let x = await getRecipients()
    //   for (const recipient of x) {
    //        const option = document.createElement("option");
    //        option.value = recipient.name;
    //        option.innerText = recipient.name;
    //        option.innerText = recipient.name;
    //       recipientList.appendChild(option);
    //    } */   
    recipientSelectLabel.append(document.createElement("br"),recipientInput,document.createElement("br"));
    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Expense'

    form.append(header, expenseTitleLabel, expenseAmountLabel, expenseCategoryNameLabel, expenseDateLabel,recipientSelectLabel , submitButton,recipientList);
    divToReturn.appendChild(form);
    form.onsubmit = async (e) =>
    {
        e.preventDefault();
        const expenseTitle = document.getElementById('expenseTitle').value;
        const expenseAmount = document.getElementById('expenseAmount').value;
        const expenseCategoryName = document.getElementById('expenseCategoryName').value;
        const expenseDate = document.getElementById('expenseDate').value;    
        const recipientName = document.getElementById('recipientInput') .value;
        const data = {
            'title' : expenseTitle,
            'expenseDate' : expenseDate,
            'amount' : expenseAmount,
            'categoryName' : expenseCategoryName,
            'recipientName' : recipientName
        };
        createExpense(data)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Expense Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
        }
    }
    
    root.appendChild(divToReturn);
}