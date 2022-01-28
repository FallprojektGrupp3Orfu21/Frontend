let form = document.getElementById("myForm")
form.onsubmit = (e) => {
    e.preventDefault();
    let firstname = e.target[0].value
    let lastname = e.target[1].value
    let username = e.target[2].value
    let email = e.target[3].value
    let password = e.target[4].value
    console.log(firstname + ' ' + lastname + ' ' + username + ' ' + email + ' ' + password)
    // validateForm(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value,e.target[4].value);
}

function validateForm(fname, lname, email, username, password) {
    debugger

    if(!fname){
        alert("Please enter a valid firstname")
    }  if(!lname){
        alert("Please enter a valid lastname")
    }  if(!username){
        alert("Please enter a valid username")
    }  if(!email){
        alert("Please enter a valid email")
    }  if(!password){
        alert("Please enter a valid password")
    }  if(fname, lname, username, email, password){

        welcomeAlert();
    } 
 
}


const welcomeAlert = () => {
    alert("Welcome! The registration was successful")
}
