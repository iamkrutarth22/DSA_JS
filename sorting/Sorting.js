function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    console.log(array);
  }
  return array;
}

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j > 0 && array[j] < array[j - 1]; j--) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    }
    console.log(array);
  }
  return array;
}

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[(arr.length - 1)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left),pivot,...quickSort(right)]
}

const array = [4, 2, 6, 5, 1, 3];
console.log("hii ",Number([9,9,9].toString().replaceAll(',',''))+1)

console.log("quick Sort:", quickSort(array));

// console.log("bubble Sort:", bubbleSort(array));

// // console.log("selection sort", selectionSort(array));
// console.log("Insertion sort", insertionSort(array));


function plusOne(array){
  for(let i=array.length-1;i>=0;i--){
    if(array[i]!=9){
      array[i]=array[i]+1;
      return array;
    }
    else{
      // if(array.length-1===i){
      //   array.push(0);
      // }
      if(i===0){
        array[i]=1;
        array.push(0)
        return array
      }
        array[i]=0;

    }
  }
  return array
}

console.log("plus one",plusOne([1,8,9]))