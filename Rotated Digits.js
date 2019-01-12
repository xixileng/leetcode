/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let count = 0;
  while(N > 1) {
    let str = String(N);
    if (str.replace(/[0125689]/g, '') === ''
     && str.replace(/[018]/g, '') !== '') {
      count++;
    }
    N--;
  }
  return count;
};

let param = 857;
let result = rotatedDigits(param);
console.log(result);
