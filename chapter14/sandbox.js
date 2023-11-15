//block level scope

//Scope: where the value of variable is different

let names = 'Rover';

if (true) {
    let names = 'Jack';
    console.log('In if statement',names)
}
console.log('outside if',names)