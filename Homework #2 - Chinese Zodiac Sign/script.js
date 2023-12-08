let input = prompt("Enter a year: ");
let inputToInt = parseInt(input);

let chineseZodiacSign = (inputToInt - 4) % 12;

switch (chineseZodiacSign) {
    case 0:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is RAT"
        break;
    case 1:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is OX"
        break;
    case 2:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is TIGER"
        break;
    case 3:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is RABBIT"
        break;
    case 4:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is DRAGON"
        break;
    case 5:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is SNAKE"
        break;
    case 6:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is HORSE"
        break;
    case 7:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is GOAT"
        break;
    case 8:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is MONKEY"
        break;
    case 9:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is ROOSTER"
        break;
    case 10:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is DOG"
        break;
    case 11:
        document.getElementById("chineseZodiacSign").innerHTML = "Your chinese Zodiac Sign is PIG"
        break;
}