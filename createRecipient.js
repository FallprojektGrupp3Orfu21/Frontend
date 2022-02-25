import { createRecipient } from "./FetchHandler.js";
import { GetUserName } from "./CredentialsHandler.js";
import { CreateMessageP } from "./CreateMessageP.js";

export const render = (root) => {
    const divToReturn = document.createElement('div');
    if (!GetUserName()) {
        divToReturn.appendChild(CreateMessageP("Please login to be able to add a new recipient"))
    }
    else {
        const form = document.createElement('form');
        const header = document.createElement('h3');
        header.innerText = 'Enter information below to add a recipient';

        let recipientNameLabel = document.createElement('label');
        let recipientNameInput = document.createElement('input');
        recipientNameInput.type = 'text';
        recipientNameInput.placeholder = 'Recipient Name';
        recipientNameInput.id = 'RecipientName';
        recipientNameInput.required = true;
        recipientNameLabel.appendChild(recipientNameInput);

        let recipientCityLabel = document.createElement('label');
        let recipientCityInput = document.createElement('input');
        recipientCityInput.type = 'text';
        recipientCityInput.placeholder = 'City';
        recipientCityInput.id = 'City';
        recipientCityInput.required = true;
        recipientCityLabel.append(document.createElement('br'), recipientCityInput);

        let submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Add Recipient'

        form.append(header, recipientNameLabel, recipientCityLabel, submitButton);
        divToReturn.appendChild(form);

        form.onsubmit = async (e) => {
            e.preventDefault();
            const recipientName = document.getElementById('RecipientName').value;
            const city = document.getElementById('City').value;
            const data = {
                'name': recipientName,
                'city': city
            };
            createRecipient(data)
                .then(response => {
                    if (response.status === 200) {
                        alert('Recipient Successfully Created!')
                    }
                    else {
                        alert('Something went wrong!')
                    }
                });
        }
    }
    root.appendChild(divToReturn);
}