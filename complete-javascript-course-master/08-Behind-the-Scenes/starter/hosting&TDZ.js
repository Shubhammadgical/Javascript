// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'shubham';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 4));
//console.log(addExpr(2, 4));
//console.log(addArrow(2, 4));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
