// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: The keyof Operator


// Q1
/*
The provided code will raise an error when compiled in TypeScript. On line 6,
the "key" variable is declared as type "keyof Student". That is, the value
of the variable "key" must be one of the several property names of the
Student type. However, the variable is initialized with the string value
"grade", a non-existing property in type Student.
*/