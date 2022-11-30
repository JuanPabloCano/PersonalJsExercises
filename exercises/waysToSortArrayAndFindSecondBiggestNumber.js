const arr = [
  1, 4, 7, 2, 5, 8, 2, 67, 8, 12, 1, 1, 1, 3, 4, 5, 5, 6, 87, 6, 5, 89, 32, 12,
];

const names = ["juan", "alejandra", "catalina", "maria", "william"];

arr.sort((a, b) => a - b).filter((v, i) => arr.indexOf(v) === i);

const unique = arr.filter((num, index, arr) => {
  return index === arr.indexOf(num);
});

const newArr = [...new Set(arr)];

console.log("Second biggest number:", newArr.at(-2));
console.log(arr);
console.log(newArr);
console.log(unique);

const ascending = names.sort();

console.log(ascending);

const descending = names.sort((name1, name2) => sortNames(name1, name2));

console.log(descending);

function sortNames(name1, name2) {
  if (name1 > name2) return -1;
  else if (name1 < name2) return 1;
  return 0;
}
