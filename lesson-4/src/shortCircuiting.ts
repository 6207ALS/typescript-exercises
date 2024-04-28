// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Narrowing with Short Circuiting


// Q1
/*
The provided code will raise an error when compiled in TypeScript. The constant
"info" attempts to narrow down the type of the "vehicle" parameter by evaluating
if the parameter of type Vehicle has a "kind" or "type" property. However,
neither property is accessible as they are not common properties in all types
of the union type.
*/