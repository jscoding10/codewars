// My Solution

function password(str) {
    const length = str.length > 7;
    const num = str.match(/[0-9]/);
    const low = str.match(/[a-z]/);
    const upp = str.match(/[A-Z]/);
    return length && num && low && upp ? true: false;
 }