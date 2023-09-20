// Export an array
let  weapons = ['candlestick', 'lead pipe', 'revolver'];

// Export an constant
const name = 'Alexander';

// Export a class 
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
}

// export a function
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}



// export a function, const, let, class
export { name, weapons, Character, fullName };