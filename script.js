
//Income
let incomeValue = document.getElementById("income-value");
let balanceOutput = document.getElementById("balance-output");

//Expenses
let foodCost = document.getElementById("food-cost");
let rentCost = document.getElementById("rent-cost");
let clothesCost = document.getElementById("clothes-cost");
let expensesOutput = document.getElementById("expenses-output");

// Savings
let percentageValue = document.getElementById("percentage-value");
let savingValue = document.getElementById("saving-value");

//Remaining
let remainingValue = document.getElementById("remaining-value");


// Income function with parameter
function incomeAmount(earning) {
    return parseFloat(earning);
}

//Expenses function with parameter
function costAmount(food, rent, clothes) {

    return parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
}

// Balance after cost function with parameter
function afterCost(balance, cost) {
    return parseFloat(balance) - parseFloat(cost);
}

// savings function with parameter
function savingCost(taka, percent) {
    return parseFloat(percent * taka) / 100;
}

// Remaining function with parameter
function remainingBalance(finalBalance, finalSavings) {
    return parseFloat(finalBalance) - parseFloat(finalSavings)
}

//Income form calculation
function calculate() {

    const totalBalance = incomeAmount(incomeValue.value);
    balanceOutput.innerText = totalBalance;
    // incomeValue.value = '';

    //Expenses
    const totalCost = costAmount(foodCost.value, rentCost.value, clothesCost.value);
    expensesOutput.innerText = totalCost;

    // foodCost.value = '';
    // rentCost.value = '';
    // clothesCost.value = '';

    const balanceAfterCost = afterCost(balanceOutput.innerText, expensesOutput.innerText);
    balanceOutput.innerText = balanceAfterCost;

}



// saving amount calculation
function save() {
    //savings calculation
    const savingAmount = savingCost(percentageValue.value, incomeValue.value);
    savingValue.innerText = savingAmount;

    //remaining Balance caculation
    const finalremainingBalance = remainingBalance(balanceOutput.innerText, savingValue.innerText);
    remainingValue.innerText = finalremainingBalance;
}