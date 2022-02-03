// Create expenses manually

const CreateExpenseURL = `https://localhost:7218/api/createExpense`;
const form = document.getElementById("myForm")

form.onsubmit = (e) => {
    e.preventDefault();
    const expenseName = e.target[0].value;
    const expenseAmount = e.target[1].value;
    const categoryName = e.target[2].value;
    const expenseDate = e.target[3].value;
    const username = e.target[4].value;
    const password = e.target[5].value;

    const credentials = btoa(`${username}:${password}`);
    const auth = { "Authorization" : `Basic ${credentials}` };
    
    const data = 
    {
        "title": expenseName,
        "expenseDate": expenseDate,
        "amount": expenseAmount,
        "categoryName": categoryName
    };
    fetch(CreateExpenseURL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Basic ${credentials} ` 
            }, 
            body: JSON.stringify(data)
    }) 
        .then(response => {
            if(response.status === 200) 
            {
                alert('Expense Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
        })               
}
