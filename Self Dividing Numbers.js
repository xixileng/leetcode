var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) result.push(i)
  }
  return result;
};

function isSelfDividing (num) {
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    if (num % str[i] !== 0) return false;
  }
  return true;
}

let param = [1, 22];
let result = selfDividingNumbers(...param);
console.log(result);
