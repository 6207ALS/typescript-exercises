// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: Extracting Shared Properties to a Common Type


// Q1

interface Shape {
	color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape): string {
	return `This shape is ${shape.color}`;
}