function sumMinMax(randomArray) {
    let numbers = randomArray.filter(item => typeof item === 'number');

    if (numbers.length === 0) {
        alert("No items found in the array");
    } else {

        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        let sum = min + max;

        alert(`Max:${max}, Min:${min}, Sum:${sum}`);
    }
}

sumMinMax([3, 5, 6, 8, 11, "hello", true, null, 2.5]);