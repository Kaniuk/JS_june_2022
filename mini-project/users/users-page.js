let usersBlock = document.getElementsByClassName('users')[0];
const l = window.location;
debugger

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let useDiv = document.createElement('div');
            useDiv.classList.add('user');
            useDiv.innerText = `ID.${user.id} Name - ${user.name}`;
            let userLink = document.createElement('a');
            userLink.classList.add('link');
            userLink.href = `user/user-details.html?id=${user.id}`;

            userLink.innerText = 'Show user details';
            useDiv.appendChild(userLink);
            usersBlock.appendChild(useDiv);
        }
    });