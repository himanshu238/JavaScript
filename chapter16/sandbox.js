//function
//simple block of code
function app() {
    console.log(`Inside app!!!`)
}
app();

//method - they are function associated with object
name = 'Rover';
let resultTwo = name.toUpperCase();
console.log(resultTwo) 

//callback function and foreach

function mid(calcFunc) {
    let a = 50;
    calcFunc(a);
}


mid(a => {
    console.log('a:',a);
})

//for each
let people = ['h', 'b', 'c', 'd'];

people.forEach((a,index) => {
    console.log(a,index);
});

