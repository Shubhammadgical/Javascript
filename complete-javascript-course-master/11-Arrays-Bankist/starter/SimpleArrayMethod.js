let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr);

//SPLICE : change in original also
arr.splice(-1);
console.log(arr);
arr.splice(1, 1);
console.log(arr);

//REVERSE : change in original also
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);

//JOIN
console.log(letters.join(' - '));

//143 : The New at Method
const arr3 = [23, 4, 32, 5];
console.log(arr3[1]);
console.log(arr3.at(0));

//getting last element in the array
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('shubham'.at(0));
