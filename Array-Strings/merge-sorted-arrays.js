// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

//APPROACH
//1.basic aproach is creating a 3rd array and pushing elements one after the other
var merge1 = function (nums1, m, nums2, n) {
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  if (i < m) {
    arr = [...arr, ...nums1.slice(i, m)];
  }

  if (j < n) {
    arr = [...arr, ...nums2.slice(j, n)];
  }

  nums1 = [...arr];
};

var merge = function (nums1, m, nums2, n) {
  let k = m - 1;
  let l = n - 1;

  for (let i = m + n - 1; i >= 0 && k >= 0 && l >= 0; i--) {
    if (nums1[k] >= nums2[l]) {
      nums1[i] = nums1[k];
      k--;
    } else {
      nums1[i] = nums2[l];
      l--;
    }
  }

  while (l >= 0) {
    nums1[l] = nums2[l];
    l--;
  }
};

