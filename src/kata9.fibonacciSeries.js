// Fibonacci Series: Write a function that prints the Fibonacci series up to a given number of terms. The Fibonacci series is a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.
const fibonacci = (n) => {
  const series = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    const nextNumber = series[i - 1] + series[i - 2];
    series.push(nextNumber);
  }
  return series;
};

module.exports = fibonacci;
