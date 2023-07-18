CommonJS is a module system in JavaScript that was primarily designed for server side applications
It is commonly used in environments like Node.js
To implement modules, you need a Node app on your computer and thereafter create one by running "npm init -y" command line
It provides a way to organise and reuse code by splitting it into separate modules
CommonJS can export values and functions using the module.exports or export object, for instance, you can assign an object to module.exports to make it accessible to other modules

Let's demonstrate this using a few files with some codes:

Create a file named full-name.js
\\ full-name.js
const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

module.exports = fullName;

Create a file named test.js
\\ test.js
const isDivisibleByThree = (number) => {
  return number % 3 === 0;
}

const isDivisibleByFour = (number) => {
  return number % 4 === 0;
}

const square = (number) => {
  return number * number;
}


module.exports = {
  isDivisibleByThree,
  isDivisibleByFour,
  square
}

CommonJS can import values and functions using the "require" function. The require function takes the path to the module file as an argument and returns the exported value.
Note: You can assign the imported module to a variable and access its exports

Let us demonstrate how to import the above modules into other new modules

Create a file named start.js to import full-name.js and square modules
\\ start.js
const {value } = require('./routes/livinus/index')
const fullName = require('./full-name')
console.log(fullName('John', 'Doe'))
console.log(value)

Create a file named index.js to import modules from "full-name" file in root folder and index.js file in sub-folder
\\ index.js
const {value } = require('./routes/livinus/index')
const fullName = require('./full-name')
console.log(fullName('John', 'Doe'))
console.log(value)

Create a file named app.js to import modules in "is-divisible-by-two" file in routes folder and "test" file in root folder
\\ app.js
const computation = require('./routes/is-divisible-by-two')
const computations = require('./test')
// namespace
console.log(computation.isDivisibleByTwo(5))
console.log(computations.isDivisibleByFour(5))

Modules can be imported from different parts of a folder or file in a project with the condition that the require function takes the correct path to the module file as an argument

Create a route subfolder named "livinus" with "index.js" file to import a module from a root folder "test.js" file 
\\ index.js
const { square } = require('../../test')

console.log(square(5))

exports.value = 'Hello World'

Let us mention also that CommonJS modules have synchronous behavior. The modules are loaded and evaluated at runtime, and each module is only evaluated once, caching its exports for subsequent imports. This is different from ECMAScript Modules (ESM) introduced in ES6, which have an asynchronous and static module resolution