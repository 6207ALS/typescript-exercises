function concatenateStrings(a: string, b: string): string {
  return a + b;
}

console.log(concatenateStrings("Launch", "School"));
// prints "LaunchSchool"

// console.log(concatenateStrings("Launch", 1));
// Error: Argument of type 'number' is not assignable
// to parameter of type 'string'.