// TS240 Introduction to TypeScript | Lesson 3
// Practice Problems: Generic Arrays


// Q1
/*
Yes, the code use generic array type correctly. The "numbers" variable
is defined as a type of array of numbers - as stated by the generic array typing
"Array<number>". The variable references a value with the correct data type: an 
array of numbers.
*/


// Q2
/*
Yes, the code use generic array type correctly. The "strings" variable
is defined as a type of array of strings - as stated by the generic array typing
"string[]" (in syntactic sugar). The variable references a value with the 
correct data type: an array of strings.
*/


// Q3
/*
No. The code attempts to declare an array of Boolean values, but the syntax is
incorrect. The correct syntax is "boolean[]" instead of "boolean[[]]".
*/


// Q4
/*
While the provided code uses generic array typing correctly, the code will
raise an error when compiled in TypeScript. On line 1, the "FruitNames" type
is defined as a union type of three string literals: "apple", "banana", and
"cherry". On line 2, however, the "fruits" constant references an array
of elements "apple", "banana", and "mango". "mango" is not a valid type in the
union type.
*/