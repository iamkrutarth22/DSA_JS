function fibo(n){
    if(n===0)
        return 0;

    if(n===1)
        return 1;

    return fibo(n-1) + fibo(n-2)
    
}


console.log(fibo(5))


function fact(n){
    if(n===1)
        return 1
    return n*fact(n-1)
}


console.log("5 factorial "+fact(5))