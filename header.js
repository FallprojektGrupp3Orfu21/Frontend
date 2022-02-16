import { changePage } from "./router.js";

//Helper function to create the buttons
const registerMenuButton = (id,page) =>{
    const button = document.getElementById(id);
    button.addEventListener('click', () =>{
        changePage(page);
    });
}

export class Header {
    constructor(element){

        registerMenuButton('LoginButton', 'login');
        registerMenuButton('ExpenseButton', 'expense');
        registerMenuButton('CategoryButton', 'category');
        registerMenuButton('LogoutButton', 'logout');
        registerMenuButton('RegisterButton', 'register');
        registerMenuButton('ListExpenseButton','ListExpenses');
        registerMenuButton('RecipientsButton','ListRecipients');
        registerMenuButton('CreateRecipientButton', 'CreateRecipient');
        
    }
}