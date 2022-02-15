// Create recipient

const CreateExpenseURL = `https://localhost:7218/api/createRecipient`;
const form = document.getElementById("myForm")

form.onsubmit = (e) => {
    e.preventDefault();
    const recipientName = e.target[0].value;
    const recipientCity = e.target[1].value;
    const username = e.target[2].value;
    const password = e.target[3].value;

    const credentials = btoa(`${username}:${password}`);
    const auth = { "Authorization" : `Basic ${credentials}` };
    
    const data = 
    {
        "Name": recipientName,
        "City": recipientCity,
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
