/* Dot vs. Bracket Notation 
Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation. */
console.log(`\n --- Dot vs. Bracket Notation ---`);
let populationShortened = ``;

const populationFormatted = (population) => {
    const firstDigit = population.toString()[0]; // Strings are essentially an array of characters
    const secondDigit = population.toString()[1];
    const thirdDigit = population.toString()[2];
    let val = ``;
    if (population >= 1000000000) {
        val = `${firstDigit}.${secondDigit} billion`;
    } else if (population >= 1000000) {
        val = `${firstDigit}.${secondDigit} million`;
    } else if (population >= 100000) {
        val = `${firstDigit}${secondDigit}${thirdDigit}K`;
    } else if (population >= 10000) {
        if (thirdDigit !== `0`) {
            val = `${firstDigit}${secondDigit}.${thirdDigit}K`;
        } else {
            val = `${firstDigit}${secondDigit}K`;
        }
    } else if (population >= 1000) {
        if (secondDigit == `0`) {
            val = `${firstDigit}K`;
        } else {
            val = `${firstDigit}.${secondDigit}K`;
        }
    } else {
        val = `${population}`;
    }
    return val;
};

populationShortened = populationFormatted(myCountry.population);
console.log(
    `${myCountry.country} has ${populationShortened} people, ${myCountry.nativeSpeakers} of the population speak ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries, and it's capital is ${myCountry.capital}.`
);

myCountry.population = myCountry[`population`] + 2000000; // Find a variable via string using bracket notation
console.log(myCountry.population);

myCountry.population = myCountry.population - 2000000;
console.log(myCountry.population);
