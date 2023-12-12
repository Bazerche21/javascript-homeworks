function convertAge(age, species) {
    if (species === 'human') {
        const humanAge = age * 7;
        console.log(`Your dog is ${humanAge} in human years/age.`);
        return humanAge;
    } else if (species === 'dog') {
        const dogAge = age / 7;
        console.log(`Your human age is equivalent to ${dogAge} dog years.`);
        return dogAge;
    } else {
        console.log('Invalid species. Please specify "dog" or "human".');
        return null;
    }
}

convertAge(5, 'human');

convertAge(35, 'dog');
