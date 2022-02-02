// Create expenses manually

let CreateExpenseURL = `https://localhost:7218/api/createExpense`;
let form = document.getElementById("myForm")

form.onsubmit = (e) => {
    debugger
    e.preventDefault();
    let expenseName = e.target[0].value;
    let username = e.target[1].value;
    let password = e.target[2].value;
    var credentials = btoa(`${username}:${password}`);
    var auth = { "Authorization" : `Basic ${credentials}` };
    
    const data = {
    'expenseTitle': expenseTitle
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