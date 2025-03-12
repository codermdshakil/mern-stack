// Toggle freatures

// Add money
document.getElementById("add-money-large-btn").addEventListener("click", () => {
  showSectionById("add-money-section");
});

// Cash out
document
  .getElementById("cash-out-large-btn")
  .addEventListener("click", () => {
    showSectionById('cash-out-section');

});


// Transaction 
document
  .getElementById("transaction-large-btn")
  .addEventListener("click", () => {
    showSectionById('transaction-section');

});
