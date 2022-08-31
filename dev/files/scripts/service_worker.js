// api for submitting user information to database.
async function push_user(email, name, box) {
    let response = await fetch(`${process.env.API_URL}`);
    let data = await response.text()
    return data
};

// to validate if entered email is valid
const validateEmail = (email) => {
    const a = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (a) { return true } else { return false }
};

// for handling form behavior
var submit = document.getElementById('form-submit');
submit.addEventListener('click', () => {
    let name = document.getElementById('user-name');
    let email = document.getElementById('user-mail');
    let box = document.getElementById('future-mails');

    if (name.length == 0) { //fix this
        name.style.borderColor = 'red';
        
    } else if (validateEmail(email.value) == true) {
        //handle success
        // push_user(email.value, name.value, box.checked); // for production only
        console.log(name.value, email.value, box.checked);
        submit.innerText = "You're invited!";
        submit.style.backgroundColor = "#34b934";

    } else {
        // handle error
    }
});