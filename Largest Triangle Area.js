var largestTriangleArea = function(points) {
  let x = 0;
  let y = 0;
  points.forEach(item => {
    x = item[0] > x ? item[0] : x;
    y = item[1] > y ? item[1] : y;
  });
  return x * y / 2
};

let param = [[4,6],[6,5],[3,1]];
let result = largestTriangleArea(param);
console.log(result);