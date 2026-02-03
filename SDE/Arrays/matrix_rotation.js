let matrix=[[1,2,3],[4,5,6],[7,8,9]];

let dummy=Array.from({length:matrix.length},()=>
    Array.from({length:matrix.length},()=>0)
);

for(let i=0;i< matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        dummy[i][j]=matrix[(matrix.length-1)-j][i];
    }
}

console.log(dummy);