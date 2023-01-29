module.exports = function reverse(n) {
    let num = Math.abs(n);
    let result = '';
    for (let i = String(num).length - 1; i >= 0; i--) {
        result += String(num)[i];
    }
    return +result;
  
}
