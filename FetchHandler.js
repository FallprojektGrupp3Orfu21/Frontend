import * as ch from "./CredentialsHandler.JS";
const apiHost = "https://localhost:7218/"

const credentialsAsBase64 = (username,password) => {
    return btoa(`${username}:${password}`);
} 

const Fetcher = async (url,theHeaders,method,theBody) =>{
   const tmp = {
       method: `${method}`,
       headers: theHeaders,
       body: theBody
   }
   return await fetch(url, tmp);
}
  
const login = async (username,password) => {
    return await Fetcher(`${apiHost}api/login`,
                          {Authorization: `Basic ${credentialsAsBase64(username,password)}`},
                          "POST" );
}

const logout = async (username,password) => {
    return await Fetcher(`${apiHost}api/logout`,
                          {Authorization:`Basic ${credentialsAsBase64(username,password)}`},
                          "POST")
            };

const registerUser = (body) => {
    return await Fetcher(`${apiHost}api/register`, 
    {'Content-Type': 'application/json'},
    "POST",JSON.stringify(body))
}
const createExpense = () => {
    
}
export {login, logout, registerUser, createExpense}
