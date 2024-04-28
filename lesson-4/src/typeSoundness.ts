// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Type soundness

// Q1
function isNumber(val: any): val is number {
	return typeof val === "number";
}


// Q2
function safeGet<T>(arr: T[], index: number): any | undefined {
	if (index <= 0 || index > arr.length - 1) {
		return undefined;
	} else {
		return arr[index];
	}
}