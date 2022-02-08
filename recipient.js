const CreateRecipientURL = `https://localhost:7218/api/createRecipient`;
const form = document.getElementById("myForm")

form.onsubmit = (e) => {
    debugger
    e.preventDefault();
    let recipientName = n.target[0].value;
    let recipientCity = c.target[1].value;
    let password = e.target[2].value;
    var credentials = btoa(`${username}:${password}`);
    var auth = { "Authorization" : `Basic ${credentials}` };
    
    const data = {
    'recipientName': recipientName
    };
    fetch(CreateRecipientURL, {
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
                alert('Recipient Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
        })               
}
