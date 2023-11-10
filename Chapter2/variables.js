/*
Variables

1. Numbers - Integers and Decimals
2. String - Characters
3. Boolean - true or false
4. Null - set a variable with no value
5. Undefined - variable not yet defined
6. Objects - Arrays, Dates, literals
7. Symbols - Used with objects
*/

//1. Strings
console.log('Single Quotes...');
console.log("Double Quotes...");

let email = 'himanshu.singh@gmail.com';

// String Concatination
let firstName = 'Himanshu';
let lastName = 'Singh';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//String Interpolation
console.log('0th Element ->', fullName[0]);

//length
console.log('Length: ', fullName.length);

//Methods....
//Function: It is a code snippet to perform some particular task
//Method: It is a funtion associated with a particular data type.

console.log(fullName.toUpperCase());    
console.log(fullName.toLowerCase());
console.log(email.indexOf('@'));