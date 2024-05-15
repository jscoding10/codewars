// My Solution
function nthSmallest(arr, n) {
    const a = Array.from(new Set(arr)).sort((a,b) => a-b)[n-1];
    return a === undefined ? null : a
}