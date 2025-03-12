
// inpur field
document.getElementById('input-field').addEventListener('keyup', (event) => {
    const deleteBtn = document.getElementById('delete-btn');
    const text = event.target.value;
    if(text === 'delete'){
         deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})

// delete btn
document.getElementById('delete-btn').addEventListener('click', () => {
    const secretInfo = document.getElementById('secret-info');
    secretInfo.style.display = 'none';
})