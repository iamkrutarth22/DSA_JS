// const arr = [1,2,3,'vishwas']

// arr.push(5)
// arr.unshift(7)//adds at front of list
// arr.pop()//removes last
// arr.shift()//removes first

// const p=arr.map((item)=>(
//     item = item +1
// ))

//  console.log(p)

//  arr.forEach((item)=>item=item+7)
//  console.log(arr)

//  data =[1,3,4,34,24,63]

//  data.splice(2,5,99,42,5);
//  console.log(data)

//  const obj={
//     name:"krutarth",
//     age:23,
//     email:"iamkrutarth1234@gmail.com",
//     phoneno:9975538650,
//     addr:"siolim goa",
//     isAdult:function(){
//         if(this.age>=18)
//             return true;
//         else 
//             return false;
//     }
//  }

//  console.log(obj)
// console.log(Object.keys(obj))//creates array of keys 
// console.log(Object.values(obj))//creates array of values.
// console.log(Object.entries(obj))// create array with items as [key,value] 


// //SET
// const set=new Set([1,2,4])
// set.add(4)//discared duplicate values
// console.log(set.has(4))//to find if a value exists
// set.delete(4)
// set.size

// console.log(set)
// for(item of set)
//     console.log(item)

// //map

// const map =new Map([[1,2],[3,4],[4,5]])
// map.set(45,54)
// console.log(map)


let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3


var merge = function(nums1, m, nums2, n) {
    // let arr=[]

    // let i=0;
    // let j=0;

    // while(i<m && j<n){
    //     if(nums1[i]<nums2[j]){
    //          arr.push(nums1[i])
    //          i++;
    //     }
    //     else{
    //         arr.push(nums2[j])
    //         j++;
    //     }
    // }
    // if(i<m){
    //     arr=[...arr,...nums1.slice(i,m)]
    // }

    // if(j<n){
    //     arr=[...arr,...nums2.slice(j,n)]
    // }

    // console.log(arr)
    // nums1=[...arr];
    // console.log("zala mare",nums1)

     let k=m-1;
    let l=n-1;

    for (let i=(m+n-1);i>=0 && k>=0 && l>=0;i--){
        if(nums1[k]>=nums2[l]){
            nums1[i]=nums1[k];
            k--;
        }else{
            nums1[i]=nums2[l];
            l--;
        }
    }
    
   while(l>=0){
    nums1[l]=nums2[l];
    l--;
   }

};


merge(nums1,m,nums2,n)

console.log(nums1)