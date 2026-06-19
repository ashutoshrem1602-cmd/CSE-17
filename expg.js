const outputDiv = document.getElementById("output");

function displayAccount(type, deposited, number, name, balance, interest) {
  const section = document.createElement("div");
  section.innerHTML = `
    <p class="section-title">----- ${type} Account -----</p>
    <p class="output-line">Amount Deposited: ${deposited}</p>
    <p class="output-line">Account Number: ${number}</p>
    <p class="output-line">Account Holder Name: ${name}</p>
    <p class="output-line">Balance: ${balance}</p>
    <p class="output-line">${type} Account Interest: ${interest}</p>
  `;
  outputDiv.appendChild(section);
}


displayAccount("Savings", 2000.0, 101, "Rahul", 12000.0, 600.0);


displayAccount("Current", 3000.0, 102, "Anita", 23000.0, 460.0);
