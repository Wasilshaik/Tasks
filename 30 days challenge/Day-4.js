function isSimilar(obj1, obj2) {
    // Helper function to check if two values are of the same type
    function sameType(val1, val2) {
      return typeof val1 === typeof val2;
    }
  
    if (!sameType(obj1, obj2)) {
      return false;
    }
  
    if (typeof obj1 !== "object" || obj1 === null) {
      // For primitive values, compare directly
      return obj1 === obj2;
    }
  
    if (Array.isArray(obj1)) {
      // For arrays, compare their elements recursively
      if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
        return false;
      }
  
      for (let i = 0; i < obj1.length; i++) {
        if (!isSimilar(obj1[i], obj2[i])) {
          return false;
        }
      }
  
      return true;
    }
  
    // For objects (including maps), compare their keys and values recursively
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (!obj2.hasOwnProperty(key) || !isSimilar(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test cases
  console.log(isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]])); // ➞ true
  
  console.log(isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]})); // ➞ false
  
  console.log(isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false})); // ➞ false
  
  console.log(isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}])); // ➞ true
  