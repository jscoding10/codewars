// My Solution
function sometimes(fn) {
    let i = 0
    return (a, b)=>{
    i++
    if (i < 3){ 
    return fn(a, b);
    }
    if (i % 2 !== 0) return fn(a, b)
    if (i % 2 === 0) return `hmm, I don't know!`
    }
} 