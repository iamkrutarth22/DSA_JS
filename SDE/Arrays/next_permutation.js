// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order)

let input = [3, 5, 1, 7];

// let visited = Array.from({length:input.length},()=>false);
// console.log(visited);
// let ans=[];
// let ds=[];

// function permutation(input,ds,visited,ans){

//     if(ds.length===input.length){ //base case

//         // console.log(ds)
//         ans.push([...ds]);
//         return
//     }

//     for(let i=0; i<input.length;i++){
//         if(!visited[i]){ 
//             visited[i]=true;
//             ds.push(input[i]);
//             permutation(input,ds,visited,ans)
//             ds.pop()
//             visited[i]=false;
//         }
//     }

// }

// permutation(input,ds,visited,ans)

// let result=ans.sort((a,b)=>{

//     if(a.join().replaceAll(',','')>b.join().replaceAll(',',''))
//         return 1;
//     else
//         return -1;
// })

// console.log(result)
// let index=0;

// for(let i=0;i<result.length;i++){
//     if(result[i].join().replaceAll(',')===input.join().replaceAll(',')){
//         index=i+1;
//         break;
//     }
// }
// console.log(result[index][2]);

function reverseIndex(i, j, array) {
  while (i < j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
}

function optimalApproach(nums) {
  //get breakpoint;
  let index = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    reverseIndex(0, nums.length - 1, nums);
    return;
  }

  //get next greater of index element
  for (let j = nums.length - 1; j > index; j--) {
    if (nums[index] < nums[j]) {
      let temp = nums[index];
      nums[index] = nums[j];
      nums[j] = temp;
      break;
    }
  }

  if (index + 1 != nums.length - 1) {
    reverseIndex(index + 1, nums.length - 1, nums);
  }
}

let nums = [2, 3, 1, 3, 3]; //[2,3,3,1,3]
optimalApproach(nums);
console.log(nums);
