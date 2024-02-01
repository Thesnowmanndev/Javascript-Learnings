// declaration version of creating a function
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
