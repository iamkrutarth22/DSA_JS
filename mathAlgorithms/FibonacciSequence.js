
const fibo=(n)=>{
    const fiboArr=[0,1];
    for(let i=2;i<n;i++){
        fiboArr.push(fiboArr[i-1]+fiboArr[i-2])
    }
    return fiboArr
}

console.log(fibo(20))