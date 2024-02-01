/* Function Declarations vs. Expressions
The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations). */
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
