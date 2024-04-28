// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Exhaustiveness Checking


// Q1
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

// type Giraffe = {
// 	kind: "giraffe";
// 	height: number;
// }

type Animal = Elephant | Tiger | Peacock // | Giraffe;

function describeAnimal(animal: Animal): string {
	switch (animal.kind) {
		case "elephant":
			return `An elephant weights ${animal.weight} kg.`;
		case "tiger":
			return `A tiger can run as fast as ${animal.speed} km/h.`;
		case "peacock":
			return `A peacock's feather can be as long as ${animal.featherLength}cm long.`;
		default:
			const _exhaustiveCheck: never = animal;
			throw new Error(`Invalid animal: ${_exhaustiveCheck}`);
	}
}


// Q2
/*
Adding a new type to the "Animal" union type but never updating the 
"describeAnimal" function to check for it results in a type error being raised.
The TypeScript compiler states that a variable of type "never" can not be
assigned a value of type "Giraffe". That is, the default clause of the
"describeAnimal" function has been reached, indicating that the "Giraffe" type
has not been accounted for.
*/