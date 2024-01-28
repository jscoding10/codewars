// DESCRIPTION:
// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

// My Solution
function powerOf4(n) {
    return  n > 1 ? Number.isInteger(Math.log(n)/Math.log(4)):false
  }