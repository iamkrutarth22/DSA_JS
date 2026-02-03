const factorial = (n) => {
  let val = 1;
  for (let i = n; i > 0; i--) {
    val = i * val;
  }
  return val;
};
let n = 5;
console.log("factorial of " + n + " is " + factorial(n));

const prime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) return false;
  }

  return true;
};

let num = 3;
console.log(num, prime(num));

function isPowerOfTwo(num) {
  let value = num;
  while (value > 1) {
    if (value % 2 !== 0) return false;
    value = value / 2;
  }
  return true;
}

console.log("power of 2s");
// for (let i = 1; i <= 100; i++) {
//   console.log(i, isPowerOfTwo(i));
// }

var trailingZeroes = function(n) {
    let val = 1

  for (let i = n; i > 0; i--) {
    val = i * val;
  }
  console.log(val)
  let count=0;
  while(val>0){
    if(val%10===0)
      count++;
    else
        break;
    val=Math.floor(val/10)
  }
  return count
};

console.log("ans ",trailingZeroes(30))