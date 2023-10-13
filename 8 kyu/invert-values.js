// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers

// My solution
function invert(array) {
    let arr = [];
    for (i = 0; i < array.length; i ++) {
      arr.push(-1 * array[i])
    }
    return arr;
  }

  // Best solution
  // const invert = array => array.map(num => -num);