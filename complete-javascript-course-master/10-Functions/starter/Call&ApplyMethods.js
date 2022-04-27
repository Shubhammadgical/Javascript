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
