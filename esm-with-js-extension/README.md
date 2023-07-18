\\ ESM With .mjs Extension
ESM means ECMAScript Modules while ".mjs" extension stands for "module JavaScript"
it is a module system introduced in ECMAScript 6 (ES6) that provides a standardized way to organize and share codes between different files
ESM modules have the ".mjs" file extenson by default hence "esm with .mjs extension
Depending on the JavaScript runtime e.g Node.js and its version, ESM can either be supported natively or may require the "-- experimental - modules" flag to enable ESM support
To set up your project to support ESM, you must install a Node app and run the "npm init -y" command line ensuring thereafter that it has a package.json file with the "type" field set to "module". This informs Node.js that you intend to use ES Modules.
\\ "type": "module",
 Starting from Node.js 12, ESM is supported by default

 Let's demonstrate ESM with .mjs extension using a few code lines:

create a file named "root-of-number.mjs":
\\ root-of-number.mjs
const squareRoot = (number) => {
  return Math.sqrt(number);
}

export default squareRoot;

Create a file named test.mjs
\\ test.mjs
export const square = (number) => {
  return number * number;
}

In another JavaScript file named "start.mjs", import and use the module /root-of-number.mjs and /test.mjs
\\ start.mjs
import root from "./root-of-number.js";
import { square } from "./test.js";
import { square as livinus } from "./test.js";

console.log(root(4));
console.log(livinus(4));

Modules provide a way to separate code into reusable components and encapsulate their functionality