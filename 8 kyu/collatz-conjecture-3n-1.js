// DESCRIPTION:
// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.


// My Solution
var hotpo = function(n){
    let count = 0;
    if (n < 2) {
      return 0
    }
     while (n > 1) {
       if (n % 2){
         n = n * 3 + 1
       } else {
         n /= 2
       }
       count ++
     }
   return count
   }