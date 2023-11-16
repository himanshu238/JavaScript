
//Stack: All premitive data types are stored in stack....

//Heap: Stores all the non premitive datatypes (Object Literals).....

//When we store refrenced type in variable the variable stores the address of pointer and the pointer points to the heap memory.....


//Premitive types are pass by value......
//Non Premitive types are pass by refrence......

let a = 60;
let b = a;
b += 10;
console.log(a, b)

let c = [10, 23, 45, 67];
let d = c;

d.push(99);
console.log(c, d);