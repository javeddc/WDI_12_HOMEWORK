var bankApp = {
  savBalance: document.getElementById('savingsOutput'),
  savInput: document.getElementById('savingsInput'),
  savWithdrawBtn: document.getElementById('savingsWithdraw'),
  savDepositBtn: document.getElementById('savingsDeposit'),
  chBalance: document.getElementById('checkingOutput'),
  chInput: document.getElementById('checkingInput'),
  chWithdrawBtn: document.getElementById('checkingWithdraw'),
  chDepositBtn: document.getElementById('checkingDeposit'),
  svDeposit: function() {
    bankApp.savBalance.textContent = (Number(bankApp.savBalance.textContent) + Number(bankApp.savInput.value)).toFixed(2);
    bankApp.savInput.value = 0;
    bankApp.runStyle();
  },
  chDeposit: function() {
    bankApp.chBalance.textContent = (Number(bankApp.chBalance.textContent) + Number(bankApp.chInput.value)).toFixed(2);
    bankApp.chInput.value = 0;
    bankApp.runStyle();
  },
  savWithdraw: function() {
    var total = Number(bankApp.savBalance.textContent) + Number(bankApp.chBalance.textContent);
    var requested = Number(bankApp.savInput.value);
    if (requested > total) {
      alert('Insufficient funds.')
    } else if (requested <= Number(bankApp.savBalance.textContent)) {
      bankApp.savBalance.textContent -= requested.toFixed(2);
      bankApp.savInput.value = 0;
      bankApp.runStyle();
    } else {
      bankApp.chBalance.textContent -= Number(requested - bankApp.savBalance.textContent).toFixed(2);
      bankApp.savBalance.textContent = 0;
      bankApp.savInput.value = 0;
      bankApp.runStyle();
    }
  },
  chWithdraw: function() {
    var total = Number(bankApp.chBalance.textContent) + Number(bankApp.savBalance.textContent);
    var requested = Number(bankApp.chInput.value);
    if (requested > total) {
      alert('Insufficient funds.')
    } else if (requested <= Number(bankApp.chBalance.textContent)) {
      bankApp.chBalance.textContent = (bankApp.chBalance.textContent - requested).toFixed(2);
      bankApp.chInput.value = 0;
      bankApp.runStyle();
    } else {
      bankApp.savBalance.textContent = bankApp.savBalance.textContent - Number(requested - bankApp.chBalance.textContent).toFixed(2);
      bankApp.chBalance.textContent = 0;
      bankApp.chInput.value = 0;
      bankApp.runStyle();
    }
  },
  runStyle: function() {
    if (Number(bankApp.savBalance.textContent) === 0) {
      bankApp.savBalance.style = "color: #a54d43"
    } else {
      bankApp.savBalance.style = "color: #444444"
    }
    if (Number(bankApp.chBalance.textContent) === 0) {
      bankApp.chBalance.style = "color: #a54d43"
    } else {
      bankApp.chBalance.style = "color: #444444"
    }
  }
}

bankApp.savWithdrawBtn.addEventListener('click', bankApp.savWithdraw);
bankApp.savDepositBtn.addEventListener('click', bankApp.svDeposit);
bankApp.chWithdrawBtn.addEventListener('click', bankApp.chWithdraw);
bankApp.chDepositBtn.addEventListener('click', bankApp.chDeposit);
bankApp.runStyle();
