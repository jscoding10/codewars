// My Solution
function count(n) {
    return Math.ceil(Math.log10(2*Math.PI*n) / 2 + n*Math.log10(n/Math.E))
};