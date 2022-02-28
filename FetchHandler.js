import {SetPassword,SetUserName,GetUserName,GetPassword,UnsetPassword,UnsetUsername} from "./CredentialsHandler.JS";
const apiHost = "https://localhost:7218/"

const credentialsAsBase64 = (username,password) => {
    return btoa(`${username}:${password}`);
};

const Fetcher = async (url,theHeaders,method,theBody) =>{
   const tmp = {
       method: `${method}`,
       headers: theHeaders,
       body: theBody
   }
   return await fetch(url, tmp);
};
  
const login = async (username,password) => {
    const resp = await Fetcher(`${apiHost}api/login`,
                          {Authorization: `Basic ${credentialsAsBase64(username,password)}`},
                          "POST" );
    if(resp.status == 200){
        SetUserName(username);
        SetPassword(password);
    }
    return resp;
};

const logout = async (username,password) => {
    const resp =  await Fetcher(`${apiHost}api/logout`,
                          {Authorization:`Basic ${credentialsAsBase64(username,password)}`},
                          "POST")
            if(resp.status == 200){
                UnsetUsername();
                UnsetPassword();
            }
            return resp;
            };

const registerUser = async (body) => {
    return await Fetcher(`${apiHost}api/createUser`, 
    {'Content-Type': 'application/json'},
    "POST",JSON.stringify(body))
};
const createExpense = async (body) => {
    return await Fetcher(`${apiHost}api/createExpense`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    )
}
const createCategory = async (body) => {
    return await Fetcher(`${apiHost}api/createExpenseCategory`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    )
};
const getExpenses = async () => {
    return await Fetcher(`${apiHost}api/listExpense`, {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(), GetPassword())}`,
        
    },
    'GET'
    
    ).then(response => response.json())
} 

const createRecipient = async (body) => {
    return await Fetcher(`${apiHost}api/createRecipient`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    )
}
const getRecipients = async () => {
    return await Fetcher(`${apiHost}api/listRecipients`, {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(), GetPassword())}`,
        
    },
    'GET'
    
    ).then(response => response.json())
}
export {login, logout, registerUser, createExpense,createCategory,getExpenses, getRecipients, createRecipient}