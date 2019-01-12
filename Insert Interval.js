/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

// 这题不知道怎么的就提示我内存溢出，然而实测没有啊

// 1代表左侧断，2代表右侧断，3代表不断；
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  let result = [];
  let map = {};
  let intervalsMax = intervals[intervals.length - 1].end;
  let max = Math.max(intervalsMax, newInterval.end);
  intervals.forEach(interval => {
    map[interval.start] = 1;
    map[interval.end] = map[interval.end] ? 3 : 2;
    for (let i = interval.start + 1; i < interval.end; i++) {
      map[i] = 3;
    }
  })
  map[newInterval.start] = map[newInterval.start] === 3
    ? 3 : map[newInterval.start] === 2
      ? 3 : 1;
  map[newInterval.end] = map[newInterval.end] === 3
    ? 3 : map[newInterval.end] === 1
      ? 3 : 2;
  for (let i = newInterval.start + 1; i < newInterval.end; i++) {
    if (map[i]) map[i] = 3;
    if (i > intervalsMax) break;
  }
  let interval = new Interval();;
  for (let i = 0; i <= max; i++) {
    if (!map[i]) continue;
    if (map[i] === 1) {
      interval.start = i
    } else if (map[i] === 2) {
      interval.end = i
      result.push(interval);
      interval = new Interval();
      if (i === max) {
        return result;
      }
    } else if (map[i] === 3) {
      if ((!map[i + 1] || map[i + 1] === 1) && map[i - 1] !== 3) {
        interval.start = interval.end = i;
        result.push(interval);
        interval = new Interval();
      }
    }
    if (i > intervalsMax) {
      interval.end = max
      result.push(interval);
      return result
    }
  }
  return result;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

let param = [[new Interval(1, 5), new Interval(10, 11)], new Interval(15, 2147483647)];
let result = insert(...param);
console.log(result);
