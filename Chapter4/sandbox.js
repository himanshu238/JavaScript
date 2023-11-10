//Numbers

//Math Operations: -,+,*,/,**,%

let radius = 10;
const pi = 3.14;

console.log('Area:', pi * radius ** 2);

let num = 10 % 3;
console.log('Remainder: ', num);

let newNum = 10 / 2;
console.log('New Division: ', newNum);


//Order of Operation

/*
B - Brackets
I - Idices
D - Division
M - Multiply
A - Addition
S - Subtraction

*/

//Shorthand operators
let count = 10;
count++;
console.log('Add: ',count);
count--;
console.log('Sub: ',count);
count *= 2;
console.log('Multiply: ', count)

//Nan - Not a number
console.log('Not a number: ', 5 / 'hello')

//concatenate a number

let result = 'There are ' + count + ' items'
console.log(result)