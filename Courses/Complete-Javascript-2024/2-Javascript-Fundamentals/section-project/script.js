// CODING ASSIGNMENTS FROM COURSE -- COMMENTED FOR REFERENCE

// Coding Assignment 1 -- Values and Variables
let country = "United States";
let continent = "North America";
let population = 335966754;

console.log("I live in the " + country + ".");
console.log("The " + country + " is part of the " + continent + " continent.");
console.log("There are " + population.toString() + " Americans currently.");

// Coding Assignment 2 -- Data Types
let isIsland = false;

console.log(country + " variable is a " + typeof country + ".");
console.log(population + " variable is a " + typeof population + ".");
console.log(isIsland + " variable is a " + typeof isIsland + ".");

// Coding Assignment 3 -- let, const, var
const language = "english";
// language = "Chinese";  // Throws error

// Coding Assignment 4 -- Basic Operators
let splitPopulation = population / 2;
console.log(splitPopulation);

let populationIncrease = population++;
console.log(populationIncrease);

let finlandPopulation = 6000000;
let isPopulationLarger = population > finlandPopulation;
console.log("Is the US population larger than Finlands? " + isPopulationLarger);

const averagePopulationSize = 33000000;
isPopulationLarger = population > averagePopulationSize;
console.log(
  "Is the US population larger than the average? " + isPopulationLarger
);

const unitedStatesName = "United States";
const unitedStatesContinent = "North America";
const unitedStatesPrimaryLanguage = "English";
const populationFormatted = population.toLocaleString();
let description =
  unitedStatesName +
  " is in " +
  unitedStatesContinent +
  ", and its " +
  populationFormatted.toString() +
  " people mostly speak " +
  unitedStatesPrimaryLanguage +
  ".";

console.log(description);

// Coding Assignment 5 -- Strings and Template Literals

description = `${unitedStatesName} is in ${unitedStatesContinent}, and its ${populationFormatted} people mostly speak ${unitedStatesPrimaryLanguage}.`;
console.log(description);

// Coding Assignment 6 -- if/else statements
let averagePopulation = 33000000;

if (population > averagePopulation) {
  console.log(`My nation's population is greater than the average population.`);
} else {
  console.log(`My nation's population is less than the average population.`);
}

// Coding Assignment 7 -- Type Conversion and Coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// Coding Assignment 8 -- Equality Operators
/* const numNeighbours = Number(
  prompt(`How many neighbor countries does your country have?`)
);

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else {
  console.log(`No borders.`);
} */

// Coding Assignment 8 -- Logical Operators
const languageRequirement = `English`;
const maxPopulationRequirement = 50000000;

const unitedStatesLanguage = `English`;
const unitedStatesPopulation = 335966754;

if (
  (languageRequirement === unitedStatesLanguage) &
  (unitedStatesPopulation <= maxPopulationRequirement)
) {
  console.log(`The United States meets both requirements.`);
} else if (
  (languageRequirement === unitedStatesLanguage) &
  (unitedStatesPopulation > maxPopulationRequirement)
) {
  console.log(
    `The United States speaks the required language but it's population is greater than the max population requirement.`
  );
} else if (
  (languageRequirement != unitedStatesLanguage) &
  (unitedStatesPopulation <= maxPopulationRequirement)
) {
  console.log(
    `The United States does not speak the required language, but it does have a smaller population than the max population requirement.`
  );
} else {
  console.log(
    `The United States does not speak the required language and has a population size greater than the max population requirement.`
  );
}

// Coding Assignment 9 -- Switch statement2
switch (language) {
  case `chinese`:
  case `mandarin`:
    console.log(`MOST number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers.`);
    break;
  case `english`:
    console.log(`3rd place.`);
    break;
  case `hindi`:
    console.log(`Number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
    break;
}

// Coding Assignment 10 -- Conditional (Ternary) Operator
const testPopulationNumber = 33000000;
unitedStatesPopulation > testPopulationNumber
  ? console.log(`United States population is above the average. 🏆`)
  : console.log(`United States population is less than the average. 🤷‍♂️`);
