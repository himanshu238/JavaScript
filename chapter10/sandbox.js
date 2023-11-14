//Loops

//For loop
console.log('For loop: ');
for (let i = 0; i < 5; i++) { 
    console.log('i', i);
}
console.log('Loopimg an array')
let arr = ['a', 'd', 'f', 'e'];
for (let i = 0; i < arr.length; i++) { 
    console.log(i,arr[i])
}

//While loop
console.log('While loop: ');
let i = 0;
while (i < arr.length) {
    console.log(i,arr[i])
    i++;
}
 
//do while loop runs at least once
console.log('Do While loop: ')
i = 0;
do { 
    console.log(i,'-i')
    i++;
}while(i<5)