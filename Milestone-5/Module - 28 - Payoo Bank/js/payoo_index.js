

const loginBtn = document.getElementById('login_action_btn').addEventListener('click', (event) => {
    event.preventDefault();
    
    const inputNumber = document.getElementById('input-number');
    const inputPin = document.getElementById('input-pin');

    if(inputNumber.value === '01729107200' || '5' && parseInt(inputPin.value) === 1234) {

        // redirect to payoo_msf.html file
        window.location.href = '../payoo_mfs.html';
    }
});

