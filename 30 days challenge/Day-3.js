function getObject(inputObj) {
    const uniqueMarks = {};
  
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        const entry = inputObj[key];
        const mark = entry.marks;
  
        if (!(mark in uniqueMarks) || entry.age < uniqueMarks[mark].age) {
          uniqueMarks[mark] = entry;
        }
      }
    }
  
    // Convert the uniqueMarks object back to an array of entries with the original keys
    const result = {};
    let count = 0;
    for (const mark in uniqueMarks) {
      if (uniqueMarks.hasOwnProperty(mark)) {
        result[count] = uniqueMarks[mark];
        count++;
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(getObject({
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  }));
  
  console.log(getObject({
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
  }));
  