// TS240: Introduction to TypeScript | Lesson 2
// Practice Problems: Classes

// Q1
/*
The provided code will raise an error when compiled in TypeScript. The
constructor function, on line 5, is defined to take in two arguments. However,
the "age" parameter, which is defined as optional, comes before a required
parameter. In other words, optional parameters must follow required parameters.

The solution would be to swap the order of the parameters. Consider the
following:

constructor(name: string, age?: number) {
  this.name = name;
  this.age = age;
}
*/

// Q2
interface Movable {
	speed: number,
	move(): void,
}

class Car implements Movable {
	speed: number;

	constructor(speed: number) {
		this.speed = speed;
	}

	move(): void {
		console.log("I am moving.");
	}
}