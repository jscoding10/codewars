// My Solution
function atomicNumber(num){
    let arr = []
    let n = 0
    for (let i = 1; num > 0; i++){
      n=2 * Math.pow(i, 2)
      num -= n
      arr.push(n)
    }
    arr[arr.length - 1] += num
    return arr
}