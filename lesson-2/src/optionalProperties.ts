// TS240: Introduction to TypeScript | Lesson 2
// Practice Problems: Interfaces


// Q1
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  // Your implementation here
	const email = userInfo.email ? userInfo.email : "N/A";
	const age = userInfo.age ? userInfo.age : "unknown";
	return `Name: ${userInfo.name}, Email: ${email}, Age: ${age}`;
}