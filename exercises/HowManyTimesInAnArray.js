const myArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 8, 7, 6, 5, 4, 3, 23, 1, 3, 4, 5, 342, 45,
];

const myObj = {};

//myArray.forEach((number) => myObj[number] ? (myObj[number] += 1) : (myObj[number] = 1));

myArray.forEach((number) => (myObj[number] = ++myObj[number] || 1));

console.log(myObj);

// var map = myArray.reduce((obj, b) => {
//   obj[b] = ++obj[b] || 1;
//   return obj;
// }, {});

// console.log(map);

// const count = (arr, value) => arr.filter((val) => val === value).length;
// console.log(count(myArray, 1));
