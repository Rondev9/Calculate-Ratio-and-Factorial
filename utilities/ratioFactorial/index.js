const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const rat = ratioOfTwoNumbers(num1, num2);
  const fact = factorialOfNumber(num3);
  const object = { ratio: rat, factorial: fact };
  return object;
};
module.exports = ratioAndFactorial;
