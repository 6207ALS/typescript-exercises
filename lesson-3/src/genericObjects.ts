// TS240 Introduction to TypeScript | Lesson 3
// Practice Problems: Generic Objects


// Q1
/*
No, the provided code does not use generic object types correctly. On line 11,
the "yourPair" constant of type "Pair" declares that its generic type parameters
are a number and a string. Specifically, the "first" property of the object will
be a number and the "second" property of the object will be a string.

However, the object the "yourPair" constant references does not follow the
generic object types. The "first" property is assigned a string and the
"second" property is assigned a number.
*/

// Q2
/*
The provided code does not use generic object types correctly for the 
"yourPairs" object. On line 11, the "yourPairs" object is defined with the
generic object types of number and string. Specifically, the "key" property
should be assigned a number and the "values" property should be assigned
an array of strings. 
However, the object "yourPairs" references does not match the generic object
types. The "values" property is assigned an array of strings AND numbers
(Array<string | numbers>). It should instead by an array of strings
(Array<string>).
*/