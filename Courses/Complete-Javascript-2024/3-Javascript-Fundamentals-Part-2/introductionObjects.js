/* Introduction to Objects 
Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments). */
console.log(`\n --- Introduction to Objects ---`);

const myCountry = {
    country: `United States`,
    capital: `Washington D.C`,
    language: `English`,
    nativeSpeakers: `78%`,
    population: 8100000000,
    neighbours: [`Canada`, `Mexico`],
}; // Object variables are organized alphabetically in memory
console.log(myCountry);
