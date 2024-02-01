// expression version of creating a function
const percentageOfWorldPopV2 = function (population) {
    return (population / worldPopulation).toFixed(3);
};

const unitedStatesPercentageV2 = percentageOfWorldPopV2(unitedStatesPopulation);
const canadaPercentageV2 = percentageOfWorldPopV2(canadaPopulation);
const mexicoPercentageV2 = percentageOfWorldPopV2(mexicoPopulation);

console.log(
    `United States makes up ${unitedStatesPercentageV2}% of the world, Canada makes up ${canadaPercentageV2}% of the world, and Mexico makes up ${mexicoPercentageV2}% of the world.`
);
