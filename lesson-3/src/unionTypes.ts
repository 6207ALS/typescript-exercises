// TS240 Introduction to TypeScript | Lesson 3
// Practice Problems: Union Types

// Q1
function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function combine(a: string | number, b: string | number): string | number {
	if (typeof a === "string" && typeof b === "string") {
		return (a + b)
	} else if (typeof a === "number" && typeof b === "number") {
		return (a + b)
	} else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);