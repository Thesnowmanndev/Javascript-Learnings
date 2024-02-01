/* Introduction to Arrays
Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

Log to the console whether the array has 4 elements or not (true or false).

Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values. */
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
