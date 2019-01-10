// 解法有问题，答案错误

var leastOpsExpressTarget = function(x, target) {
  let result = '';
  let remainder = target % x;
  let one = `${x}/${x}`;
  if (x - remainder > remainder) {
    target -= remainder;
    while (remainder--) {
      result += `+${one}`;
    }
  } else {
    let diff = x - remainder;
    target += diff;
    while (diff--) {
      result += `-${one}`;
    }
  }

  let division = target / x;
  let mutiple = '';
  if (division > 1) mutiple = `${x}`;
  while (division > x) {
    remainder = division % x;
    if (remainder > 0) {
      result = '+' + formatMutiple(remainder, x, mutiple) + result;
      division -= remainder;
    }
    division /= x;
    mutiple += `*${x}`;
  }
  if (division > 1) {
    mutiple = formatMutiple(division, x, mutiple);
  }
  // return (mutiple + result);
  return (mutiple + result).replace(/\d/g, '').length;
};

function formatMutiple(division, x, mutiple) {
  let str = mutiple;
  let diff = x - division;
  let diffLength = diff * mutiple.length + diff + mutiple.length + 2;
  let divisionLength = division * mutiple.length + division - 1;
  if (diffLength < divisionLength) {
    mutiple += `*${x}`;
    while (diff--) {
      mutiple += `-${str}`;
    }
  } else {
    division--;
    while (division--) {
      mutiple += `+${str}`;
    }
  }
  return mutiple;
}

let param = [10, 86];
let result = leastOpsExpressTarget(...param);
console.log(result);
