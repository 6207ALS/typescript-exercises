// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Extending Interfaces


// Q1
interface Animal {
	name: string;

	makeSound(): string;
}

interface Dog extends Animal {
	name: string;

	fetch(): string;
}

const myDog: Dog = {
  name: "Rex",
  makeSound: () => "Generic animal sound",
  fetch: () => "Rex fetches a stick.",
};
console.log(myDog.fetch());