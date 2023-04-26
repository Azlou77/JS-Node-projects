// Declare a constructor function
/*
// By function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getFullname = function() {
        return `${this.name} ${this.lastname}`;
    }
}
// Instanciate  new Person
const person1 = new Person('Alex', 21);


// Public class
class Person {
    // Define constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getFullname() {
        return `${this.name} ${this.lastname}`;
    }
}
// Instanciate  new Person
const person1 = new Person('Alex', 21);

*/

// By class like in PHP



// Private class
class Person {
    // Define private variables
    #privateName;
    // Define constructor
    constructor(name, lastname,  age) {
        this.#privateName = name;
        this.lastname = lastname;
        this.age = age;
    }

    // Define method
    getFullname() {
        return `${this.#privateName} ${this.lastname}`;
    }

    // get method
    get Lastname() {
        return this.lastname;
    }

    // set method
    /**
     * @param {any} s
     */
    set name(s) {
        throw new Error('You can\'t change name');
    }
}
// Instanciate  new Person
const person1 = new Person('Alex', 21);
// Expected output: Alex
person.lastname;
// Expected output: 21
person.age;
// Expected output: You can't change name
person.name;
// Expected output: Alex
person.getFullname();

