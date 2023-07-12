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