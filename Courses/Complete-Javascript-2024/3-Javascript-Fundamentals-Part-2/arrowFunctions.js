/* Arrow Functions
Recreate the last assignment, but this time create an arrow function called percentageOfWorld3. */
console.log(`\n --- Arrow Functions ---`);

const percentageOfWorldPopV3 = (population) =>
    (population / worldPopulation).toFixed(3);

const unitedStatesPercentageV3 = percentageOfWorldPopV3(unitedStatesPopulation);
const canadaPercentageV3 = percentageOfWorldPopV3(canadaPopulation);
const mexicoPercentageV3 = percentageOfWorldPopV3(mexicoPopulation);

console.log(
    `United States makes up ${unitedStatesPercentageV2}% of the world, Canada makes up ${canadaPercentageV2}% of the world, and Mexico makes up ${mexicoPercentageV2}% of the world.`
);
