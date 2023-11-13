// Template Strings

const title = 'Best in 2023';
const author = 'roverr';
const likes = 90900;

//Concatination Way
let result = 'Concatenation: The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
console.log(result);

//Template String way || Template literal
let newResult = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(newResult);


// Creating HTML template 
let html = `<h2>${title}</h2> <p>by ${author}</p> <span>This blog has ${likes} likes</span>`;
console.log(html);