// My Solution
function onLine(points) {
    if (points.length < 3) return true;
    const x = points.shift();
    let a;
    return points
      .filter (function(y) { return !(x[0] == y[0] && x[1] == y[1]) })
      .map    (function(y) { return a = (x[0] - y[0])/(x[1] - y[1]) })
      .every  (function(y) { return y == a });
  }