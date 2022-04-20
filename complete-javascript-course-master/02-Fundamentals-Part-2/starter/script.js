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

// 38th : Coding Challenge #1

function calcAvg(score1, score2, score3){
    let avg = (score1 + score2 + score3) / 3 ;
    return avg;
}
console.log(calcAvg(3,4,5));

let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win ${avgDolphins} Vs.${avgKoalas}`)
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win ${avgKoalas} Vs. ${avgDolphins}`)
    }else{
        console.log("No one wins");
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(400,150);

scoreDolphins = calcAvg(85, 54, 41);
scoreKoalas = calcAvg(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// 39th : Introduction to Arrays
let friends = ["Shubham", "Om", "Rohit"];
console.log(friends);

let years2 = new Array(1997, 1998, 1999);
console.log(years2);
console.log(years2[2]);
console.log(years2.length);

friends[2]="Narendra";
console.log(friends);

let firstName1= 'Jhon';
const jhon = [firstName1, "shubham", 30-18, "teacher", friends];
console.log(jhon);

const calAge4 = function(birthYear){
    return 2037 -birthYear;
}
const years3 = [1990,1798, 2021, 2018];

const ages = [calAge4(years3[0]), calAge4(years3[1]),calAge4(years3[years3.length-1])]
console.log(ages);

// 40th : Basic Array Operations (Methods)
let friends1 = ["Shubham", "Om", "Rohit"];
friends1.push("Jack");
console.log(friends1);
console.log(friends1.length);
friends1.unshift("Jaky");
console.log(friends1);

friends1.pop();
console.log(friends1);

friends1.shift();
console.log(friends1);

console.log(friends1.indexOf('Om'));
console.log(friends1.includes('Om'));

// 41th : Coding Challeng #2
const calcTips = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills= [125, 555, 44];
const tips = [calcTips(bills[0]),calcTips(bills[1]),calcTips(bills[2])];
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2] ];
console.log(bills, tips, totals);

// 42th : Introduction to Objects
const shubham= {
    firstName: "Shubham",
    lastName: "Chaurasia",
    age: 2022 - 1997,
    job: "Software Engg.",
    friends: ["Om", "Rhohit", "Narendra"]
};
console.log(shubham);

// 43th : Dot vs. Bracket Notation
console.log(shubham.firstName);
console.log(shubham['lastName']);

const nameKey = "Name";
console.log(shubham['first'+nameKey]);
console.log(shubham['last'+nameKey]);

//console.log(shubham.'first' + nameKey);
const interestedIn = prompt("what do you want to know about shubham? Choose between firstName, lastName, job, age and friends");
if(shubham[interestedIn]){
console.log(shubham[interestedIn]);
}else{
    console.log("wrong request!  Choose between firstName, lastName, job, age and friends");
}

shubham.joblocation = "Noida";
shubham['salary'] = 21500;
console.log(shubham);

console.log(`${shubham.firstName} has ${shubham.friends.length} feiends, and his best friend is called ${shubham.friends[0]}`)

// 44th : Object Methods
const jonas= {
    firstName: "Shubham",
    lastName: "Chaurasia",
    birthYear: 1997,
    job: "Software Engg.",
    friends: ["Om", "Rhohit", "Narendra"],
    hasDriversLicense: false,
    // calcAge: function (birthYear){
    //     return 2022 - birthYear;
    // }
    // calcAge: function (){
    //     return 2022 - this.birthYear;
    // }
    calcAge: function (){
        this.age =2022 - this.birthYear;
        return this.age;
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas['calcAge'](1997));

console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license`)

// 45th : Coding Challenge #3
let Mark ={
    fullName: "Mark singh",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}
let John ={
    fullName: "John singh",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}
Mark.calcBMI();
John.calcBMI();

console.log(Mark.bmi, John.bmi);
if(Mark.bmi > John.bmi){
    console.log(`${Mark.fullName}'s BMI ${Mark.bmi} is heigher than ${John.fullName}'s BMI ${John.bmi} `);
}else{
    console.log(`${John.fullName}'s BMI ${John.bmi} is heigher than ${Mark.fullName}'s BMI ${Mark.bmi} `);
}









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



// 46th : Iteration: The for Loop
