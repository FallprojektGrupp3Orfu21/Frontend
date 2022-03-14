import { createCategory } from "./FetchHandler.js";
import { GetUserName } from "./CredentialsHandler.js";
import { CreateMessageP  } from "./CreateMessageP.js";


export const render = (root) => {

    const divToReturn = document.createElement('div');
    if(!GetUserName()){
        divToReturn.appendChild(CreateMessageP("Please login to be able to register a new category"))
    }
    else {
        
    const form = document.createElement('form');
    const header = document.createElement('h3');
    header.innerText = 'Enter information below to create a category';
   
    let categoryNameLabel = document.createElement('label');
    let categoryNameInput = document.createElement('input');
    categoryNameInput.type = 'text';
    categoryNameInput.placeholder = 'Category Name';
    categoryNameInput.id = 'CategoryName';
    categoryNameInput.required = true;
    categoryNameLabel.appendChild(categoryNameInput);
    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Category'

    form.append(header,categoryNameLabel,submitButton);
    divToReturn.appendChild(form);
    
    form.onsubmit = async (e) =>{
        e.preventDefault();
        const categoryName = document.getElementById('CategoryName').value;
        const data = {
            'categoryName' : categoryName
        };
        createCategory(data)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Category Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
        }
    }    
    root.appendChild(divToReturn);
}