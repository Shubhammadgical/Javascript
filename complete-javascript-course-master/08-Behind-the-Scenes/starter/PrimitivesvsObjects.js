'use strict';

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend : ', friend);
console.log('Me', me);

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marrige : ', jessica);
console.log('After marrige : ', marriedJessica);

//Copying
const jessica2 = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 27,
  family: ['shivam', 'jyoti', 'shubham'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Ravi');
console.log('Before marrige : ', jessica2);
console.log('After marrige : ', jessicaCopy);
