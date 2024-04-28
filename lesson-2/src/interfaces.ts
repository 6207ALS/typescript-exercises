// TS240: Introduction to TypeScript | Lesson 2
// Practice Problems: Interfaces

// Q1
interface Author {
	firstName: string,
	lastName: string,
}

interface Book {
	title: string,
	author: Author,
	publicationDate: number,
	genres: string[],
}