const RoyalAirLines = {
  airline: 'Royal',
  iataCode: 'JK',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
RoyalAirLines.book(234, 'Shubham ');
RoyalAirLines.book(456, 'Chaurasia');
console.log(RoyalAirLines);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'DS',
  bookings: [],
};

const book = RoyalAirLines.book;
//book(23, 'Om'); // not work

//call method
book.call(eurowings, 23, 'om');
console.log(eurowings);

//apply method
const flightData = [234, 'Rohit'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookRA = book.bind(RoyalAirLines);
bookEW(23, 'Shubham');
bookRA(11, 'chaurasia');

const bookRAL = book.bind(RoyalAirLines, 11);
bookRAL('Ram');
bookRAL('Syam');

//With Event Listeners
RoyalAirLines.planes = 300;
RoyalAirLines.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', RoyalAirLines.buyPlane.bind(RoyalAirLines));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(50));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(50));
