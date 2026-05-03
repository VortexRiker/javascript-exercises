const add = function(lhs, rhs) 
{
	return lhs + rhs;
};

const subtract = function(lhs, rhs) 
{
	return lhs - rhs;
};

const sum = function(numbers) 
{
  return numbers.reduce((sum, number) => add(sum, number), 0);
};

const multiply = function(numbers) 
{
  return numbers.reduce((result, number) => result * number);
};

const power = function(base, exponent) 
{
  let result = 1;
  if (exponent === 0)
  {
    return result;
  }

  for(let i = 0; i < exponent; ++i)
  {
    result *= base;
  }

  return result;
};

const factorial = function(number) 
{
	// let numbers = [];
  // for (let i = 1; i <= number; ++i)
  // {
  //   numbers.push(i);
  // }
  // return multiply(numbers);
  if( number <= 1)
  {
    return 1;
  }

  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
