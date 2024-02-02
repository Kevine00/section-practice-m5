const fibbRec = function fibonacciRecursive(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
  };
  
  console.log(fibbRec(4)); // -> 3
  console.log(fibbRec(7)); // -> 13