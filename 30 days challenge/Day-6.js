function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
  
    // Helper function to check if a row has n contiguous vacant seats
    function hasContiguousVacantSeats(row) {
      let consecutiveVacantSeats = 0;
  
      for (let i = 0; i < cols; i++) {
        if (seatingArrangement[row][i] === 0) {
          consecutiveVacantSeats++;
          if (consecutiveVacantSeats === n) {
            return true;
          }
        } else {
          consecutiveVacantSeats = 0;
        }
      }
  
      return false;
    }
  
    let availableOptions = 0;
  
    // Iterate through each row and find available seating options
    for (let i = 0; i < rows; i++) {
      if (hasContiguousVacantSeats(i)) {
        availableOptions++;
      }
    }
  
    return availableOptions;
  }
  
  // Test cases
  console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ], 2)); // ➞ 3
  
  console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ], 4)); // ➞ 2
  