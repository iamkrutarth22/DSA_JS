nums = [1, 0, 2, 1, 0]


function sort(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    }
    
}

// sort(nums)
console.log(nums)


function countAll(nums){
    let zeros=0;
    let ones=0;
    let twos=0;

    for(let i =0;i<nums.length;i++){
        if(nums[i]===0)
            zeros++;
        else if(nums[i]===1)
            ones++;
        else
            twos++;
    }

    for(let i=0;i<nums.length;i++){
        if(zeros>0){
            nums[i]=0;
            zeros--;
        }else if(ones >0){
            nums[i]=1;
            ones--;
        }else {
            nums[i]=2;
            twos--;
        }
    }

    return nums;
}

// countAll(nums)
// console.log(nums)

function swap(i,j,arr){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function dutchFlag(nums){
    let i=0;
    let j=nums.length-1;
    let mid=0;

    while(mid<j){
        if(nums[mid]===0){
           swap(i,mid,nums)
           i++;
           mid++; 
        }
        else if(nums[mid]===1){
            mid++;
        }
        else {
            swap(mid,j,nums);
            j--;
        }
        
    }
}
dutchFlag(nums)
console.log(nums)