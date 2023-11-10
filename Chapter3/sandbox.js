
//Common String methods

let email = 'himanshu@dev.com';

//To find last index of a character
console.log('Last Index: ', email.lastIndexOf('m'));

//Silce a section from String
console.log('Sliced: ', email.slice(0, 8));

//Substring of a String
console.log('SubString: ', email.substring(0, 12));

//Replace method
console.log(email.replace('.com', '.in'));

//Replace can even change a charater
//Replace is only applied in the first occurance
console.log(email.replace('h','m'))