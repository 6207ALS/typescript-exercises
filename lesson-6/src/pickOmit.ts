// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: Pick and Omit


// Q1
/*
The provided code will raise an error when compiled in TypeScript. On lines 7
and 8, the Pick and Omit utility types are used on the "User" interface. 
The property names specified as the arguments are not existing properties in the
User type. 
The TypeScript compiler will detect this on the Pick type and raise an error.
However it should be noted that the compiler will NOT raise an error when
a non-existing property is provided for the Omit type.
*/