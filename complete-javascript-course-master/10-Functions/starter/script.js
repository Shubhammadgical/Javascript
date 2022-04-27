'use strict';

const bookings = [];

const createBooking = function (
  flightNum = 1,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('GHJ123');
createBooking('GHJ123', 2, 800);
createBooking('GHJ123', 2);
createBooking('GHJ123', undefined, 100);

const flight = 'LH234';
const passenger = {
  name: 'Shubham Chaurasia',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'DF123';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(passenger);
checkIn(flight, passenger);
console.log(passenger);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...Other] = str.split(' ');
  return [first.toUpperCase(), ...Other].join(' ');
};

//Higher-order fn
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', UpperFirstWord);
transformer('JavaScript is the best!', oneWord);

const hello = function () {
  console.log('Hello');
};
document.body.addEventListener('click', hello);
['sdfs', 'sdsd', 'Safsad'].forEach(hello);

//132
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Shubham');
greeterHey('Chaurasia');
greet('Hello')('Shubham');

const greet1 = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey1 = greet1('Hey');
greeterHey1('Shubham');
greeterHey1('Chaurasia');
greet1('Hello')('Shubham');
