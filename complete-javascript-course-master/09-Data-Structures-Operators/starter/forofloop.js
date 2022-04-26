const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  orderDelivery({ name, mainIndex = 1, startIndex = 1 }) {
    console.log(
      `Order recived! ${this.mainMenu[mainIndex]} and ${this.starterMenu[startIndex]}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngreduents) {
    console.log(mainIngredient);
    console.log(otherIngreduents);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
console.log(restaurant);

//Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'not exit');
console.log(restaurant.order1?.(0, 1) ?? 'not exit');

//Array
//const users = [];
const users = [{ name: 'shubham', email: 'schaurasia337@gmail.com' }];
console.log(users[0]?.name ?? 'user is empty');

//Object keys. values and Entries
const properties = Object.keys(openingHours);
console.log(properties);

let openstr = `We are open on ${properties.length} days : `;
for (const day of properties) {
  openstr += `${day}, `;
}
console.log(openstr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

//key value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
