//APPROACH
//1. use set
//2. 2 pointer , 1st pointer iterates through entire array ,
//2nd pointer only moves on new value of other pointer, thus only keeping unique elements at start


var removeDuplicates = function(nums) {
    let i=0 ;
    let j=0;
    while(j<nums.length){
        if(nums[i]!==nums[j])
        {
            let temp=nums[j];
            nums[j]=nums[i+1];
            nums[i+1]=temp;
            i++;
        }
        j++;
    }
    return i+1;
};