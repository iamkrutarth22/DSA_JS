let  nums = [2, 3, 5, -2, 7, -4]  

function bruteForce(nums){
    let max=-(Number.MAX_VALUE);
    let startIndex=-1;
    let endIndex=-1
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=i;j<nums.length;j++){
            sum=sum+nums[j];

            if(sum>max){
                startIndex=i;
                endIndex=j;
                max=sum;
            }
        }
    }

    return { max,startIndex,endIndex}
}

console.log(bruteForce(nums))

function kadane(nums){
    let max=-(Number.MAX_VALUE);
    let sum=0;
    // if at any point sum goes in negative then set the sum back to zero , 
    //even if all values are -ve it will select the hightest single -ve value
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        if(sum>max)
            max=sum;
        if(sum<0)
            sum=0;
    }

    return max;
}

console.log("kadane = ",kadane(nums))