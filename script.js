//complete this code
class Animal {
	constructor(species){
	this._species = species
	}
	get species(){
	return this._species
	}
	makeSound(){
		console.log("The Siamese makes a sound")
	}
}


class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}

const animal = new Animal("Unknown");
console.log(animal.species); // Output: Unknown
animal.makeSound(); // Output: Some generic animal sound

const cat = new Cat("Cat");
console.log(cat.species); // Output: Cat
cat.makeSound(); // Output: Some generic animal sound
cat.purr(); // Output: purr

const dog = new Dog("Dog");
console.log(dog.species); // Output: Dog
dog.makeSound(); // Output: Some generic animal sound
dog.bark(); // Output: woof








// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;