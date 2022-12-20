// //Destructuration data
// const {name, age, country ...restFruits}  = data;
// console.log(name, age, country);
// console.log(firstElement);
// console.log(restFruits);
// const { lenght: fruits } = fruits
// const lenght = fruits.lenght
// console.log(lenght);

// //Spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// //Rest operator
// function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// //Class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting() {
//         console.log(`My name is ${this.name} and I am ${this.age}`);
//     }
// }
// const person1 = new Person('John', 30);
// person1.greeting();

// //Modules
// function sum(... array){
//     let total = 0;
//     for (let value of array) {
//         total += value;
//     }
//     return total;
// }

// // Promise
// for(let i of Object.entries(users)){
//     const key= i[0];
//     const value= i[1];
//     console.log(key, value);
// }

