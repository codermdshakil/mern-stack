document
  .getElementById("btn-cashout-money")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const amount = getValueById("input-cashout-amount");
    const pin = getValueById("input-pin-number-cashout");
    const mainBalance = getValueById("main-balance");

    if (isNaN(amount)) {
      alert("Failed to Cash!!");
      return;
    }

    if (pin === 1234) {
      const updatedBalance = mainBalance - amount;

      // create a transaction object
      const now = new Date();

      const cashOut_transaction = {
        time: now.toLocaleTimeString(),
        status: "Cash Out",
        amount: amount,
      };
      allTransactions.push(cashOut_transaction);

      document.getElementById("main-balance").innerText = updatedBalance;

      const div = document.createElement("div");
      div.classList.add("bg-yellow-200");
      div.innerHTML = `
     <h4 class="text-2xl font-bold" >Cash Out</h4>
     <p>${amount} Tk. Withdraw. New Balance : ${updatedBalance} Tk.</p>
     `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to Cash Out");
    }

    // inisial value of form empty
    document.getElementById("input-cashout-amount").value = "";
    document.getElementById("input-pin-number-cashout").value = "";
  });
