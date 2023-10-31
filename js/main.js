//import from form

let form = document.getElementById("form");

console.log(form);

//Api url

let apiurl = "https://api.github.com/users";

//Select the input

let searchValue = document.getElementById("userName");

console.log(userName);

//Function to all the users from Githu Api

let getUsers = async(e) => {
    e.preventDefault();

    let user = searchValue.value.split(' ').join('');

    try {

        const response = await fetch(`${apiurl}/${user}`); 

        let data = await response.json();

        let displayArea = document.getElementById('user');

        displayArea.innerHTML = `
            <img src='${data.avatar_url}' alt='${data.loging}'/>
            <p>Username: ${data.login}</p>
        `
            
        console.log(data);

    } catch (error) {

        console.log(error);
    }

    console.log(user);

}

//Adding an Event Listener in Order to the Form in order to Submit Information in the Input

form.addEventListener('submit', getUsers);

let All = document.getElementById("all");

console.log(All);


