// My Solution
function isNice(arr){
    if(arr.length === 0) return false;
    return arr.every(v => arr.includes(v+1) || arr.includes(v-1));
} 