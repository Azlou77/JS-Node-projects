//POO course
class User{
    constructor(name, email, isAdmin){
        this.name = name;
        this.email = email;
        this.isAsmin = isAdmin;
        this.#private = 'private class';
    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }


    getFullName(){
        return `${this.name} ${this.firstname}`;
    }
    get private(){
        return this.#private;
    }
    set private(value){
        this.#private = value;
    }

}
const user = new User
({
    name: 'John',
    email: 'john@doe',
    isAdmin: false
})

const user1= new User('John')
const user2= new User('Johny')
user.sayHello();
