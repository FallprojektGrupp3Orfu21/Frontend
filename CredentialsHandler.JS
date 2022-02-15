const GetUserName = () => {
    return localStorage.getItem("username");
}

const GetPassword = () => {
    return localStorage.getItem("password");
}

const SetUserName = (username) =>{
    localStorage.setItem("username",`${username}`)
}

const SetPassword = (password) => {
    localStorage.setItem("password",`${password}`)
}

const UnsetUsername = () => {
    localStorage.removeItem("username");
}
const UnsetPassword = () => {
    localStorage.removeItem("password");
}

const isUserLoggedIn = () => {
    return (GetUserName() != null) 
}
export{GetPassword,GetUserName,SetPassword,SetUserName,UnsetUsername,UnsetPassword, isUserLoggedIn};