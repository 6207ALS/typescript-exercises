// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Narrowing with Type Guards

// Q1

/*
No, the provided code will not raise an error when compiled in TypeScript. 

On line 6, the function "printVideoInfo" is defined with a single parameter
"videoOrVideos". The "videoOrVideos" parameter is defined as a Union Type of
"Video | Video[]". That is, the parameter can either be of type Video or an
array of Video(s).

On line 7, the function narrows down the type of the "videoOrVideos" parameter
by using a type guard and checking for the "length" property. If the 
"videoOrVideos" parameter was of type Video, the "length" property would not 
exist. If the "videoOrVideos" parameter was an array of Videos, the "length" 
property would exist. The TypeScript compiler is able to narrow down the 
parameter as an array, and enables the "if" block to use array-specific
operations such as the "forEach" method.
*/


// Q2
/*
Yes, the provided code will raise an error when compiled in TypeScript. 

On line 6, the function "printVideoInfo" is defined with a single parameter
"videoOrVideos". The "videoOrVideos" parameter is defined as a Union Type of
"Video | Video[]". That is, the parameter can either be of type Video or an
array of Video(s).

On line 7, the function attempts to narrow down the type of the "videoOrVideos" 
parameter by checking if the "length" property exists in the "videoOrVideos" 
parameter. However, the type Video and an array of Videos both contain the
"length" property. Checking for the "length" property of the "videoOrVideos"
parameter will not narrow down the value to either type. That is, the 
"videoOrVideos" parameter remains of type "Video | Video[]" within the "if"
block.
*/