const appPrefix = "Economiq"
const GetUserName = () => {
    return localStorage.getItem(`${appPrefix}Username`);
}

const GetPassword = () => {
    return localStorage.getItem(`${appPrefix}Password`);
}

const SetUserName = (username) =>{
    localStorage.setItem(`${appPrefix}Username`,username)
}

const SetPassword = (password) => {
    localStorage.setItem(`${appPrefix}Password`,password)
}

export{GetPassword,GetUserName,SetPassword,SetUserName}