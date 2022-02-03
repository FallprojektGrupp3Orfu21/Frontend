const RegisterURL = 'https://localhost:7218/api/create'
const form = document.getElementById("myForm")

function ShowPassword() {
    const x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    const firstname = e.target[0].value
    const lastname = e.target[1].value
    const city = e.target[2].value
    const username = e.target[3].value
    const email = e.target[4].value
    const password = e.target[5].value
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
