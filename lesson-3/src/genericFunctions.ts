// TS240 Introduction to TypeScript | Lesson 3
// Practice Problems: Generic Functions

// Q1
function pair<T> (arg1: T, arg2: T): T[] {
	return [arg1, arg2];
}