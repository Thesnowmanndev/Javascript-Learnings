// Strict mode -- has to be at the top of the file
'use strict';

console.log(`--- Strict Mode ---`);
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; -- Strict mode catches this (Uncaught ReferenceError)

if (hasDriversLicense) {
    console.log(`I can drive`);
} else console.log(`I can't drive`);

// Functions
console.log(`\n --- Functions ---`);
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return description;
}

const unitedStates = describeCountry(
    `United States`,
    `333.29 million`,
    `Washington DC`
);
console.log(unitedStates);

const canada = describeCountry(`Canada`, `38.93 million`, `Ottawa`);
console.log(canada);

const mexico = describeCountry(`Mexico`, `127.5 million`, `Mexico City`);
console.log(mexico);

// Function Declarations vs Expressions
console.log(`\n --- Function Declarations vs Expressions ---`);

const worldPopulation = 8100000000;
const unitedStatesPopulation = 333290000;
const canadaPopulation = 38930000;
const mexicoPopulation = 127500000;

// declaration version
function percentageOfWorldPopV1(population) {
    const percentage = (population / worldPopulation).toFixed(3);
    return percentage;
}

const unitedStatesPercentage = percentageOfWorldPopV1(unitedStatesPopulation);
const canadaPercentage = percentageOfWorldPopV1(canadaPopulation);
const mexicoPercentage = percentageOfWorldPopV1(mexicoPopulation);

console.log(
    `United States makes up ${unitedStatesPercentage}% of the world, Canada makes up ${canadaPercentage}% of the world, and Mexico makes up ${mexicoPercentage}% of the world.`
);

// expression version
const percentageOfWorldPopV2 = function (population) {
    return (population / worldPopulation).toFixed(3);
};

const unitedStatesPercentageV2 = percentageOfWorldPopV2(unitedStatesPopulation);
const canadaPercentageV2 = percentageOfWorldPopV2(canadaPopulation);
const mexicoPercentageV2 = percentageOfWorldPopV2(mexicoPopulation);

console.log(
    `United States makes up ${unitedStatesPercentageV2}% of the world, Canada makes up ${canadaPercentageV2}% of the world, and Mexico makes up ${mexicoPercentageV2}% of the world.`
);

// Arrow Functions
console.log(`\n --- Arrow Functions ---`);

const percentageOfWorldPopV3 = (population) =>
    (population / worldPopulation).toFixed(3);

const unitedStatesPercentageV3 = percentageOfWorldPopV3(unitedStatesPopulation);
const canadaPercentageV3 = percentageOfWorldPopV3(canadaPopulation);
const mexicoPercentageV3 = percentageOfWorldPopV3(mexicoPopulation);

console.log(
    `United States makes up ${unitedStatesPercentageV2}% of the world, Canada makes up ${canadaPercentageV2}% of the world, and Mexico makes up ${mexicoPercentageV2}% of the world.`
);

// Functions calling other functions
console.log(`\n --- Functions calling other functions ---`);

function describePopulation(country, population) {
    const percentage = percentageOfWorldPopV1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.\n`;
}

const unitedStatesPercentageV4 = describePopulation(
    `United States`,
    unitedStatesPopulation
);
const canadaPercentageV4 = describePopulation(`Canada`, canadaPopulation);
const mexicoPercentageV4 = describePopulation(`Mexico`, mexicoPopulation);

console.log(
    `${unitedStatesPercentageV4}${canadaPercentageV4}${mexicoPercentageV4}`
);

// Introduction to arrays
console.log(`\n --- Introduction to arrays ---`);

const greenlandPopulation = 56660;
const populations = [
    unitedStatesPopulation,
    canadaPopulation,
    greenlandPopulation,
    mexicoPopulation,
];

if (populations.length == 4) {
    console.log(`The array has 4 elements.`);
} else {
    console.log(`The array does not have 4 elements.`);
}

const countryNames = [`United States`, `Canada`, `Greenland`, `Mexico`];
const percentages = [
    percentageOfWorldPopV1(unitedStatesPopulation),
    percentageOfWorldPopV1(canadaPopulation),
    percentageOfWorldPopV1(greenlandPopulation),
    percentageOfWorldPopV1(mexicoPopulation),
];

let arrayIndex = 0;
for (let i = 0; i < percentages.length; i++) {
    console.log(
        `${countryNames[arrayIndex]} population is ${percentages[arrayIndex]} % of the total world population.`
    );
    arrayIndex++;
}

// Basic Array Operations (Methods)
console.log(`\n --- Basic Array Operations (Methods) ---`);

const neighbours = [`Canada`, `Mexico`];
const utopiaName = `Utopia`;

neighbours.push(utopiaName); // Add to end of an array
console.log(neighbours);

neighbours.pop(); // Removes variable at the end of an array
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf(`Mexico`)] = `Sweden`; // Replace a variable in an Array
console.log(neighbours);

neighbours.shift(); // Removes variable at the beginning of an array
console.log(neighbours);

neighbours.unshift(`Canada`); // Add to the beginning of an array
neighbours[neighbours.indexOf(`Sweden`)] = `Mexico`;
console.log(neighbours);

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.
/* Write your code below. Good luck! 🙂 */

const bills = [125, 555, 44];
const tips = [];

function calcTip(billValue) {
    let tip = 0;

    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * 0.2;
    }

    return tip;
}

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
}

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
