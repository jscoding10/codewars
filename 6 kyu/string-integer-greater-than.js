// My Solution
const BigNumber = require('bignumber.js');
function stringIntGreaterThan(a, b) {
  return new BigNumber(a).gt(new BigNumber(b)) 
} 