const weapons = ["sword", "spear", "revolver"] ;

// adding items with push() method
weapons.push("machine gun");
console.log(weapons);

weapons.push("rifle", "knife");
console.log(weapons);


// removing items with pop() method
weapons.pop();
console.log(weapons);

// removing items with shift() method
weapons.shift();
console.log(weapons);

// splice() method
weapons.splice(1, 1);

console.log(weapons);