'use strict';
// 31th : Intro
// 32th : Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive");

//const private = 123;

// 33th : Functions
function logger(){
    console.log("hello");
}
logger();

function fruitProcessor(apples, oranges){
    const juice = `${apples} apples and ${oranges} oranges`;
    return juice;
}
const juice = fruitProcessor(3,5);
console.log(juice);
console.log(fruitProcessor(3,5));

// 34th : Function Declarations vs. Expressions
            //function declarations
function calAge(birthYear){
    return 2022 - birthYear;
}
const age4 = calAge(1997);
            //function Expression
const calAge1 = function (birthYear){
    return 2022 - birthYear;
}
const age5 = calAge1(1997);
console.log(age4, age5);

// 35th : Arrow Function

const calAge2 = birthYear => 2022 - birthYear;
console.log(calAge2(1997));

const years=(birthYear, firstName)=>{
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}
console.log(years(1997,"shubham"));

// 36th : Functions Calling Other Functions
const cutPieces = function (fruit){
    return fruit * 4;
}

function fruitProcessor1(apples, oranges){
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);
    const juice = `${apples} apples ${applePieces} pieces and ${oranges} oranges ${orangesPieces} pieces`;
    return juice;
}
console.log(fruitProcessor1(2 ,3));

// 37th : Reviewing Functions
const calAge3 = function(birthYear){
    return 2037 - birthYear;
}

const years1= function (birthYear, firstName){
    const age = calAge3(birthYear);
    const retirement = 65 - age;
    if(retirement>0){
    return `${firstName} retires in ${retirement}`;
    }else{
        return -1;
    }
}
console.log(years1(1970,"shubham"));






// Functions
function describeCountry(country, population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
console.log(describeCountry("Finland",10,"Helsinki"));

const finland = describeCountry("Finland",10,"Helsinki");
const india = describeCountry("India",8,"Delhi");
const america = describeCountry("America",5,"New York");

console.log(finland,india,america);

// Function Declarations vs. Expressions
                //1st
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percPortugal = percentageOfWorld1(10);
const percChina = percentageOfWorld1(1441);
const percUSA = percentageOfWorld1(332);
console.log(percPortugal, percChina, percUSA);

                //2nd
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};
const percPortugal1 = percentageOfWorld2(10);
const percChina1 = percentageOfWorld2(1441);
const percUSA1 = percentageOfWorld2(332);
console.log(percPortugal1, percChina1, percUSA1);

// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900)
 * 100;
 const percPortugal3 = percentageOfWorld3(10);
 const percChina3 = percentageOfWorld3(1441);
 const percUSA3 = percentageOfWorld3(332);
 console.log(percPortugal3, percChina3, percUSA3);

 // Functions Calling Other Functions
 const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
    };
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
   
// Introduction to Arrays
const populations4 = [10, 1441, 332, 83];
 console.log(populations4.length === 4);
 const percentages = [
 percentageOfWorld1(populations4[0]),
 percentageOfWorld1(populations4[1]),
 percentageOfWorld1(populations4[2]),
 percentageOfWorld1(populations4[3])
 ];
 console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

// Introduction to Objects
const myCountry1 = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
};

// Dot vs. Bracket Notation
console.log(
    `${myCountry1.country} has ${myCountry1.population} million 
    ${myCountry1.language}-speaking people, 
    ${myCountry1.neighbours.length} neighbouring countries and 
    a capital called ${myCountry1.capital}.`
);

myCountry1.population += 2;
console.log(myCountry1.population);

// myCountry['population'] -= 2;
// console.log(myCountry1.population);

// Object Methods
const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function () {
        console.log(
        `${this.country} has ${this.population} million 
        ${this.language}-speaking people, 
        ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
        false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++)
 console.log(`Voter number ${voter} is currently voting`);


// Looping Arrays, Breaking and Continuing
const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
const perc = percentageOfWorld1(populations[i]);
percentages2.push(perc);
}
console.log(percentages2);

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
for (let y = 0; y < listOfNeighbours[i].length; y++)
console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);
