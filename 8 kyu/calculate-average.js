// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution
function findAverage(array) {
    let sum = 0;
    let average = 0;
    for (i = 0; i < array.length; i++){
      average = (sum += array[i])/array.length;
    }
    return average;
  }