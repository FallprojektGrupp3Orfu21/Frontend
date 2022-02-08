const apiHost = "https://localhost:7218/"

const credentialsAsBase64 = (username,password) => {
    return btoa(`${username}:${password}`);
} 

const login = async (username,password) => {
    console.log(`${username},${password}`)
    return await fetch(`${apiHost}api/login`, {
        method: 'POST', 
        headers: {
        Authorization : `Basic ${credentialsAsBase64(username,password)}` }
    });
}

const logout = async (username,password) => {
    return await fetch(`${apiHost}api/logout`,{
        method: 'POST',
        headers: {
            Authorization: `Basic ${credentialsAsBase64(username,password)}`
        }
    });
}

export {login, logout}
