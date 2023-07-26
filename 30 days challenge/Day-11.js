function missingNum(arr) {
    const totalSum = 55; // Sum of numbers from 1 to 10 (1 + 2 + ... + 10)
    const arraySum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - arraySum;
  }
  
  // Test cases
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
  console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7
  