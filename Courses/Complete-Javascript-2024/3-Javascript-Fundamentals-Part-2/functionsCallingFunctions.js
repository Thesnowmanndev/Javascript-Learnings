/* Functions Calling Other Functions
Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice. */
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
