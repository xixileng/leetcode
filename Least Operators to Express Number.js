var leastOpsExpressTarget = function(x, target) {
  let count = 0;
  let remainder = target % x;
  if (remainder < x - remainder) {
    count += remainder + 1;
    target -= remainder;
  } else {
    count += x -remainder + 1;
    target += x -remainder;
  }
};

let param = [5, 501];
let result = diStringMatch(...param);
console.log(result);
