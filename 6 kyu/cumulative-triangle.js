// My Solution

let arr = []
const triangle = () => {
  let num = 0
  for (let i=1; i <= 10000; i++){
  let tempArr = []
    for (let j = 0; j < i; j++){
      num++
      tempArr.push(num)
    }
    arr.push(tempArr)
  }
}
triangle()
function cumulativeTriangle(n) {
  return arr[n - 1].reduce((a, b) => a + b, 0)
}