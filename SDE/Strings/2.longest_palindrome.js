// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

let input = "cbbd";
let ans = "";

for (let i = 0; i < input.length; i++) {
  //odd length palindrome check;
  let j = i;
  let k = i;
  while (j >= 0 && k < input.length) {
    if (input[j] === input[k]) {
      j--;
      k++;
    } else {
      break;
    }
  }
  let palindrome = input.slice(j, k + 1);
  if (palindrome.length >= ans.length) ans = palindrome;

  //even length palindrome check;
  j = i;
  k = i;
  while (j >= 0 && k < input.length) {
    if (input[j] === input[k+1]) {
      j--;
      k++;
    } else {
      break;
    }
  }
  palindrome = input.slice(j, k +1);
  if (palindrome.length >= ans.length) ans = palindrome;

}
console.log(ans)

// console.log('SWS'.reverse())
