// 9th : Linking a javascript file
// let js = "amazing";
// if(js === "amazing") alert("Javascript is FUN");
// console.log(10 + 5 - 2);

// 10th : values and variables
let firstName = "shubham";
console.log(firstName);

// 12th : Data types
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "hello");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// 13th : let, const and var
let age=23;
console.log(age);
age=22;
console.log(age);

const birthYear = 1997;
//birthYear = 1998;
// const job;

lastName = "Chaurasia";
console.log(lastName);

// 14th : Basic Operators

        //math operators
const now = 2034;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName_ = "Jonas";
const lastName_ = "Sched";
console.log(firstName_ + " " + lastName_);

        //assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

        //comparison operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);
console.log(ageJonas <= 18);
console.log(ageJonas < ageSarah);

// 15th : Operator Precedence
let a, y, z;
a = 25 - 10 - 5;
console.log(a);
y = z = 25 - 10 - 5;
console.log(y, z);

console.log(ageJonas, ageSarah);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);


// 16th : Coding Challenge #1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

const markBMI = markWeight / (markHeight ** 2);
const jhonBMI = johnWeight / (johnHeight * johnHeight);
const markHighterBMI = markBMI > jhonBMI;

console.log(markBMI, jhonBMI , markHighterBMI);

// 17th Strings and Template Literals
const firstName1 = "shubham";
const job = "Software Engg.";
const birthYear1 = 1997;
const year1 = 2022;

const shubham = "I'm " + firstName1 + ", a " + (year1 - birthYear1) + " years old " + job + "!";
console.log(shubham);

const shubh = `I'm ${firstName1}, a ${year1 - birthYear1} years old ${job}!`;
console.log(shubh);

console.log('hello \n\
my name is\n\
shubham');

console.log(`hello
my name is
shubham`);

// 18th : Taking Decisions: if / else Statements
const age1= 17;
const isOldEnough = age1 >= 18;
if(isOldEnough){
    console.log("shubham can start driving")
}else{
    console.log("shubham can't start driving")
}

const birthYear2 = 2012;
let century;
if(birthYear2 <=2000){
    century=20;
}else{
    century=21;
}
console.log(century);

// 19th : Coding challenge #2
console.log(markBMI, jhonBMI);
if(markBMI > jhonBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${jhonBMI}!`);
}else{
    console.log(`John's BMI ${jhonBMI} is higher than Mark's ${markBMI}!`);
}

//20th : Type Conversion and Coercion

            //Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('shubham'));
console.log(typeof NaN);

console.log(String(23), 23);

            //Type Coercion
console.log("I am " + 23 + "years old");
console.log("23" - "10" - 3);//number
console.log("23" / "2");

let n = "1" + 1;//string
n = n - 1;//number
console.log(n);

// 21th : Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("shubham"));
console.log(Boolean({}));
console.log(Boolean(""));

const money= 100;
if(money){
    console.log("i have money");
}else{
    console.log("i don't have money")
}

let height=0;
if(height){
    console.log("defined");
}else{
    console.log("undefined")
}

// 22th : Equality Operators: == vs. ===


const age2 = '18';
if(age2 === 18) console.log("strict");
if(age2 == 18) console.log("loose");

const favNumber =Number (prompt("What is your favourite number?"));
console.log(favNumber);
if(favNumber === 22){
    console.log(`${favNumber} is Number`)
}else if(favNumber === 20){
    console.log(`${favNumber} is number`)
}else{
    console.log("Number is not 22 or 20")
}

if( favNumber !== 20) console.log("Why not 20?");

// 23th : Boolean logic
let one=1;
let two=2;
if(one===1 && two===2){
    console.log("AND");
}
if(one===1 || two===2){
    console.log("OR");
}
if(one!==2 && two===2){
    console.log("AND");
}

// 24th : Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!");
}else{
    console.log("Someone else should drive...")
}

// 25th : Coding Challenge #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas)
// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins Wins");
// }else if(scoreDolphins < scoreKoalas){
//     console.log("Koalas Wins");
// }else{
//     console.log("Both Wins")
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas)
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins Wins");
}else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log("Koalas Wins");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both Wins")
}else{
    console.log("No one wins")
}

// 26th : Switch Statement
const  day = "thursday";
switch(day){
    case "monday" : console.log(day)
    break;
    case "tuesday" : console.log(day)
    break;
    case "wednesday" : console.log(day)
    break;
    case "thursday" : console.log(day)
    break;
    case "friday" : console.log(day)
    break;
    case "satarday" : console.log(day)
    break;
    case "sunday" : console.log(day)
    break;
    default:
        console.log("Not a valid day");
}

if(day === "monday"){
    console.log(day)
}else if(day === "tuesday"){
    console.log(day)
}else if(day === "wednesday" || day === "thursday"){
    console.log(day)
}else if(day === "friday"){
    console.log(day)
}else if(day === "saturday" || day === "sunday"){
    console.log(day)
}else {
    console.log("Not a valid day");
}

// 27th statements and expressions
//expressions
3 + 4
1234
true && false && !false
const me="shubham";
if(23 > 10){//statement
    const str=`hello ${me}`;//expression
}

// 28th : The Conditional (Ternary) Operator
const age3= 13;
age3 >= 18 ? console.log("greater") : console.log("smaller")

console.log(`my height is ${age3 >= 18 ? "greater" : "smaller"} than you`)

// 29th : Coding challenge #4
const bill = 400;
const tip = bill <=300 && bill >= 50 ? bill*.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill+tip}`)


// 30th : JavaScript Releases: ES5, ES6+ and ESNext








// Practice Assignment

// values and variables
let country = "Portugal";
let continent="Europe";
let population = 10;
let isIsland = false;
let language;

// data types
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// let, const and var
let language1="Portuguese";
const country1 = "Portugal";
const continent1="Europe";
const isIsland1 = false;

console.log(language1);
    //country1 ="india"; //constant values not changed.
console.log(country1);
    //isIsland1 = true;
console.log(isIsland1);

//Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
country +
' is in ' +
continent +
', and its ' +
population +
' million people speak ' +
language;
console.log(description1);

// Strings and Template Literals
const description = `${country} is in ${continent},and its ${population} million people speak ${language}`;
console.log(description)

//Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
    } else {
    console.log(
    `${country}'s population is ${33 - population} million below average`,
    );
}

// Type Conversion and Coercion
console.log('9' - '5'); 
console.log('19' - '13' + '17'); 
console.log('19' - '13' + 17); 
console.log('123' < 57); 
console.log(5 + 6 + '4' + 9 - 4 - 2);

//  Equality Operators: == vs. ===
            //1st
const numNeighbours = prompt('How many neighbour countries does your country have?');
  
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

            //2nd
const numNeighbours1 = Number(
    prompt('How many neighbour countries does your country have?')
);

if (numNeighbours1 === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours1 > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


// Logical Operators
let language2="english";
let population2=10;
let country2=" Portugal";
let isIsland2;
if (language2 === 'english' && population2 < 50 && !isIsland2)
{
 console.log(`You should live in ${country2} :)`);
} else {
console.log(`${country2} does not meet your criteria :(`);
}

// The switch Statement
let language3="";
switch (language3) {
    case 'chinese':
    case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
    case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
    case 'english':
    console.log('3rd place');
    break;
    case 'hindi':
    console.log('Number 4');
    break;
    case 'arabic':
    console.log('5th most spoken language');
    break;
    default:
    console.log('Great language too :D');
}

// The Conditional (Ternary) Operator
let country3="India";
let population3=35;
console.log(
    `${country3}'s population is ${population3 > 33 ? 'above' :
    'below'} average`,
);


