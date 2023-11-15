//if statement

let age = 21;

//Only one code block is executed...
if (age >= 18) {
    //This codeblock will be executed when the condition is true....
    console.log('User can vote!!!!')
} else { 
    //This codeblock will be executed if condition is false....
    console.log('User cannot vote!!!')
}


//Multiple different conditions....
let password = 'Jack@12391';

if (password.length > 10) {
    console.log('Password is more than 10 characters long....');
} else if (password.length > 8) {
    console.log('8 Characters long password.');
} else {
    console.log('Password is too small');
}

//Multiple conditions
//We use logical operators -> &&, ||, !=, >=,<=
if (password.length > 8 && age > 18) {
    console.log('User valid....');
}else{
    console.log('Invalid User......');
}

//Logical NOT -> !
if (!false) {
    console.log('True-> !false');
}
