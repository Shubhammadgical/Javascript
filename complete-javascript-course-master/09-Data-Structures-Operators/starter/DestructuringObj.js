const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ name, mainIndex = 1, startIndex = 1 }) {
    console.log(
      `Order recived! ${this.mainMenu[mainIndex]} and ${this.starterMenu[startIndex]}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};
restaurant.orderDelivery({ name: 'shubham', mainIndex: 2, startIndex: 2 });
restaurant.orderDelivery({ name: 'shubham', startIndex: 1 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// spread operator
const arr = [1, 2, 3, 4];
const badArr = [7, 8, arr[0], arr[1], arr[2], arr[3]];
console.log(badArr);

const newArr = [7, 8, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
const starterMenuCopy = [...restaurant.starterMenu];
const Allmenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Allmenu);

//Iterables
const str = 'Jonas';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str);

const ingredients = [
  //   prompt(`Let's make pasta! Ingredient 1?`),
  //   prompt(`Ingredient 2?`),
  //   prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedIn: 1993, ...restaurant, founder: 'Akash' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Royal Food';
console.log(restaurantCopy.name);
console.log(restaurant.name);
