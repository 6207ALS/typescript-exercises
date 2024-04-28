// TS240: Introduction to TypeScript | Lesson 2
// Practice Problems: Interfaces


// Q1
/*
The provided code will not raise an error when compiled in TypeScript. 

On line 1, the "Fruit" type is defined as an object with the "name" and "color"
properties. On line 6, the "Apple" type is defined as an object with the "name",
"color", and "variety" properties. Given TypeScript's structural typing rules,
the "Apple" type is a valid subtype of the "Fruit" type; TypeA can be assignable
to TypeB if it has AT LEAST the same properties (properties and property types)
as TypeA.

On line 12, the "describeFruit" function is defined to take a single Fruit-type
argument. On line 22, a variable defined as a "Apple" type is passed to the
"describeFruit" function, which is allowed as "Apple" is a valid subtype of the
"Fruit" type.
*/


// Q2
/*
Yes, there are type errors in the provided code. On line 5, the constant "John"
is declared and defined as type "Human" and initialized with a value of type
"Alien". Structurally, the two types "Alien" and "Human" are slightly different;
the "Alien" type has the "planet" property while the "Human" type has the
"country" property. Their respective properties are required in the value.
The value assigned to "John" contains type "Alien" properties, which results
in a type error.
Specifically, TypeScript's structural typing system notices that the "Alien" 
type does not have the "country" property required by the Human type.
*/


// Q3
/*
The provided code will raise an error when compiled in TypeScript. However, the
output of the "console.log" statement on line 7 is the number 5 on the console.

On line 1, the "Shape" type is defined as an object with the "color" and "sides"
properties. On line 2, the "Square" type is defined as an object with not only
the "color" and "sides" properties, but also the "sideLength" property. Given
TypeScript structural typing rules, the "Square" type is a valid subtype of the
"Shape" type. As such, the value of the "redSquare" constant (on line 4) can 
be assigned to the "shape" constant.

However, an error will be raised on line 7 as it attempts to access the 
"sideLength" property on the "shape" constant. Although the value "shape" is 
assigned to contains the "sideLength" property, the "Shape" type is not defined
to have the "sideLength" property. As such, TypeScript will identify the
statement as an error.

Regardless, TypeScript will still compile the code and allow the JavaScript 
runtime to log the value of "shape.sideLength".
*/