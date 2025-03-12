
const commentContainer = document.getElementById('comments-container');

const addCommentButton = document.getElementById('addCommentBtn').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const p = document.createElement('p');
    p.innerText = inputField.value;
    commentContainer.appendChild(p);
    inputField.value = " ";
})