/**
 * How to get input value from input
 * 1. create a variable
 * 2. on the right side document.getElementById(id).addEventListener
 * 3. .value
 * 4. parseInt or parseFloat()
 *
 *
 */

document.getElementById("btn-add-money").addEventListener("click", (event) => {
  event.preventDefault();

  // called getInput value by id function to get amount
  const amount = getValueById("input-add-money");
  const pin = getValueById("input-pin-number");
  const mainBalance = getValueById("main-balance");

  // create a transaction object
  const now = new Date();

  const add_money_transaction = {
    time: now.toLocaleTimeString(),
    status: "Add Money",
    amount: amount,
  };

  if (isNaN(amount)) {
    alert("Failed to Add Money!!");
    return;
  }

  if (pin === 1234) {
    const newBalance = mainBalance + amount;
    document.getElementById("main-balance").innerText = newBalance;

    allTransactions.push(add_money_transaction);

    const p = document.createElement("p");
    p.innerText = `Added ${amount} Tk. Total Balance ${newBalance}!!`;
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.appendChild(p);
  } else {
    alert("Failed to add money!");
  }

  // inisial value of form empty
  document.getElementById("input-add-money").value = "";
  document.getElementById("input-pin-number").value = "";
});
