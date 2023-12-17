function combineNamesAndSurnames(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
        return console.log("Both arrays must have the same length");
    }

    const fullNamesarray = [];

    for (let i = 0; i < firstNames.length; i++) {
        let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`
        fullNamesarray.push(fullName)
    }

    console.log(fullNamesarray);
}

combineNamesAndSurnames(["bob", "Jill"], ["Gregory", "Wurtz"])