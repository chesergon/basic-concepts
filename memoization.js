const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };
  
  // Example usage:
  console.log(fib(5)); // Output: 5

  







  const memoFib = (n, cache = {}) => {
    if (n <= 1) return n;
  
    if (cache[n]) {
      return cache[n]; // Return cached value
    }
  
    const result = memoFib(n - 1, cache) + memoFib(n - 2, cache);
    cache[n] = result; // Store result in cache
    return result;
  };
  
  // Example usage:
  console.log(memoFib(5)); // Output: 5
  