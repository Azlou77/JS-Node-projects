/* // Create object
const person = {
    name: 'Louis',
    age: 21,
    isStudent: true,
    hobbies: ['music', 'sport', 'cinema'],
}
// Access object
// Expected output: Louis
person.name;

// Expected output: 21
person.age;

// Assign new key 
let person = {}
person.name = 'Louis';
person.age = 21;

// Display object
console.log(person);

//Define mehod in object
const person = {
    name: 'Louis',
    lastname: 'Nguyen',
    age: 21,
    isStudent: true,
    hobbies: ['music', 'sport', 'cinema'],
    // Define method
    getFullname: function() {
        return `${this.name} ${this.lastname}`;
    }
}
// Access method
// Expected output: Louis Nguyen
console.log(person.getFullname());

*/


// Getters and Setters
const person = {
    name: 'Louis',
    lastname: 'Nguyen',
    age: 21,
    isStudent: true,
    // Define array empty
    hobbies: [],
    // get method
    get getFullname() {
        return `${this.name} ${this.lastname}`;
    },
    // set method
    /**
     * @param {string} h
     */
    set hobby(h) {
        this.hobbies.push(h);
    }
}
console.log(person.getFullname);
person.hobby = 'music';
person.hobby = 'sport';

// Expected output: ['music', 'sport']
console.log(person.hobbies) 





