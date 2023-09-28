// Function to say hello
function sayHello() {
    return `Bonjour je m'appelle ${nom} ${prenom} !`;
}

// Variables
const prenom = "Louis";
const nom = "Nguyen"
const salutation = sayHello(nom, prenom);

// Display result
console.log(salutation);