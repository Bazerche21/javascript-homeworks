function concatenateStrings(randomArray) {
    if (!Array.isArray(randomArray)) {
        return alert("Input is not an array");
    }
    var result = randomArray.join(' ');
    alert(result);
}

concatenateStrings(["My", "name", "is", "Matej"]);