numRows = 7;

let result = [];
for (let i = 0; i < numRows; i++) {
  let newArr = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      newArr.push(1);
    } else {
      let newValue = result[i - 1][j - 1] + result[i - 1][j];
      newArr.push(newValue);
    }
  }
  result.push(newArr);
}

console.log(result);
