// My Solution

function nthFibo(n) {
    let fib=[0, 1];
    for (let i = 0; i < n; i++){
    fib.push(fib[i] + fib[i + 1])
    }
    return fib[n - 1]
   }