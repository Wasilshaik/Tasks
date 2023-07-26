function zeroesToEnd(arr) {
    let nonZeroIndex = 0;
  
    // Move non-zero elements to the left side of the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex++] = arr[i];
      }
    }
  
    // Fill the remaining space with zeros
    while (nonZeroIndex < arr.length) {
      arr[nonZeroIndex++] = 0;
    }
  
    return arr;
  }
  
  // Test cases
  console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // ➞ [1, 2, 4, 5, 0, 0, 0]
  console.log(zeroesToEnd([0, 0, 2, 0, 5])); // ➞ [2, 5, 0, 0, 0]
  console.log(zeroesToEnd([4, 4, 5])); // ➞ [4, 4, 5]
  console.log(zeroesToEnd([0, 0])); // ➞ [0, 0]
  