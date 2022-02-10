const GetUserName = () => {
    return localStorage.getItem("EconomiqUsername");
}

const GetPassword = () => {
    return localStorage.getItem("EconomiqPassword");
}

const SetUserName = (username) =>{
    localStorage.setItem("EconomiqUsername",username)
}

const SetPassword = (password) => {
    localStorage.setItem("EconomiqPassword",password)
}

export{GetPassword,GetUserName,SetPassword,SetUserName}