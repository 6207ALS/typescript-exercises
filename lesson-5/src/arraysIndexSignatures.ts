// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Arrays and Index Signatures


// Q1

type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray): string[] {
	if (!Array.isArray(arr)) return [];

	return arr.filter(val => typeof val === "string")
						.map(val => val.toUpperCase());
}

let stringArr: string[] = processCustomArray(customArray);
console.log(stringArr); // Output: ["APPLE", "BANANA"]