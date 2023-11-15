
//function declaration 
// function greet() {
//     console.log('Hello there...');
// }

// //function call
// greet();

//function expression ends with  `;`
const speak = function () {
    console.log('Good Day!!')
};

speak();

//Hoisting - funtion is hoisted at the top of the file before the rest of the file actually runs..
//Doesnot apply to function expression....

//Arguments and parameter

//parameters are defined
const talk = function talking(animal ='Cat',speaks = 'meows') {
    console.log(`${animal} ${speaks}`)
}

//agrumnets are being passed
talk('Dog', 'barks');
talk('Man', 'talks');
talk();

//Return values
const calcArea = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
}

let a = calcArea(5);
console.log('area a->', a);

//Arrow Function
const newArea = radius => 3.14 * radius ** 2;
let p = newArea(5);
console.log('p', p);

//Without passing parameter

const greet = () => console.log('jack Sparrow');
greet();
