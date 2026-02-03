//optimal

let intervals = [
  [4, 7],
  [1, 4],
];
let result = [];

intervals.sort((a, b) => {
  if (a[0] < b[0]) return -1;
  else return 1;
});

let start = intervals[0][0];
let end = intervals[0][1];

for (let i = 1; i < intervals.length; i++) {
  if (intervals[i][0] <= end) {
    if (intervals[i][1] >= end) {
      end = intervals[i][1];
    }
  } else {
    result.push([start, end]);
    start = intervals[i][0];
    end = intervals[i][1];
  }
}
result.push([start, end]);
console.log(result);
