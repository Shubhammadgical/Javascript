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


