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
