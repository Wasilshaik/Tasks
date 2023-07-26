function lookAndSay(start, n) {
    // Helper function to apply the look-and-say process to a given number
    function lookAndSayProcess(number) {
      const digits = number.toString().split("");
      let result = "";
      let count = 1;
  
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] === digits[i + 1]) {
          count++;
        } else {
          result += count + digits[i];
          count = 1;
        }
      }
  
      return result;
    }
  
    const sequence = [start];
    for (let i = 1; i < n; i++) {
      const nextTerm = lookAndSayProcess(sequence[i - 1]);
      sequence.push(parseInt(nextTerm, 10));
    }
  
    return sequence;
  }
  
  // Test cases
  console.log(lookAndSay(1, 7)); // ➞ [1, 11, 21, 1211, 111221, 312211, 13112221]
  console.log(lookAndSay(123, 4)); // ➞ [123, 111213, 31121113, 1321123113]
  console.log(lookAndSay(70, 5)); // ➞ [70, 1710, 11171110, 31173110, 132117132110]
  