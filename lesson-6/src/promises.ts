// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: Practice Problems: Working with Promises: Async / await


// Q1
async function getData(url: string): Promise<void> {
	let response = await fetch(url);
	let data = await response.json();

	console.log(data);
}