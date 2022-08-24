let url = new URL(location.href);
let postId = url.searchParams.get('id');
console.log(postId);
let postElement = document.getElementsByClassName('posts')[0];
let commentsElement = document.getElementsByClassName('comments')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((userPosts) => {
        buildOnePostBlock(userPosts);
    });

function buildOnePostBlock(post) {
    let postEl = document.createElement('div');
    postEl.classList.add('post');
    let userId = document.createElement('div');
    userId.innerText = `userId: ${post.userId}`;
    let id = document.createElement('div');
    id.innerText = `id: ${post.id}`;
    let title = document.createElement('div');
    title.innerText = `title: ${post.title}`;
    let body = document.createElement('div');
    body.innerText = `body: ${post.body}`;
    let postBtn = document.createElement('button');
    postBtn.classList.add('post-button');

    postBtn.innerText = 'show comments';
    postEl.append(userId, id, title, body, postBtn);

    postElement.appendChild(postEl);

    postBtn.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then((response) => response.json())
            .then((postComments) => {
                commentsElement.innerHTML = '';
                for (const postComment of postComments) {
                    buildPostComments(postComment);
                }
            });
    };

}

function buildPostComments(postComment) {
    let commentsEl = document.createElement('div');
    commentsEl.classList.add('comment');
    let postId = document.createElement('div');
    postId.innerText = `PostId - ${postComment.postId}`;
    let commentId = document.createElement('div');
    commentId.innerText = `Id - ${postComment.id}`;
    let commentName = document.createElement('div');
    commentName.innerText = `Name - ${postComment.name}`;
    let commentEmail = document.createElement('div');
    commentEmail.innerText = `Email - ${postComment.email}`;
    let commentBody = document.createElement('div');
    commentBody.innerText = `Body - ${postComment.body}`;

    commentsEl.append(postId, commentId, commentName, commentEmail);
    commentsElement.appendChild(commentsEl);
}