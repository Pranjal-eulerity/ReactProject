function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          console.log("Duplicate found:", arr[i]);
        }
      }
    }
  }

  findDuplicates([1, 2, 3, 2, 4, 5, 1]);