function countChocolates(totalMoneyStr, chocolateCostStr) {
    // Helper function to extract the numeric value from a string
    function extractNumericValue(str) {
      const numericValue = parseInt(str.match(/-?\d+/));
      return isNaN(numericValue) ? null : numericValue;
    }
  
    // Parse total money and chocolate cost from input strings
    const totalMoney = extractNumericValue(totalMoneyStr);
    const chocolateCost = extractNumericValue(chocolateCostStr);
  
    // Check for invalid inputs
    if (totalMoney === null || chocolateCost === null || totalMoney < 0 || chocolateCost <= 0) {
      return "Invalid Input";
    }
  
    let chocolatesEaten = Math.floor(totalMoney / chocolateCost); // Initial chocolates Ashi can buy
  
    let wrappers = chocolatesEaten; // Wrappers from initial chocolates
    while (wrappers >= 3) {
      const additionalChocolates = Math.floor(wrappers / 3); // Additional chocolates from wrappers
      chocolatesEaten += additionalChocolates;
      wrappers = wrappers % 3 + additionalChocolates; // Remaining wrappers plus additional chocolates
    }
  
    return chocolatesEaten;
  }
  
  // Test cases
  console.log(countChocolates("4$", "1$")); // ➞ 5
  console.log(countChocolates("55 $", "5$")); // ➞ 16
  console.log(countChocolates("I have 68$", "2$")); // ➞ 50
  console.log(countChocolates("I got -68$ from my mom ", "2$")); // ➞ "Invalid Input"
  