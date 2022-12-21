class Student {
    #notes;
    constructor(name, firstname, notes = []) {
        this.name = name;
        this.firstname = firstname;
        this.#notes = notes;
    }
    getNote() {
        return this.#note;
    }
    addNote(note) {
        this.#notes.push(note);
        
    }
    average() {
        const sum = this.#notes.reduce((a, b) => a + b, 0);
        const average = sum / this.#notes.length;
        return average;
    }
    

}
// while(notes != 20) {
//     let notes = prompt('Vous pouvez rentrez une note');
// } if (notes < 0 || notes > 20)  {
//         throw new Error('La note doit être comprise entre 0 et 20');

//     }

const student = new Student('John', 'Doe', []);
student.addNote(16)
student.average




