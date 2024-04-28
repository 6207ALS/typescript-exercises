// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: The object Type


// Q1
function getProperty<Type>(obj: { [key: string]: unknown }, key: string) {
  return obj[key] as Type; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}

const obj1 = {
  name: "John",
  age: 30,
};

const x = getProperty<string>(obj1, "name");
const y = getProperty<string>(obj1, "age");