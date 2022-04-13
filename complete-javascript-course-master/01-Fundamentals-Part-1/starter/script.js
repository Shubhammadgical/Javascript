// 9th Linking a javascript file
// let js = "amazing";
// if(js === "amazing") alert("Javascript is FUN");
// console.log(10 + 5 - 2);

// 10th values and variables
let firstName = "shubham";
console.log(firstName);

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
