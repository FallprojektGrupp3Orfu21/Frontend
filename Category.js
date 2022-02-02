let CreateCategoryURL = `https://localhost:7218/api/createExpenseCategory`;
let form = document.getElementById("myForm")

form.onsubmit = (e) => {
    debugger
    e.preventDefault();
    let categoryName = e.target[0].value;
    let username = e.target[1].value;
    let password = e.target[2].value;
    var credentials = btoa(`${username}:${password}`);
    var auth = { "Authorization" : `Basic ${credentials}` };
    
    const data = {
    'categoryName': categoryName
    };
    fetch(CreateCategoryURL, {
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
                alert('Category Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
        })               
}
