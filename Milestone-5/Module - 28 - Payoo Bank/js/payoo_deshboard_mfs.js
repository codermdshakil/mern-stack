document
  .getElementById("add-money-button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const moneySection = document.getElementById("money-section");
    const cashOutSection = document.getElementById("cashout-out-section");
    const transfarMoneySection = document.getElementById(
      "transfar-money-section"
    );
    const getBonusSection = document.getElementById("getBonus-section");
    const paybillSection = document.getElementById("paybill-section");
    const transactionSection = document.getElementById("transaction-section");

    // Toggle the "blocked" class
    moneySection.classList.add("blocked");
    moneySection.classList.remove("hidden");

    // cashout section
    cashOutSection.classList.add("hidden");
    cashOutSection.classList.remove("blocked");

    // cashout section
    transfarMoneySection.classList.add("hidden");
    transfarMoneySection.classList.remove("blocked");

    // cashout section
    getBonusSection.classList.add("hidden");
    getBonusSection.classList.remove("blocked");

    // pay bill section
    paybillSection.classList.add("hidden");
    paybillSection.classList.remove("blocked");

    // transactionSection section
    transactionSection.classList.add("hidden");
    transactionSection.classList.remove("blocked");
  });

document.getElementById("cashout-button").addEventListener("click", (event) => {
  event.preventDefault();

  const moneySection = document.getElementById("money-section");
  const cashOutSection = document.getElementById("cashout-out-section");
  const transfarMoneySection = document.getElementById(
    "transfar-money-section"
  );
  const getBonusSection = document.getElementById("getBonus-section");
  const paybillSection = document.getElementById("paybill-section");
  const transactionSection = document.getElementById("transaction-section");

  // Cash Out section
  cashOutSection.classList.add("blocked");
  cashOutSection.classList.remove("hidden");

  // add money section
  moneySection.classList.add("hidden");
  moneySection.classList.remove("blocked");

  // transfarMoneySection section
  transfarMoneySection.classList.add("hidden");
  transfarMoneySection.classList.remove("blocked");

  // Get Bonus section
  getBonusSection.classList.add("hidden");
  getBonusSection.classList.remove("blocked");

  // pay bill section
  paybillSection.classList.add("hidden");
  paybillSection.classList.remove("blocked");

  // transactionSection section
  transactionSection.classList.add("hidden");
  transactionSection.classList.remove("blocked");
});

document
  .getElementById("transfar-button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const transfarMoneySection = document.getElementById(
      "transfar-money-section"
    );
    const moneySection = document.getElementById("money-section");
    const cashOutSection = document.getElementById("cashout-out-section");
    const getBonusSection = document.getElementById("getBonus-section");
    const paybillSection = document.getElementById("paybill-section");
    const transactionSection = document.getElementById("transaction-section");

    // transfar money section
    transfarMoneySection.classList.add("blocked");
    transfarMoneySection.classList.remove("hidden");

    // add money section
    moneySection.classList.add("hidden");
    moneySection.classList.remove("blocked");

    // Cashout section
    cashOutSection.classList.add("hidden");
    cashOutSection.classList.remove("blocked");

    // Cashout section
    cashOutSection.classList.add("hidden");
    cashOutSection.classList.remove("blocked");

    // Get Bonus section
    getBonusSection.classList.add("hidden");
    getBonusSection.classList.remove("blocked");

    // pay bill section
    paybillSection.classList.add("hidden");
    paybillSection.classList.remove("blocked");

    // transactionSection section
    transactionSection.classList.add("hidden");
    transactionSection.classList.remove("blocked");
  });

document
  .getElementById("getBonus-button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const getBonusSection = document.getElementById("getBonus-section");
    const transfarMoneySection = document.getElementById(
      "transfar-money-section"
    );
    const moneySection = document.getElementById("money-section");
    const cashOutSection = document.getElementById("cashout-out-section");
    const paybillSection = document.getElementById("paybill-section");
    const transactionSection = document.getElementById("transaction-section");

    // Get bonus section
    getBonusSection.classList.add("blocked");
    getBonusSection.classList.remove("hidden");

    // add money section
    moneySection.classList.add("hidden");
    moneySection.classList.remove("blocked");

    // transfar Money section
    transfarMoneySection.classList.add("hidden");
    transfarMoneySection.classList.remove("blocked");

    // cashOut Section section
    cashOutSection.classList.add("hidden");
    cashOutSection.classList.remove("blocked");

    // pay bill section
    paybillSection.classList.add("hidden");
    paybillSection.classList.remove("blocked");

    // transactionSection section
    transactionSection.classList.add("hidden");
    transactionSection.classList.remove("blocked");
  });

document.getElementById("paybill-button").addEventListener("click", (event) => {
  event.preventDefault();

  const paybillSection = document.getElementById("paybill-section");
  const getBonusSection = document.getElementById("getBonus-section");
  const transfarMoneySection = document.getElementById(
    "transfar-money-section"
  );
  const moneySection = document.getElementById("money-section");
  const cashOutSection = document.getElementById("cashout-out-section");
  const transactionSection = document.getElementById("transaction-section");

  // Paybill section
  paybillSection.classList.add("blocked");
  paybillSection.classList.remove("hidden");

  // add money section
  moneySection.classList.add("hidden");
  moneySection.classList.remove("blocked");

  // transfar Money section
  transfarMoneySection.classList.add("hidden");
  transfarMoneySection.classList.remove("blocked");

  // cashOut Section section
  cashOutSection.classList.add("hidden");
  cashOutSection.classList.remove("blocked");

  // cashOut Section section
  getBonusSection.classList.add("hidden");
  getBonusSection.classList.remove("blocked");

  // transactionSection section
  transactionSection.classList.add("hidden");
  transactionSection.classList.remove("blocked");
});

document
  .getElementById("transaction-button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const transactionSection = document.getElementById("transaction-section");
    const paybillSection = document.getElementById("paybill-section");
    const getBonusSection = document.getElementById("getBonus-section");
    const transfarMoneySection = document.getElementById(
      "transfar-money-section"
    );
    const moneySection = document.getElementById("money-section");
    const cashOutSection = document.getElementById("cashout-out-section");

    // Paybill section
    transactionSection.classList.add("blocked");
    transactionSection.classList.remove("hidden");

    // paybill Section section
    paybillSection.classList.add("hidden");
    paybillSection.classList.remove("blocked");

    // transfarMoneySection section
    transfarMoneySection.classList.add("hidden");
    transfarMoneySection.classList.remove("blocked");

    // getBonusSection  section
    getBonusSection.classList.add("hidden");
    getBonusSection.classList.remove("blocked");

    // moneySection section
    moneySection.classList.add("hidden");
    moneySection.classList.remove("blocked");

    // cashOut  section
    cashOutSection.classList.add("hidden");
    cashOutSection.classList.remove("blocked");
  });

// Transtaction Object Array

const allTransactions = [];

const transaction1 = {
  accountNumber: "0123823",
  status: "Add Money",
  amount: "2000",
  time: "9:59 PM",
};

const transaction2 = {
  accountNumber: "23123823",
  status: "Cash Out",
  amount: "600",
  time: "6:45 PM",
};
const transaction3 = {
  accountNumber: "4223823",
  status: "Phone Rechange",
  amount: "7000",
  time: "10:10 AM",
};

allTransactions.push(transaction1);
allTransactions.push(transaction2);
allTransactions.push(transaction3);

// Add Money
document.getElementById("add-money-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const accountNumber = document.getElementById("input-account-number");
  const amountNumber = document.getElementById("amount-number");
  const pinNumber = document.getElementById("input-pin");

  const accountNumberValue = accountNumber.value;
  const amountNumberValue = amountNumber.value;

  const mainBalanceTag = document.getElementById("main-balance");
  const mainBalance = parseFloat(mainBalanceTag.innerText);

  // take time
  const now = new Date();
  const timeValue = now.toLocaleTimeString();

  const transaction_Object = {
    accountNumber: accountNumberValue,
    status: "Add Money",
    amount: amountNumberValue,
    time: timeValue,
  };

  if (pinNumber.value === "1234") {
    let addMoney = parseFloat(mainBalance) + parseFloat(amountNumberValue);
    mainBalanceTag.innerText = addMoney;
    allTransactions.push(transaction_Object);
  }

  accountNumber.value = "";
  amountNumber.value = "";
  pinNumber.value = "";
});

// Cash Out
document.getElementById("cashOut-btn").addEventListener("click", (event) => {
  event.preventDefault();

  console.log("object");
  const cashOutAmount = document.getElementById("cashOut-amount");
  const pinNumber = document.getElementById("pin-number");

  // main balanced
  const mainBalanceTag = document.getElementById("main-balance");
  const mainBalance = parseFloat(mainBalanceTag.innerText);


  // trasaction
  // take time
  const now = new Date();
  const timeValue = now.toLocaleTimeString();

  const transaction_cashout = {
    status: "Cash Out",
    amount: cashOutAmount.value,
    time: timeValue,
  };

  if (parseInt(pinNumber.value) === 1234) {

    const balance = parseFloat(mainBalance) - parseFloat(cashOutAmount.value);
    mainBalanceTag.innerText = balance;
    allTransactions.push(transaction_cashout);

  }

  cashOutAmount.value = "";
  pinNumber.value = "";

});


