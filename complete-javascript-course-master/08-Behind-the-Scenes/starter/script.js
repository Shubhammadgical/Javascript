'use strict';

function calcAge(birthYear) {
  //console.log(age);
  const age = 2022 - birthYear;

  function printAge() {
    //console.log(output);
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      //console.log(young);
      var young = 'yes';
      const firstName = 'Ram';
      const str = `hello ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'New Output';
    }
    //console.log(str);
    console.log(young);
    //add(2, 4); //work when we don't use strict mode
    console.log(output);
  }
  printAge();
}
const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge();
