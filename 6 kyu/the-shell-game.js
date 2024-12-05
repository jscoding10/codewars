// My Solution
find_the_ball=function(start,swaps){
    swaps.forEach(function (val) {
          if (val[0] === start) {
              start = val[1];
          } else if (val[1] === start) {
              start = val[0];
          }
      });
      return start; 
};    