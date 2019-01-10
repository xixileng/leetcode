var projectionArea = function(grid) {
  let top = 0;
  let front = 0;
  let side = 0;
  let obj = [];
  for (let i = 0; i < grid.length; i++) {
    front += Math.max(...grid[i]);
    for (let j = 0; j < grid[i].length; j++) {
      let item = grid[i][j];
      if (item !== 0) top ++;
      if (item > obj[j] || obj[j] === undefined) obj[j] = item;
    }
  }
  side = obj.reduce((current, next) => current + next);
  return top + front + side;
};

let param = [[1,0],[0,2]];
let result = projectionArea(param);
console.log(result);