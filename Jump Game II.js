/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let count = 0;
  let maxStep = 0;
  let currentMaxStep = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    currentMaxStep = Math.max(currentMaxStep, i + nums[i])
    if (i === maxStep) {
      count ++;
      maxStep = currentMaxStep;
    }
  }
  return count;
};

let param = [2,3,1,1,4];
let result = jump(param);
console.log(result);
