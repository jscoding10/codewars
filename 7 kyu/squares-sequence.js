// My Solution
function squares(x, n) { 
    if (n <= 0) return [];
       let arr=[x];
         for (let i = 0; i < n - 1; i++)
         {
         arr.push(Math.pow(arr[i], 2))
         }
         
       return arr;  
}
    