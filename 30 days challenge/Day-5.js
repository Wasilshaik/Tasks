function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    // Helper function to calculate the sum of adjacent cells for a given cell
    function getSpotlightSum(row, col) {
      let sum = 0;
  
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i >= 0 && i < rows && j >= 0 && j < cols) {
            sum += grid[i][j];
          }
        }
      }
  
      return sum;
    }
  
    // Create a new grid to store the spotlight sums
    const spotlightGrid = [];
  
    for (let i = 0; i < rows; i++) {
      spotlightGrid.push([]);
      for (let j = 0; j < cols; j++) {
        spotlightGrid[i].push(getSpotlightSum(i, j));
      }
    }
  
    return spotlightGrid;
  }
  
  // Test cases
  console.log(spotlightMap([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
  
  console.log(spotlightMap([
    [2, 6, 1, 3, 7],
    [8, 5, 9, 4, 0]
  ]));
  
  console.log(spotlightMap([[3]]));
  