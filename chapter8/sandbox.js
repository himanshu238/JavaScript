//Boolean i.e true or false

console.log(true || false);
console.log('true: ', true, ' False: ', false)

//methods that return boolean
let email = 'rover@ninja.com';
let arr = ['jack', 'sparrow', 'rover'];

let result = email.includes('@');
console.log('Result: ', result);

console.log('Array Jack: ', arr.includes('jack'));

//Comparison operator

let age = 23;

console.log('Age 23',age == 23);
console.log('Age 25',age == 25);
console.log('Age ! 23',age != 23);


//Other >,<,>=,<=
//We can perform on String numbers...

//Loose Comparision 
console.log('Age == 23--->', age == '23');
//Here js does type conversion in the background when we use == thus different type can still be equal..
console.log('Age == "23"--->', age == '23');

//Strict Comparision 
console.log('Age === 23', age === 23);
console.log('Age === "23"', age === '23');
