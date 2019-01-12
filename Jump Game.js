/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (!nums.includes(0)) return true;
  let zeroIndex = 0;
  while ((zeroIndex = nums.findIndex(num => num === 0)) !== -1) {
    if (zeroIndex === nums.length - 1) return true;
    let isCanJump = false;
    let items = nums.slice(0, zeroIndex);
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item > zeroIndex - i) {
        isCanJump = true;
        nums[zeroIndex] = 1;
        break;
      }
    }
    if (!isCanJump) return false;
  }
  return true;
};

let param = [3,0,0,0];
let result = canJump(param);
console.log(result);