let loginUrl = `https://localhost:7218/api/login`;
window.onload = () => {
    let form = document.getElementsByTagName("form")[0];
    form.onsubmit = submitLogin;
}

const submitLogin = async (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    var credentials = btoa(`${username}:${password}`);
    var auth = { "Authorization" : `Basic ${credentials}` };
    fetch(loginUrl, {
        method: 'POST', 
        headers: {
        Authorization : `Basic ${credentials} ` }
    }).then(resp => 
        {
            if(resp.status === 200){
                document.getElementsByTagName("form")[0].className="form-animated";
                document.getElementById("status").className="status-animated";
                alert("User logged in sucessfully");

            }
            else {
                alert("Something went wrong");
            }
        })
    
}