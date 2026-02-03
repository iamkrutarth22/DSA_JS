const arr=[-8,-3,12,24,34,51,69,76,87,98]

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target===arr[i])
            return i;
    }
    return -1;
}

console.log(linearSearch(arr,76));


function binarySearch(arr,low,high,target){
    if(low>=high)
        return -1

    let mid = Math.floor((low+high)/2);
    
    if(target===arr[mid])
        return mid;

    if(target>arr[mid]){
        return binarySearch(arr,mid+1,high,target)
    }
    else{
        return binarySearch(arr,low,mid-1,target)
    }
}



console.log("binary search ",binarySearch(arr,0,arr.length,51))

function iterativeBinarySearch(arr,target){
    let low=0;
    let high = arr.length-1;

    while(low<high){
        let mid =Math.floor((low+high)/2)
        if(arr[mid]===target)
            return mid;

        if(target>arr[mid])
            low=mid+1;
        else
            high=mid-1;
    }

    return -1
}
console.log("iterative binary search ",iterativeBinarySearch(arr,51))
