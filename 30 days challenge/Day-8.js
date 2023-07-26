function findPath(tickets) {
    const graph = {};
  
    // Build the graph from the list of tickets
    for (const [from, to] of tickets) {
      if (!graph[from]) {
        graph[from] = [];
      }
      graph[from].push(to);
    }
  
    // Sort the destinations in lexical order
    for (const airport in graph) {
      graph[airport].sort();
    }
  
    const itinerary = [];
  
    // Helper function to perform DFS
    function dfs(airport) {
      while (graph[airport] && graph[airport].length > 0) {
        const nextAirport = graph[airport].shift();
        dfs(nextAirport);
      }
      itinerary.unshift(airport);
    }
  
    dfs('A'); // We always start from airport A
  
    return itinerary;
  }
  
  // Test cases
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); // ➞ ["A", "C", "F", "I", "Z"]
  console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]])); // ➞ ["A","B","A","C","B","C"]
  console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]])); // ➞ ["A", "D", "A", "R", "Y", "L"]
  