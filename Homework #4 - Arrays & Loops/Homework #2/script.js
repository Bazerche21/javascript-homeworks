function sumOfNumbers(arr) {
    arr.forEach(validateNumber);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`The sum of the numbers is ${sum}`);
}


function validateNumber(num) {
    if (isNaN(num) || num === null || num === undefined) {
        return alert('Invalid number input');
    }
}

sumOfNumbers([1, 2, 3, 4, 5]);