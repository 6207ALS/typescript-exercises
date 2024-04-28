// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Differences between Interfaces and Types


// Q1
/*
The provided code will raise an error when compiled in TypeScript. Unlike
interfaces, types cannot be re-declared. TypeScript does not support
declaration merging for types. The provided code will result in a 
"Duplicate Identifier" error.
*/


// Q2
/*
The provided code will not raise an error when compiled in TypeScript. The
interface "UserInterface" and type "UserType" are structurally the same: they
both shape an object with the properties "name" and "email".
On line 11, the greetUser function is defined to take a single parameter of
type "UserType".
On line 20, a constant of type "UserInterface" is passed as an argument to the
greetUser function.
This is a completely valid operation as TypeScript conducts structural type
checking. That is, the argument passed to "greetUser" does not strictly have
to be of type "UserType". It should, however, match the shape of the "UserType"
object.
*/