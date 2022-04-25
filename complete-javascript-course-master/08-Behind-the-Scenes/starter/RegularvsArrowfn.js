'use strict';
//var firstName = 'Om';

const jonas = {
  firstName: 'Jonas',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // const self = this;
    // const isOm = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);
    // };

    const isOm = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isOm();
  },
  great: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.great();
//console.log(this.firstName);
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 3, 5, 7, 5);

var addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
};
addArrow(2, 4, 7);
