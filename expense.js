// Create expenses manually

let CreateExpenseURL = `https://localhost:7218/api/createExpense`;
let form = document.getElementById("myForm")

form.onsubmit = (e) => {
    e.preventDefault();
    let expenseName = e.target[0].value;
    let expenseAmount = e.target[1].value;
    let categoryName = e.target[2].value;
    let expenseDate = e.target[3].value;
    let username = e.target[4].value;
    let password = e.target[5].value;

    var credentials = btoa(`${username}:${password}`);
    var auth = { "Authorization" : `Basic ${credentials}` };
    
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