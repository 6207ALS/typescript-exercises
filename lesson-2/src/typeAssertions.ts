// TS240: Introduction to TypeScript | Lesson 2
// Practice Problems: Type Assertions


// Q1
/*
The provided code will not raise an error when compiled in TypeScript. On line 
1, "age" is initially declared as a type union "number | string" and is 
assigned the string value '30'. On line 2, "age" is reassigned to the length 
of the string value "30", 2. 
It should be noted that accessing the "length" property on a type union 
"number | string" would typically raise a type error. TypeScript will only 
allow an operation if it is valid for EVERY member of the union. As "length" 
is not a valid property on the "number" data type, accessing the property on 
"age" would raise a type error. 
On line 2, however, type assertion is utilized to treat "age" as solely a
string. Type error is avoided with the use of type assertion.
*/