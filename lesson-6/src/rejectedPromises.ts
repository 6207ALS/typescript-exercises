// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: Rejected Promises


// Q1
async function getData(url: string): Promise<void> {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	} catch (e: unknown) {
		if (typeof e === "string") {
			console.log(e);
		} else if (e instanceof Error) {
			console.log(e.message);
		} else {
			console.log("An unknown error occurred");
		}
	}
}