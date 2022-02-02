let RegisterURL = 'https://localhost:7218/api/create'
let form = document.getElementById("myForm")

function ShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    let firstname = e.target[0].value
    let lastname = e.target[1].value
    let city = e.target[2].value
    let username = e.target[3].value
    let email = e.target[4].value
    let password = e.target[5].value
    //Below 2 rows makes sure the right gender gets sent to the database (values in HTML)
    const select = document.getElementById('Gender');
    const GenderValue = select.options[select.selectedIndex].value;
    
    const data = {
    'lname': lastname,
    'fname': firstname,
    'username': username,
    'email': email,
    'password': password,
    'gender': GenderValue,
    'city': city
    };
    fetch(RegisterURL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
    }) 
        .then(response => {
            if(response.status === 200) 
            {
                alert('Registrations successfull')
            } 
            else
            {
                alert('Something went wrong')
            }
        })               
}