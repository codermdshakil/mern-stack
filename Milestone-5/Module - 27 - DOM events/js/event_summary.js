

// Final option : 1
function handleByOnClick(){
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = "Changed By onClick event Handler!!";
}

// Final Option : 2
const handledByAddEventListener = document.getElementById('handlerAdEventListener').addEventListener('click', () => {
    const defaultText = document.getElementById('default-text').innerText = "Changed By Add Event Listener!!"
})


// Take inpur field value and set it and clear input field
const updateBtn = document.getElementById('updated-button').addEventListener('click', () => {
    const defaultInpuTag = document.getElementById('default_input_text');
    const inputField = document.getElementById('input-field');
    defaultInpuTag.innerText = inputField.value;
    inputField.value = " ";
})




