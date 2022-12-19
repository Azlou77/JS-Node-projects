// let, var and const
// // var value variable
// var myName = "John Doe";
// // let value variable in scope
// let myAge = 20;
// // const non variable value
// const myAddress= "Jl. Jalan No. 1";

// //types of variables
// const myString = "Hello World";
// const myNumber = 10;
// const nullValue = null;
// let undefinedValue;
// const myObj= {}
// const bigint= Bigint(1234567890123456789012345678901234567890);
// const mySymbol = Symbol("my symbol");
// console.log(typeof myString);

// //concaténation
// var myName = "John Doe";
// var myAge = 20;
// var fullSentence = "My name is " + myName + " and I am " + myAge + " years old";
// console.log(fullSentence);


// //ternary operator
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }

//map, reduce, filter

// //loops for, while, do while
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     alert( i );
//     i++;
// }

// //functions

// function checkAge() {
//     const age= 20;
//     while (age != 20) {
//         let qage = prompt('Quel est votre age ?');
//     for (let i = 0; i < 10; i++) {
//     if (qage ==  age) {
//         alert('Bonne réponse');
//         break;
//      } 
//     else if (qage > age) {
//         alert('C/est plus');
//     } 
//     else if (qage < age) {
//         alert('C/est moins');
//     }
//     else {
//         alert('Entrez une valeur correcte svp');
//     }
//     if(i==10) {
//         alert  ("Vous avez perdu");
//         } 
//   }
// }
// }
// checkAge();
//Array objects
users = [
    {   
        name: "Nguyen Louis",
        age: 20,
        address: "Paris",
        email: "nguyenlouis@gmaiLcom",
        school: "ipssi",
        phone : "0606060606",
        hobbies: ["football", "basketball", "tennis"],
        isStudent: true,
        isWorking: true,
        get fullName() {
            return this.name;
        },
        set fullName(value) {       
            this.name = value;

    }
}
]

