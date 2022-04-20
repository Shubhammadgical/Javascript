// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// 59th : Using Google, StackOverflow and MDN
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitude([4, 9, "error", 2, 3]));

const calcTempAmplitudenew = function (t1, t2) {
  let temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitudenew([4, 9, "error", 2, 3], [-2]));

// 61th : Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //value: Number(prompt("Degrees celsius: ")),
    value: 10,
  };
  const Kelvin = measurement.value + 273;
  return Kelvin;
};
console.log(measureKelvin());

// 62th : Coding Challenge #1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
let str = "";
const printForcast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days... `;
  }
  return "..." + str;
};
console.log(printForcast(data1));
