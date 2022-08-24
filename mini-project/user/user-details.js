let url = new URL(location.href);
let userId = url.searchParams.get('id');
console.log(userId);
let usersElement = document.getElementsByClassName('users')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        buildOneUserBlock(user);
    });


function buildOneUserBlock(user) {
    let userElem = document.createElement('div');
    let oneUser = document.createElement('div');
    oneUser.classList.add('one-user');
    let userId = document.createElement('div');
    userId.innerText = `Id: ${user.id}`;
    let userName = document.createElement('div');
    userName.innerText = `Name: ${user.name}`;
    let userUsername = document.createElement('div');
    userUsername.innerText = `Username: ${user.username}`;
    let userEmail = document.createElement('div');
    userEmail.innerText = `Email: ${user.email}`;

    let userAddress = document.createElement('div');
    userAddress.innerText = `Address:`;
    let userStreet = document.createElement('div');
    userStreet.innerText = `Street: ${user.address.street}`;
    let userSuite = document.createElement('div');
    userSuite.innerText = `Suite: ${user.address.suite}`;
    let userCity = document.createElement('div');
    userCity.innerText = `City: ${user.address.city}`;
    let userZipcode = document.createElement('div');
    userZipcode.innerText = `Zipcode: ${user.address.zipcode}`;

    let userGeo = document.createElement('div');
    userGeo.innerText = `Geo:`;
    let userGeoLat = document.createElement('div');
    userGeoLat.innerText = `Lat: ${user.address.geo.lat}`;
    let userGeoLng = document.createElement('div');
    userGeoLng.innerText = `Lng: ${user.address.geo.lng}`;

    let userPhone = document.createElement('div');
    userPhone.innerText = `Phone: ${user.phone}`;
    let userWebsite = document.createElement('div');
    userWebsite.innerText = `Website: ${user.website}`;

    let userCompany = document.createElement('div');
    userCompany.innerText = `Company:`;
    let companyName = document.createElement('div');
    companyName.innerText = `Name: ${user.company.name}`;
    let companyCatchPhrase = document.createElement('div');
    companyCatchPhrase.innerText = `CatchPhrase: ${user.company.catchPhrase}`;
    let companyBs = document.createElement('div');
    companyBs.innerText = `Bs: ${user.company.bs}`;

    let userPostsButton = document.createElement('button');
    userPostsButton.classList.add('user-button');
    userPostsButton.innerText = 'Posts of Current User';

    userCompany.append(companyName, companyCatchPhrase, companyBs);
    userGeo.append(userGeoLat, userGeoLng);
    userAddress.append(userStreet, userSuite, userCity, userZipcode, userGeo);
    oneUser.append(userId, userName, userUsername, userEmail, userAddress, userGeo, userPhone, userWebsite, userCompany, userPostsButton);
    userElem.appendChild(oneUser);
    usersElement.appendChild(userElem);


    userPostsButton.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then((response) => response.json())
            .then((userPosts) => {
                let postEl = document.getElementsByClassName('posts')[0];

                postEl.innerHTML = '';
                for (const userPost of userPosts) {
                    let post = document.createElement('div')
                    post.classList.add('post')
                    let onePost = document.createElement('h4');
                    onePost.innerText = `${userPost.title}`;
                    let postLink = document.createElement('a');
                    postLink.href = `../post/post-details.html?id=${userPost.id}`;
                    postLink.innerText = 'Show post details';
                    post.append(onePost, postLink);
                    postEl.appendChild(post)

                }
            });
    };
}

