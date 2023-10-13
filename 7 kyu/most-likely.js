// DESCRIPTION:
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

// My solution
function mostLikely(prob1,prob2){
    let prob1Arr = prob1.split(':');
    let prob2Arr = prob2.split(':');
    let prob1Val = prob1Arr[0] / prob1Arr[1];
    let prob2Val = prob2Arr[0] / prob2Arr[1];
    return prob1Val > prob2Val;
  }

// Best solution
// const divide = (a, b) => a / b;
// const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));