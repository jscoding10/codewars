// My Solution
function faroCount(deckSize){
    let shuffles = 0, term = 1;
    do {
      shuffles++;
      term = (deckSize * (term % 2) + term) / 2 | 0; 
    } while (term !== 1)
    return shuffles;
  }