export class User {
    constructor(userName, password){
        this.userName = null,
        this.password = null
    }
    SetUserName(userName){
        this.userName = userName;
    }
    SetPassword(password){
        this.password = password;
    }
    GetPassword(){
        return this.password;
    }
    SetUserName(){
        return this.password;
    }
}