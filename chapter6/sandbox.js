//Arrays

let arr = ['a', 'b', 'c'];


//indexing -> 0,1,2,3.....
console.log(arr);

//Override
arr[1] = 'z';
console.log(arr[1]);

let ages = [21, 'twentythree', '43'];
console.log('length', ages.length);

let a = arr.join('-');
console.log(a);

let b = arr.indexOf('c');
console.log('b', b);

let c = arr.concat(['d', 'e']);
console.log('c', c)

//Destructive method changes the original arr
let e = arr.push('r');
console.log(e, arr);

let f = arr.pop();
console.log(f,arr)