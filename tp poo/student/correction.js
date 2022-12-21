// Write some browser js code below here

class Student {
    #notes;
  
    constructor(name, firstName, notes = []) {
      this.name = name;
      this.firstName = firstName;
      this.#notes = notes;
    }
  
    addNote(number) {
      if (!isNaN(number) && number >= 0 && number <= 20) {
        this.#notes.push(number);
      } else {
        throw new Error('entrez un nombre valide svp');
      }
    }
  
    displayNotes() {
      console.log(this.#notes.join(','));
    }
  
    get average() {
      let total = 0;
      for (let value of this.#notes) {
        total += value;
      }
  
      return total / this.#notes.length;
    }
  }
  
  const student = new Student('John', 'Doe');
  
  student.addNote(20);
  student.addNote(19);
  console.log(student.displayNotes());
  
  console.log(student.average);
  