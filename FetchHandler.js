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
        resp.text().then(function (text) {
            alert(text);
        });
    
 
    
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
                resp.text().then(function (text) {
                    alert(text);
                 });
        
            
            return resp;
            };

const registerUser = async (body) => {
    const resp = await Fetcher(`${apiHost}api/createUser`, 
                        {'Content-Type': 'application/json'},
                        "POST",
                        JSON.stringify(body))
                        if(resp.status!=200){
                            resp.text().then(x => alert(x));
                            };
                        return resp;
    

};
const createExpense = async (body) => {
    const resp = await Fetcher(`${apiHost}api/createExpense`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    );
   
    return resp;
}
const createCategory = async (body) => {
    const resp = await Fetcher(`${apiHost}api/createExpenseCategory`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    );
   
    return resp;
};


    const getExpenses = async () => {
        const resp = await Fetcher(`${apiHost}api/listExpense`, {
            'Content-Type': 'application/json',
            Authorization:`Basic ${credentialsAsBase64(GetUserName(), GetPassword())}`,
            
        },
        'GET'
        
        ).then(response => response.json());
       
        return resp;
    } 


    const getFilterExpenses = async (body) => {
        const resp = await Fetcher(`${apiHost}api/listFilteredExpenses`,
        {
            'Content-Type': 'application/json',
            Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
        },
        'POST',
        JSON.stringify(body)
        ).then(response => response.json())
         return resp;
    }
    
    
    


const createRecipient = async (body) => {
    const resp = await Fetcher(`${apiHost}api/createRecipient`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    );
   
     return resp;
}

const getRecipients = async(searchString = null) => {
    const request = `${apiHost}api/listRecipients` + (searchString ? `?searchString=${searchString}` : '');
    const resp = await Fetcher(request, {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    }, 'GET');  
    return resp.json();
}


 export {login, logout, registerUser, createExpense,createCategory,getExpenses, getRecipients, createRecipient, getFilterExpenses}