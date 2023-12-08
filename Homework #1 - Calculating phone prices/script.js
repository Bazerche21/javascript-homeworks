const phonePrice = 119.95;
const taxRate = 0.05;

const numberOfPhones = 30;

const totalPriceBeforeTax = numberOfPhones * phonePrice;

const amountTax = totalPriceBeforeTax * taxRate;

const total = totalPriceBeforeTax + amountTax;

document.getElementById("totalAmount").innerHTML = `The total price for ${numberOfPhones} phones is: $${total}`;
