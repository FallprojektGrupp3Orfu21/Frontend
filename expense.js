import { createExpense, getRecipients } from "./FetchHandler.js";
import { GetUserName } from "./CredentialsHandler.JS";
import { CreateMessageP } from "./CreateMessageP.js";
export const render = (root) => {
    
    const divToReturn = document.createElement('div');
    if(!GetUserName()){
        divToReturn.appendChild(CreateMessageP("Please login to be able to create an expense"));
    }
    else {
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
    const recipientInput = document.createElement("select");
    getRecipients().then(result => result.forEach(
        rec => {
            const tmp = document.createElement("option");
            tmp.value = rec.Id;
            tmp.innerText = rec.Name;
            recipientInput.appendChild(tmp);
        }
    ))
    recipientSelectLabel.append(document.createElement("br"),recipientInput,document.createElement("br"));
    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Expense'

    form.append(header, expenseTitleLabel, expenseAmountLabel, expenseCategoryNameLabel, expenseDateLabel, recipientSelectLabel, submitButton);
    divToReturn.appendChild(form);
    
    form.onsubmit = async (e) =>{
        e.preventDefault();
        const expenseTitle = document.getElementById('expenseTitle').value;
        const expenseAmount = document.getElementById('expenseAmount').value;
        const expenseCategoryName = document.getElementById('expenseCategoryName').value;
        const expenseDate = document.getElementById('expenseDate').value;     
        const data = {
            'title' : expenseTitle,
            'expenseDate' : expenseDate,
            'amount' : expenseAmount,
            'categoryName' : expenseCategoryName
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