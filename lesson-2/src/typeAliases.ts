// TS240: Introduction to TypeScript | Lesson 2
// Practice Problems: Type Aliases

// Q1
/*
Yes, the provided code will raise errors when compiled in TypeScript. The
"greet" function, as defined on line 8, states that it takes a single argument
of type "Person". The "Person" type is defined as an object with predefined
properties and their types.
On line 23, an object that is passed to the "greet" function does not adhere 
to the "Person" type definition. While the object may have the predefined 
properties of the "Person" type, the values' data types do not match. TypeScript 
will raise an error indicating these values are not the expected data types
stated in the type definition.
*/