// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Discriminated Unions


// Q1

type Dog = {
	species: "dog",
	name: string,
	age: number,
}

type Bird = {
	species: "bird",
	name: string,
	wingspan: number,
}

type Animal = Dog | Bird;

function describeAnimal(animal: Animal): string {
  switch (animal.species) {
		case "dog":
			return `${animal.name} is a ${animal.age} year(s) old dog.`;
		case "bird":
			return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
	}
}