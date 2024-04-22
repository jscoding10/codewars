// My Solution

function scoreThrows(r){
    if (r.length === 0) return 0
    let score = 0;
    for (let i = 0; i < r.length; i++){
    
      if (r[i] >= 5 && r[i] <= 10) score += 5
      if (r[i] < 5) score += 10
      
    }
    if (r.every(v => v < 5)) score += 100
    return score
  }