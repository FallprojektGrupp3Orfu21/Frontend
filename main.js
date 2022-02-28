import { render as loginRender} from "./login.js";
import {render as expenseRender} from "./createExpense.js";
import {render as categoryRender} from "./createCategory.js"
import {render as logoutRender} from "./logout.js";
import {render as registerRender} from "./registerUser.js";
import {render as listExpensesRender } from "./ListExpenses.js";
import {render as listRecipientRender} from "./ListRecipients.js";
import {render as createRecipientRender} from "./createRecipient.js"
import { registerChangeListener } from "./router.js";
import { Header } from "./header.js";

const header = new Header();
const root = document.getElementById('root');

registerChangeListener((newPage) =>{
    root.innerHTML ='';
    switch (newPage) {
        case 'login':
            loginRender(root);
            break;
        case 'expense':
            expenseRender(root);
            break;
        case 'category':
            categoryRender(root);
            break;
        case 'logout':
            logoutRender(root);
            break;
        case 'register':
            registerRender(root);
            break;
        case 'ListExpenses':
            listExpensesRender(root);
            break;
        case 'ListRecipients':
            listRecipientRender(root);
            break;
        case 'CreateRecipient':
            createRecipientRender(root);
            break;
        default:
            break;
    }
})
loginRender(root);