// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Generic constraints


// Q1
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}