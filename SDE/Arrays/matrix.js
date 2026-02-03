matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

let m = matrix.length;
let n = matrix[0].length;

//Brute Force Approach
for( let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(matrix[i][j] === 0){

            for(let k=0;k<m;k++){
                if(matrix[k][j]!=0)
                    matrix[k][j]=-1;
            }

            for(let l=0;l<n;l++){
                if(matrix[i][l]!=0)
                    matrix[i][l]=-1;
            }
        }
    }
}

for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(matrix[i][j]===-1){
            matrix[i][j]=0;
        }
    }
}

//better Approach

let row= new Set([]);
let col= new Set([]);

for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(matrix[i][j]===0){
            row.add(i);
            col.add(j);
        }
    }
}

row.forEach((value)=>{
    for(let i=0;i<n;i++){
        matrix[value][i]=0;
    }
})

col.forEach((value)=>{
    for(let i=0;i<m;i++){
        matrix[i][value]=0;
    }
})

//optimal Approach

// let firstRowZero = false;
// let firstColZero = false;

// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < n; j++) {
//     if (matrix[i][j] === 0) {
//       if (i === 0) firstRowZero = true;
//       else if (j === 0) firstColZero = true;
//       else {
//         matrix[i][0] = 0;
//         matrix[0][j] = 0;
//       }
//     }
//   }
// }

// for(let i=0;i<m;i++){}

console.log(matrix);
