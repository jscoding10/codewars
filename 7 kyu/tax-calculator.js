// My Solution
function taxCalculator(total) {
    let tax = 0;
    if(total <= 0 || isNaN(total)){
      return 0
    }
    else if(total > 0 && total <= 10){
      tax = total * 0.1;
    }
    else if(total > 10 && total <= 20){
      tax = 1 + (total - 10) * 0.07;
    }
    else if(total > 20 && total <= 30){
      tax = 1.7 + (total - 20) * 0.05;
    } 
    else {
      tax = 2.2 + (total - 30) * 0.03;
    }
    return + tax.toFixed(2);  
  }