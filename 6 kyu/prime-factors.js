// My Solution
const prime_factors = n => {
    const factors = [];
    for (let i = 2; i <= n; i++) {
      while (n % i == 0) {
        factors.push(i);
        n /= i;
      } 
    }
    return factors;
} 