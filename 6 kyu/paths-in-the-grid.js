// My Solution
function numberOfRoutes(m, n){
    return factorial(n + m) / factorial(n) / factorial(m)
  }
  function factorial(n){
      return n ? n * factorial(n-1) : 1
}