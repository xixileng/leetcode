var binaryGap = function(N) {
  let binary = N.toString(2);
  if (!(binary.replace('1', '').includes('1'))) return 0;
  let count = 1;
  let max = 1;
  let flag = true;
  while (binary.length) {
    let item = binary[0];
    if (!(binary.includes('1'))) return max;
    if (item === '1') {
      flag = false;
      count = 1;
    } else {
      flag = true;
      count++;
    }
    max = Math.max(max, count);
    binary = binary.slice(1);
  }
  return max;
};

let param = 8;
let result = binaryGap(param);
console.log(result);
