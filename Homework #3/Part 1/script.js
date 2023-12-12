function checkType(input) {
    const type = typeof input;
    console.log(`The type of ${input} is: ${type}`);
}

let undefinedvariable;

checkType(["apple", "banana", "orange"]);
checkType(false);
checkType(56);
checkType("Matej");
checkType(undefinedvariable); 