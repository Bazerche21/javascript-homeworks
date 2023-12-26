function Animal(name, kind) {
    this.name = name;
    this.kind = kind;

    this.speak = function (message) {
        console.log(`${this.name} (${this.kind}) says: '${message}'`)
    }
}

let animalName = prompt("Enter the animal's name:");
let animalKind = prompt("Enter the kind of animal:");

let animal = new Animal(animalName, animalKind);

let message = prompt("Enter a message for the animal to speak:");
animal.speak(message);