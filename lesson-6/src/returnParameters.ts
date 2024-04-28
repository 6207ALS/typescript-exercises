// TS240 Introduction to TypeScript | Lesson 6
// Practice Problems: ReturnType and Parameters


// Q1

function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers>;
type AddNumbersReturnType = ReturnType<typeof addNumbers>;

type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

/*
The provided code will raise errors when compiled in TypeScript. On lines 5-6,
the types "AddNumbersParams" and "AddNumbersReturnType" are defined using
the "Parameters" and "ReturnType" utility types. However, the arguments
passed to the utility types are the "addNumbers" function itself. The type
definition of the the function should be provided instead. Simply prefixing
the function argument with the "typeof" operator will resolve the issue, as
shown above.

In addition, the "AddNumbersFunction" type was refactored. Instead of the "args"
parameter defined as an array of numbers, it's defined to use the spread
operator. The spread operator is used to match the type definition of
"AddNUmbersParams", a tuple.
*/