const numbers = [2, 6, 9, 13, 24];

let numberList = document.getElementById("listNumbers");
let sumOfNumbers = document.getElementById("sum");
let sum = 0;
let listOfNumbers = "<ul>"


for (let i = 0; i < numbers.length; i++) {
    listOfNumbers += "<li>" + numbers[i] + "</li>"
    sum += numbers[i];
}

listOfNumbers += "</ul>"
numberList.innerHTML = listOfNumbers;
sumOfNumbers.innerHTML = `The sum of the numbers in the array is ${sum}`;
document.getElementById("sumEquation").innerText = `Equation: ${numbers.join(' + ')} = ${sum} `