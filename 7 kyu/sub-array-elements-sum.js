// My Solution
function elementsSum(arr,d = 0){
    return arr.reduce((sum, sub, i) => sum += (sub = sub[arr.length - 1 - i], sub == 0 ? 0 : sub || d), 0);
  } 