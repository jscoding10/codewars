// My Solution
function tankvol(h, d, vt) {
    return Math.floor(((4 * vt)/(Math.pow(d, 2) * Math.PI)) *
    (Math.pow(d / 2, 2) * Math.acos(1 - h / (d / 2)) - ((d / 2) - h) * Math.sqrt(h * (d - h))))
} 