//Object literal notations

let user = {
    name: 'autosys',
    age: 30,
    email: 'autosys@gmail.com',
    location: 'mumbai'
};

user.name = 'autosys.net';

user.age = 23;

console.log(user['name']);
console.log(user['age']);


user['name'] = 'ronak';
console.log(user['name'])

console.log(typeof user);

//Adding method to object

const nUser = {
    name: 'autosys',
    age: 30,
    email: 'autosys@gmail.com',
    location: 'mumbai',
    login: function () {
        console.log('User logged in');
    },
    logOut: (() => {
        console.log('User Logged Out');
    }),
    printName: function () {
        console.log('Name: ',this.name);
    },
    //Cannot use arrow function in Objects
    printAge() {
        console.log('Age: ',this.age)
    }
};

//Login method are invoked by ()
nUser.login();
nUser.logOut();
nUser.printName();
nUser.printAge();

//Storing Objects in array
const blogs = [
    { name: 'jack sparrow in India', likes: 999 },
    { name: 'pirate bay shut down', likes: 111 },
];


const newUser = {
    name: 'autosys',
    age: 30,
    email: 'autosys@gmail.com',
    location: 'mumbai',
    blogs: [
        { name: 'jack sparrow in India', likes: 999 },
        { name: 'pirate bay shut down', likes: 111 },
    ],
    login: function () {
        console.log('User logged in');
    },
    logOut: (() => {
        console.log('User Logged Out');
    }),
    printName: function () {
        console.log('Name: ', this.name);
    },
    //Cannot use arrow function in Objects
    printAge() {
        console.log('Age: ', this.age)
    },
    logblogs() {
        console.log('Blogs Of the User: ')
        this.blogs.forEach((blogs) => {
            console.log(blogs.name,blogs.likes);
        })
    }
};


newUser.logblogs();

//Math Objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7
console.log(Math.round(7.7));
console.log(Math.floor(8.8));
console.log(Math.ceil(8.8));
console.log(Math.trunc(7.7));

const a = Math.random();
console.log(a)
console.log(Math.round(a * 100));