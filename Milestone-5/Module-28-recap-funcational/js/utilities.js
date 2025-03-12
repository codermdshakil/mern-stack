
/**
 * We can access utilities function from globally
 * Common Shared Functions Here
 * 
*/


const allTransactions = [];


// get input field value
function getValueById(id){
    const inputValue = document.getElementById(id).value || document.getElementById(id).innerText;
    const intValue = parseFloat(inputValue);
    return intValue;
}

function convertStringToInt(stringValue){
    const intValue = parseFloat(stringValue);
    return intValue; 
}

function showSectionById(id){

    // all sections inisially hidden
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // just show one section that are provided id in parameter
    document.getElementById(id).classList.remove('hidden');
}

