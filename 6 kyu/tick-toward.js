// My Solution
function tickToward([s1, s2], [e1, e2]){
    let arr1 = [];
    let arr2 = [];
    if (e1<s1){
      for (let i = s1; i >= e1; i--){
        arr1.push(i)
      }
    } 
    else {
      for (let i = s1; i <= e1; i++){
        arr1.push(i)
      } 
    }
      if (e2 < s2){
      for (let i = s2; i >= e2; i--){
        arr2.push(i)
      } 
    } else {
      for (let i = s2; i <= e2; i++){
        arr2.push(i)
      } 
    }
    let max = Math.max(arr1.length,arr2.length)
    let arr3 = [];
    for (let i=0; i < max; i++){
      arr3.push([(arr1[i] ? arr1[i] : arr1[i] === 0 ? 0 : arr1[arr1.length-1]),(arr2[i] ? arr2[i] : arr2[i] === 0 ? 0 : arr2[arr2.length-1])])
    }
    return arr3
  }  