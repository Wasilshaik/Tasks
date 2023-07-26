function findCommonLetters(word1, word2) {
    // Helper function to find the common letters between two words
    let commonLetters = "";
  
    for (let i = 0; i < word1.length; i++) {
      const index = word2.indexOf(word1[i]);
      if (index !== -1) {
        commonLetters += word1[i];
        word2 = word2.slice(0, index) + word2.slice(index + 1);
      }
    }
  
    return commonLetters;
  }
  
  function join(words) {
    let result = words[0];
    let minOverlap = Number.MAX_SAFE_INTEGER;
  
    for (let i = 1; i < words.length; i++) {
      const commonLetters = findCommonLetters(result, words[i]);
      result += words[i].slice(commonLetters.length);
      minOverlap = Math.min(minOverlap, commonLetters.length);
    }
  
    return [result, minOverlap];
  }
  
  // Test cases
  console.log(join(["oven", "envier", "erase", "serious"])); // ➞ ["ovenvieraserious", 2]
  console.log(join(["move", "over", "very"])); // ➞ ["movery", 3]
  console.log(join(["to", "ops", "psy", "syllable"])); // ➞ ["topsyllable", 1]
  console.log(join(["aaa", "bbb", "ccc", "ddd"])); // ➞ ["aaabbbcccddd", 0]
  