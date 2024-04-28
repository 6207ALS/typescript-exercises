// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: Defining Options types


// Q1
/*
The provided code will log 0 to the console. On line 2, the nullish coalescing
operator is used to determine if the "height" argument was provided or not.
That is, it evaluates if the "height" argument is either null or undefined.
If the argument is one of the two values, the right hand operand "width" is the
return value of the expression. If not, the value that was passed to "height"
is used instead.
In this case, the number 0 was passed as the "height" argument. Thus, the
expression on line 2 evaluates to "3 * 0", or 3, which becomes the return value
of the function.
*/


// Q2
type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName(options: NameOptions): string {
	let title = options.title ?? "";
	let firstName = options.firstName ?? "John";
	let lastName = options.lastName ?? "Doe";
	return `${title} ${firstName} ${lastName}`;
}


// Q3
function formatName2({ title, firstName = "John", lastName = "Doe" }: NameOptions): string {
	return `${title ? title + " " : ""}${firstName} ${lastName}`;
}