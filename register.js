import { registerUser } from "./FetchHandler.js"

export const render = (root) => {
    
    const divToReturn = document.createElement('div');
    const form = document.createElement('form');
    const header = document.createElement('h3');
    header.innerText = 'Enter information below to create an Account';
   
    let fNameLabel = document.createElement('label');
    fNameLabel.innerText ="Enter surname"
    let fNameInput = document.createElement('input');
    fNameInput.type = 'text';
    fNameInput.placeholder = 'First Name';
    fNameInput.id = 'fName';
    fNameInput.required = true;
    fNameLabel.appendChild(fNameInput);
    let lNameLabel = document.createElement('label');
    lNameLabel.textContent ="Enter family name";
    let lNameInput = document.createElement('input');
    lNameInput.type = 'text';
    lNameInput.id = 'lName';
    lNameInput.placeholder = 'Last Name';
    lNameInput.required = true;
    lNameLabel.append(lNameInput);
    let cityLabel = document.createElement('label');
    cityLabel.textContent="Enter city"
    let cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.id = 'city';
    cityInput.placeholder = 'City';
    cityInput.required = true;
    cityLabel.append(cityInput);
    let usernameLabel = document.createElement('label');
    usernameLabel.textContent = "Enter desired username";
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.id = 'username'
    usernameInput.required = true;
    usernameLabel.appendChild(usernameInput);
    let emailLabel = document.createElement('label');
    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Email Adress';
    emailInput.required = true;
    emailLabel.textContent="Enter email";
    emailLabel.append(emailInput);
    let passwordLabel = document.createElement('label');
    passwordLabel.textContent="Enter desired password";
    let passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.id = 'password';
    passwordInput.required = true;
    passwordLabel.appendChild(passwordInput);
    let genderSelect = document.createElement('select');
    let optionOne = document.createElement('option');
    let optionTwo = document.createElement('option');
    genderSelect.id = 'gender';
    genderSelect.name = 'Gender';
    genderSelect.required = true;
    optionOne.value='Male';
    optionOne.selected = true;
    optionOne.innerText = 'Male';
    optionTwo.value = 'Female';
    optionTwo.innerText = 'Female';
    genderSelect.appendChild(optionOne);
    genderSelect.appendChild(optionTwo);
    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Account'

    form.append(header, fNameLabel, lNameLabel, cityLabel,  usernameLabel, emailLabel, passwordLabel, genderSelect, submitButton);
    divToReturn.appendChild(form);
    
    form.onsubmit = async (e) =>{
        e.preventDefault();
        const fName = document.getElementById('fName').value;
        const lName = document.getElementById('lName').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const select = document.getElementById('gender');
        const GenderValue = select.options[select.selectedIndex].value;
        
        const data = {
            'lname': lName,
            'fname': fName,
            'username': username,
            'email': email,
            'password': password,
            'gender': GenderValue,
            'city': city
            };
        registerUser(data)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Account Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
    }

    
    
    root.appendChild(divToReturn);
}