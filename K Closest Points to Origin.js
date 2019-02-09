/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let result = [];
  let distances = points.map(point => point[0] ** 2 + point[1] ** 2);
  while (K--) {
    let min = distances[0];
    let minIndex = 0;
    for (let i = 1; i < distances.length; i++) {
      if (distances[i] < min) {
        min = distances[i];
        minIndex = i;
      }      
    }
    result.push(points[minIndex]);
    distances.splice(minIndex, 1);
    points.splice(minIndex, 1);
  }
  return result
};

let param = [[[3,3],[5,-1],[-2,4]], 2];
let result = kClosest(...param);
console.log(result);