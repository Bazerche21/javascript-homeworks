function atmWithdrawMoney() {
    const currentAccountBalance = 1000;

    var witdrawnMoneyAmount = prompt("Enter the amount you want to withdraw");

    if (isNaN(witdrawnMoneyAmount) || witdrawnMoneyAmount === null) {
        document.getElementById("amountWithdrawn").innerHTML = "Invalid input, please enter a valid amount.";
    }

    const amountToWithdraw = parseFloat(witdrawnMoneyAmount);

    if (amountToWithdraw > currentAccountBalance) {
        document.getElementById("amountWithdrawn").innerHTML = "Not enough money!!!";
    } else {

        var remainingBalance = currentAccountBalance - amountToWithdraw;

        document.getElementById("amountWithdrawn").innerHTML = "The amount withdrawn is $" + amountToWithdraw;
        document.getElementById("currentBalance").innerHTML = "Your balance now stands at $" + remainingBalance + "!!";
    }
}

atmWithdrawMoney();