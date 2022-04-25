'use strict';
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1997);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(1997);

const jons = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
jons.calcAge();

const mathlda = {
  year: 1999,
};
mathlda.calcAge = jons.calcAge;
mathlda.calcAge();

const f = jons.calcAge;
//f();
