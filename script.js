// Task 2:
function calculateSumAndAverage(arr) {
  let newArr = [];
  const total =  arr.reduce((acc, curr) => acc + curr);
  const average = total / arr.length;
  return `Total => ${total}, Average => ${average}`;
}

// Example usage:
console.log(calculateSumAndAverage([10, 20, 30, 40]));

/* ======================================================== */

// Task 3:
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
console.log(removeDuplicates(["Gaza", "Sky", "Sky", "Geeks"]));