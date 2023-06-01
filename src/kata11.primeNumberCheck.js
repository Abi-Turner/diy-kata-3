// Prime Number Check: Write a function that takes a positive integer as input and returns true if it is a prime number, and false otherwise. A prime number is a number greater than 1 that has no divisors other than 1 and itself.

const primeNumberCheck = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = primeNumberCheck;
