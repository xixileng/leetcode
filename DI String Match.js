var diStringMatch = function(S) {
  let max = S.length;
  let min = 0;
  return [...S].map(s => s === 'I' ? min++ : max--).concat([min])
};

let param = 'IDID';
let result = diStringMatch(param);
console.log(result);