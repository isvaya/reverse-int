module.exports = function reverse (n) {
  let result = 0;
  n = Math.abs(n);

  while (n > 0) {
    const lastDigit = n % 10;
    result = result * 10 + lastDigit;
    n = Math.floor(n / 10);
  }


  return result;

};
