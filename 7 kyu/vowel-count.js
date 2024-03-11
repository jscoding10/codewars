// My Solution
function getCount(str) { 
    return (str.match(/[aeiou]/ig)||[]).length;
}