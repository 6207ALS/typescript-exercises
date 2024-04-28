// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Unknown


// Q1
/*
The second code snippet will raise an error. On line 1, the constant "y" is
declared as a variable of type "unknown". As such, the TypeScript compiler will
enforce type checking before operating on its value. 
On line 2, the if condition checks if the data type of the "y" constant is a 
string. This is completely valid and continues on to the if block where the 
"toUpperCase" method is called on the value.
On line 4, however, the "else" block narrows the "y" constant as a NON-string
value. As such, the TypeScript raises an error when the else block attempts
to call "toLowerCase" on the value.
*/


// Q2
/*
The provided code will raise an error when compiled by TypeScript. 

On line 1, the "userInput" variable is declared as a variable of type "unknown".
On line 2, the "userName" variable is declared as a variable of type "string".

On line 4, the "userInput" variable is assigned a number value, which is a valid
operation; any type value can be assigned to a variable of type "unknown".

On line 5, the "userName" variable is assigned the variable "userInput", a
variable of type "unknown". This is not allowed in TypeScript, a value of type
"unknown" is not assignable to anything (except one with type "any") without
a type assertion or control flow-based narrowing. 

The solution to the error would be narrow down the type of the "userInput"
variable with a type guard, before assigning the value of "userInput" to 
"userName". 

if (typeof userInput === "string") {
  userName = userInput;
}
*/


// Q3
function processData(data: unknown): string {
	if (typeof data === "string") {
		return "Hello, " + data;
	} else if (typeof data === "number") {
		return "Age: " + data;
	} else {
		throw new Error("Invalid data");
	}
}

// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"