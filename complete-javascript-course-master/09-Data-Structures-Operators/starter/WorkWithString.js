const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('D223'[1]);

console.log(airline.length);
console.log('Dw323'.length);

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('P'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle seat');
  else console.log('you got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('23E');

console.log(new String('jonas'));
console.log(typeof new String('Jonas'));

console.log(typeof new String('jonas').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnaS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// console.log(lowerEmail);
// const trimedEmail = lowerEmail.trim();
// console.log(trimedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

//replacing
const priceGB = '324,34&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Aim'));
console.log(plane1.includes('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

//Practice excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed');
  } else {
    console.log('Allowed');
  }
};
checkBaggage('I have a knife');
checkBaggage('I have a food');
checkBaggage('I have a gun');

console.log('a+very+good+string'.split('+'));
console.log('shubham chauresia'.split(' '));
const [firstName, LastName] = 'Shubham Chaurasia'.split(' ');

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const captializeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

captializeName('shubham chaurasia');
captializeName('Narendra soni');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Shubham'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str);
  const last = str.slice(-4);
  console.log(last);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard('12342141241221'));
console.log(maskCreditCard(232131231312312));

// Repeat
const message1 = 'Bad weather... All Departues Delayed... ';
console.log(message1.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'->'.repeat(n)}`);
};

planesInline(5);
planesInline(3);
planesInline(12);
