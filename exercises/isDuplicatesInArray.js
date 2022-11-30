const hasDuplicates = (array) => {
  const result = new Set(array).size < array.length;
  return `Result is ${result}`;
};

const arr = [1, 2, 3, 4, 2, 1, 4, 3];
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(hasDuplicates(arr));
console.log(hasDuplicates(arr1));
