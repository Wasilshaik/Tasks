function numbersThenCharacters(arr) {
  function customSort(item) {
    const numbers = item.filter(x => typeof x === 'number').sort((a, b) => a - b);
    const characters = item.filter(x => typeof x === 'string').sort();
    return numbers.concat(characters);
  }

  return arr.map(subArr => customSort(subArr));
}

// Test cases
console.log(numbersThenCharacters([
  [11, 12, 24, 23, "a", "b"],
  [56, "c", 45], [67, "d"],
  ["f", "e", 78]
]));

console.log(numbersThenCharacters([
  [11, 26, 45.4, "f", "a", "b"],
  [0], [1.5, "d", "X", 35, "s"],
  ["f", "e", 58],
  ["p", "Y", "Z"],
  [98, 72]
]));
function numbersThenCharacters(arr) {
    function customSort(item) {
      const numbers = item.filter(x => typeof x === 'number').sort((a, b) => a - b);
      const characters = item.filter(x => typeof x === 'string').sort();
      return numbers.concat(characters);
    }
  
    return arr.map(subArr => customSort(subArr));
  }
  
  // Test cases
  console.log(numbersThenCharacters([
    [11, 12, 24, 23, "a", "b"],
    [56, "c", 45], [67, "d"],
    ["f", "e", 78]
  ]));
  
  console.log(numbersThenCharacters([
    [11, 26, 45.4, "f", "a", "b"],
    [0], [1.5, "d", "X", 35, "s"],
    ["f", "e", 58],
    ["p", "Y", "Z"],
    [98, 72]
  ]));
  