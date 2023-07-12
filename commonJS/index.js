const t = require('./full-name')
const { isDivisibleByTwo, isDivisibleByThree } = require('./routes/is-divisible-by-two')
const { isDivisibleByThree } = require('./test')

console.log(t('Ezeh', 'Doe'))

console.log(isDivisibleByTwo(5))
console.log(isDivisibleByThree(3))