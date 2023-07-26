function bandNamesSort(bandNames) {
    // Helper function to remove articles from the beginning of a name
    function removeArticle(name) {
      const articles = ["The", "A", "An"];
      for (const article of articles) {
        if (name.startsWith(article + " ")) {
          return name.slice(article.length + 1); // Remove the article and the space
        }
      }
      return name;
    }
  
    // Custom sorting function
    function compareNames(a, b) {
      const nameA = removeArticle(a);
      const nameB = removeArticle(b);
      return nameA.localeCompare(nameB);
    }
  
    return bandNames.sort(compareNames);
  }
  
  // Test cases
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  