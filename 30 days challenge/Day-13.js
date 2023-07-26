function frequencySort(str) {
    const charFrequency = {};
    for (const char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    const sortedChars = Object.keys(charFrequency).sort((a, b) => {
      // Sort by frequency (descending)
      const freqDiff = charFrequency[b] - charFrequency[a];
      if (freqDiff !== 0) return freqDiff;
  
      // Sort by case (uppercase before lowercase)
      const caseDiff = a.toLowerCase().localeCompare(b.toLowerCase());
      if (caseDiff !== 0) return caseDiff;
  
      // Sort alphabetically
      return a.localeCompare(b);
    });
  
    let result = "";
    for (const char of sortedChars) {
      const count = charFrequency[char];
      result += char.repeat(count);
    }
  
    return result;
  }
  
  // Test cases
  console.log(frequencySort("tree")); // ➞ "eert"
  console.log(frequencySort("cccaaa")); // ➞ "aaaccc"
  console.log(frequencySort("Aabb")); // ➞ "bbAa"
  